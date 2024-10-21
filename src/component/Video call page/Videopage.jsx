import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { App_ID,SERVER_SECRET } from '../Links';
import { useParams} from 'react-router-dom';


function Videopage() {
    const {roomId} = useParams();
    const myMeeting = async (element) => {
        const appID = App_ID;
        const serverSecret = SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), roomId);
        console.log(kitToken);
    
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
               window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomId=' +
                roomId,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,

          },
          showScreenSharingButton: true,
        });
      };
 
  return (
    <div className="App">
       <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
    </div>
  );
}

export default Videopage;
