import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const App = () => {
 const [email, setMail] = useState("");
 const [password, setPassword] = useState("");

 let handlerSubmitBtn =(e)=>{
  e.preventDefault();
  console.log("Email: ",email);
  console.log("Password: ", password);
 }

  return (
    <>
     <div className="background bg-black text-white w-full h-screen p-5 flex justify-center ">
        <div className="absolute top-[-310px] loginBox blur-3xl bg-[#11ff0086] rounded-full w-1/4 h-1/2"></div>
        <form onSubmit={handlerSubmitBtn} className="fields flex flex-col justify-center items-center gap-2">
          <input required minLength={4} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="name" type="text" />
          <input required value={email} onChange={(e)=> setMail(e.target.value)} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="email" type="email" />
          <input required minLength={8} value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white" placeholder="password" type="password" />
          <input className="bg-[#11ff0086] w-full outline-none rounded p-2 text-white cursor-pointer" type="submit" />
        <h5 className="">OR</h5>
      <GoogleLogin onSuccess={(credentialResponse) => {
          console.log(jwtDecode(credentialResponse.credential));
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        />    
        </form>
      </div>
      
      
    </>
  );
};

export default App;
