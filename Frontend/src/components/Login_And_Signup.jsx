import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login_And_Signup = (props) => {
  // Signup Logic
  const S_notify = () => toast.success("Form Submitted Successfully!");
  const [S_form, setSForm] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    CPassword: "",
  });
  const [error, setError] = useState("");

  const S_handlerSubmitBtn = async (e) => {
    e.preventDefault();

    // Password validation
    const passwordValidation = {
      match: S_form.password === S_form.CPassword,
      capital: /[A-Z]/.test(S_form.password),
      number: /[0-9]/.test(S_form.password),
      special: /[`~!@#$%^&*()_+{}|:"<>?,./;']/.test(S_form.password),
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
      first_name: S_form.fname,
      last_name: S_form.lname,
      username: S_form.username,
      email: S_form.email,
      password: S_form.password,
      re_password: S_form.CPassword,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/users/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      S_notify();
      setError("");
      setSForm({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
        CPassword: "",
      });
    } catch (error) {
      console.error("There was an error!", error);
      const errorMessage =
        error.response?.data?.message ||
        Object.values(error.response?.data || {})[0]?.[0] ||
        "Registration failed!";
      setError(errorMessage);
    }
  };

  // Login Logic

  const L_notify = () => toast.success("Login Successful!");
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [page, setPage] = useState(false);
  const L_handlerSubmitBtn = async (e) => {
    e.preventDefault();

    const data = {
      username: form.username,
      password: form.password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/jwt/create/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      L_notify();
      setError("");
      if (props.onLoggedIn) props.onLoggedIn();
      setForm({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("There was an error!", error);
      const errorMessage =
        error.response?.data?.detail ||
        Object.values(error.response?.data || {})[0]?.[0] ||
        "Login failed!";
      setError(errorMessage);
    }
  };
  let switchHandler = () => {
    setPage(!page);
    console.log("Clicked");
  };

  return (
    <>
      <div
        className={`${
          page ? "hidden " : "flex "
        }SignupPage fixed bg-black text-white w-full h-screen p-5 flex justify-center `}
      >
        <div className="absolute top-[-310px] loginBox blur-3xl bg-[#11ff0086] rounded-full w-1/4 h-1/2"></div>
        <form
          onSubmit={S_handlerSubmitBtn}
          className="fields flex flex-col justify-center items-center gap-2"
        >
          <div className="text-red-600">{error}</div>
          <input
            name="fname"
            required
            value={S_form.fname}
            onChange={(e) => {
              setSForm({ ...S_form, fname: e.target.value });
            }}
            className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white"
            placeholder="first name"
            type="text"
          />
          <input
            name="lname"
            required
            value={S_form.lname}
            onChange={(e) => {
              setSForm({ ...S_form, lname: e.target.value });
            }}
            className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white"
            placeholder="last name"
            type="text"
          />
          <input
            name="name"
            required
            minLength={4}
            value={S_form.username}
            onChange={(e) => {
              setSForm({ ...S_form, username: e.target.value });
            }}
            className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white"
            placeholder="username"
            type="text"
          />
          <input
            name="email"
            required
            value={S_form.email}
            onChange={(e) => setSForm({ ...S_form, email: e.target.value })}
            className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white"
            placeholder="email"
            type="email"
          />
          <input
            name="password"
            required
            minLength={8}
            value={S_form.password}
            onChange={(e) => {
              setSForm({ ...S_form, password: e.target.value });
            }}
            className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white"
            placeholder="password"
            type="password"
          />
          <input
            name="CPassword"
            required
            minLength={8}
            value={S_form.CPassword}
            onChange={(e) => {
              setSForm({ ...S_form, CPassword: e.target.value });
            }}
            className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white"
            placeholder="confirm password"
            type="password"
          />
          <input
            className="bg-[#11ff0086] w-full outline-none rounded p-2 text-white cursor-pointer"
            type="submit"
          />
          <h5
            onClick={switchHandler}
            className="text-green-700 cursor-pointer pb-1 hover:underline"
          >
            already have an account?
          </h5>
          <h5 className="">OR</h5>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(jwtDecode(credentialResponse.credential));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <ToastContainer theme="dark" draggable={true} />
        </form>
      </div>

      <div
        className={`${
          page ? "flex " : "hidden "
        }LoginPage fixed bg-black text-white w-full h-screen p-5 flex justify-center `}
      >
        <div className="absolute top-[-310px] loginBox blur-3xl bg-[#e5ff00] rounded-full w-1/4 h-1/2"></div>
        <form
          onSubmit={L_handlerSubmitBtn}
          className="fields flex flex-col justify-center items-center gap-2"
        >
          <div className="text-red-600">{error}</div>
          <input
            name="username"
            required
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white"
            placeholder="username"
            type="text"
          />
          <input
            name="password"
            required
            minLength={8}
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            className="bg-zinc-900 outline-none rounded border-2 border-zinc-700 p-2 w-full text-white"
            placeholder="password"
            type="password"
          />
          <input
            className="bg-[#b5c809] w-full outline-none rounded p-2 text-white cursor-pointer"
            type="submit"
          />
          <h5
            onClick={switchHandler}
            className="text-yellow-600 cursor-pointer pb-1 hover:underline"
          >
            Not have an account?
          </h5>

          <h5 className="">OR</h5>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
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

export default Login_And_Signup;
