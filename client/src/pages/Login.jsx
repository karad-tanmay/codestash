import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import PixelCard from "../components/PixelCard";
// import Orb from "../components/Orb";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
            // alert(`Token: ${response.data.token}`)
            setUsername('');
            setPassword('');
            navigate(`/home/${username}`);
        } catch (err) {
            alert("Login Failed.");
            setUsername('');
            setPassword('');
            console.error('Login failed: ', err);
        }
    };

    return (
        <div className="flex justify-center font-[Iosevka] text-white w-full h-screen content-center bg-zinc-950 p-5">
            <div className="flex flex-col justify-center gap-2 h-full items-center">
                <h1 className="text-center text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-400">CodeStash.</h1>
                <div className="w-fit h-fit px-8 md:px-15 pt-6 md:pt-10 pb-3 md:pb-8 border border-white/80 bg-white/10 rounded-4xl md:w-md lg:w-lg">
                    <h1 className="text-4xl md:text-5xl text-white/95 font-semibold text-center mb-5 md:mb-8">Login</h1>
                    <form className="flex flex-col gap-3 justify-center place-center mb-2 md:mb-4 items-center" onSubmit={handleSubmit}>
                        <input className="md:w-xs lg:w-sm md:h-12 text-lg md:text-xl px-2 md:px-3 py-1 md:py-2 border border-white/50 bg-white/10 rounded-md placeholder:text-white/50 focus:outline-none focus:ring-1" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input className="md:w-xs lg:w-sm md:h-12 text-lg md:text-xl px-2 md:px-3 py-1 md:py-2 border border-white/50 bg-white/10 rounded-md placeholder:text-white/50 focus:outline-none focus:ring-1" type="password" placeholder="Passwd" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="self-center md:text-xl px-4 md:px-8 py-1 md:py-2 mt-1 md:mt-3 border border-white/80 bg-white/20 border-2 rounded-full w-fit text-center hover:bg-white/40" type="submit">Login</button>
                    </form>
                    <h3 className="text-center md:text-lg">First time here? <a href="/register" className="text-slate-300 hover:underline underline-offset-3">Create-Account</a></h3>
                </div>
            </div>
        </div>
    )
};

export default Login;