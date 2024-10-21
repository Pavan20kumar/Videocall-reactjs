import { useNavigate } from "react-router-dom"
import { useState } from "react"
function HomePage() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${input}`)
    }
    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={onSubmit}>
                <input type="text" className="form-control" placeholder="Enter Room ID" onChange={(e) => setInput(e.target.value)} />
                <button className="btn btn-primary mt-2 m-5">Join</button>
            </form>
        </div>
    )
}
export default HomePage;