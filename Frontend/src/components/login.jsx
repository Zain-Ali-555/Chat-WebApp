import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

const Login = () => {
    const notify = () => toast.success("Form Submitted Successfully!");
    const [form, setform] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handlerSubmitBtn = async (e) => {
        e.preventDefault();

        const data = {
            username: form.name,
            email: form.email,
            password: form.password,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/users/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            notify();
            setError("");
            setform({
                email: "",
                password: ""
            });
        } catch (error) {
            console.error('There was an error!', error);
            const errorMessage = error.response?.data?.message ||
                Object.values(error.response?.data || {})[0]?.[0] ||
                'Registration failed!';
            setError(errorMessage);
        }
    };

    return (
        <>
            <div className="background fixed bg-black text-white w-full h-screen p-5 flex justify-center ">
                <div className="absolute top-[-310px] loginBox blur-3xl bg-[#e5ff00] rounded-full w-1/4 h-1/2"></div>
                <form onSubmit={handlerSubmitBtn} className="fields flex flex-col justify-center items-center gap-2">
                    <div className="text-red-600">{error}</div>
                    <input name="email" required value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="email" type="email" />
                    <input name="password" required minLength={8} value={form.password} onChange={(e) => { setform({ ...form, password: e.target.value }) }} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="password" type="password" />
                    <input className="bg-[#b5c809] w-full outline-none rounded p-2 text-white cursor-pointer" type="submit" />
                    <h5 className="">OR</h5>
                    <GoogleLogin onSuccess={(credentialResponse) => {
                        console.log(jwtDecode(credentialResponse.credential));
                    }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                    <ToastContainer theme="dark" draggable={true} />
                </form>
            </div>
        </>
    );
};

export default Login;
