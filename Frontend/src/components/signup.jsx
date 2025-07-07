import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

const Signup = () => {
  const notify = () => toast.success("Form Submitted Successfully!");
  const [form, setform] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    CPassword: ""
  });
  const [error, setError] = useState("");

  const handlerSubmitBtn = async (e) => {
    e.preventDefault();

    // Password validation
    const passwordValidation = {
      match: form.password === form.CPassword,
      capital: /[A-Z]/.test(form.password),
      number: /[0-9]/.test(form.password),
      special: /[`~!@#$%^&*()_+{}|:"<>?,./;']/.test(form.password)
    };

    if (!passwordValidation.match) {
      setError("Passwords must be same!");
      return;
    }
    if (!passwordValidation.capital) {
      setError("Password must have a capital letter!");
      return;
    }
    if (!passwordValidation.number) {
      setError("Password must have a number!");
      return;
    }
    if (!passwordValidation.special) {
      setError("Password must have a special character!");
      return;
    }

    const data = {
      first_name: form.fname,
      last_name: form.lname,
      username: form.username,
      email: form.email,
      password: form.password,
      re_password: form.CPassword 
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
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
        CPassword: ""
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
        <div className="absolute top-[-310px] loginBox blur-3xl bg-[#11ff0086] rounded-full w-1/4 h-1/2"></div>
        <form onSubmit={handlerSubmitBtn} className="fields flex flex-col justify-center items-center gap-2">
          <div className="text-red-600">{error}</div>
          <input name="fname" required value={form.fname} onChange={(e) => { setform({ ...form, fname: e.target.value }) }} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="first name" type="text" />
          <input name="lname" required value={form.lname} onChange={(e) => { setform({ ...form, lname: e.target.value }) }} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="last name" type="text" />
          <input name="name" required minLength={4} value={form.username} onChange={(e) => { setform({ ...form, username: e.target.value }) }} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="username" type="text" />
          <input name="email" required value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="email" type="email" />
          <input name="password" required minLength={8} value={form.password} onChange={(e) => { setform({ ...form, password: e.target.value }) }} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="password" type="password" />
          <input name="CPassword" required minLength={8} value={form.CPassword} onChange={(e) => { setform({ ...form, CPassword: e.target.value }) }} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="confirm password" type="password" />
          <input className="bg-[#11ff0086] w-full outline-none rounded p-2 text-white cursor-pointer" type="submit" />
          {/*<h5 className="">OR</h5>
           <GoogleLogin onSuccess={(credentialResponse) => {
            console.log(jwtDecode(credentialResponse.credential));
          }}
            onError={() => {
              console.log("Login Failed");
            }}
          /> */}
          <ToastContainer theme="dark" draggable={true} />
        </form>
      </div>
    </>
  );
};

export default Signup;
