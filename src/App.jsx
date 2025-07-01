import { useState } from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import Login from "./components/login";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { TbCirclePlus2 } from "react-icons/tb";

const App = () => {
  let [Focus, setFocus] = useState(false);
  return (
    <>
      {/* <Login /> */}
      <div className="app w-full h-screen pt-8 bg-zinc-700 text-white flex gap-2">
        <div className="sidebar flex flex-col justify-between pb-5 items-center w-1/20 pt-3 h-full rounded ">
          <div className="top flex flex-col gap-2">
            <h5 className="cursor-pointer border-l-2 border-indigo-500 bg-zinc-800 p-2 rounded text-center flex items-center justify-center hover:bg-zinc-800">
              <HiOutlineChatBubbleBottomCenterText className="text-2xl text-center" />
              {/* Chat */}
            </h5>
            <h5 className="cursor-pointer p-2 rounded text-center hover:bg-zinc-800">
              {/* Status */}
              <TbCirclePlus2 className="text-2xl text-center" />
            </h5>
            <h5 className="cursor-pointer p-2 rounded text-center flex items-center justify-center hover:bg-zinc-800">
              <PiPhoneCallFill className="text-2xl text-center" />
              {/* Calls */}
            </h5>
          </div>
          <div className="bottom flex flex-col gap-2">
            <h5 className="cursor-pointer p-2 rounded text-center flex items-center justify-center hover:bg-zinc-800">
              <IoMdSettings className="text-2xl text-center" />
              {/* Settings */}
            </h5>
            <h5 className="cursor-pointer p-2 rounded text-center hover:bg-zinc-900">
              {/* Profile */}
              <div className="w-8 h-8 border-1 border-zinc-700 bg- rounded-full bg-[url(https://plus.unsplash.com/premium_photo-1727343268376-0521b84e43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center"></div>
            </h5>
          </div>
        </div>
        <div className="InnerApp flex justify-between">
          <div className="Chats w-[34%] h-full bg-zinc-800 rounded p-3">
            <div
              name="searchField"
              className={`search p-2 flex justify-between items-center bg-zinc-700 rounded w-full border-b-2 
              ${Focus ? "border-indigo-600" : "border-zinc-500"}
              `}
            >
              <LiaSearchSolid />
              <input
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className="w-full mx-2 outline-none bg-transparent"
                type="search"
              />
            </div>
            <div className="chatList w-full h-[90%] overflow-y-auto scroll-auto flex flex-col gap-2 p-2 mt-4 rounded">
              <div className="person1 w-full py-2 rounded flex gap-5 items-center cursor-pointer hover:bg-zinc-900 p-2">
                <div className="w-14 h-14 border-1 border-zinc-700 bg- rounded-full bg-[url(https://plus.unsplash.com/premium_photo-1727343268376-0521b84e43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center "></div>
                <h5 className="text-xl">Me</h5>
              </div>
              <div className="person2 w-full py-2 rounded flex gap-5 items-center cursor-pointer hover:bg-zinc-900 p-2">
                <div className="w-14 h-14 border-1 border-zinc-700 bg- rounded-full bg-[url(https://plus.unsplash.com/premium_photo-1749836090972-c31e9c878b92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center "></div>
                <h5 className="text-xl">Waseem Shazad</h5>
              </div>
            </div>
          </div>
          <div className="openedChatSection w-[65%] h-full bg-zinc-900 rounded border-2 flex justify-center items-center text-zinc-700">
            <div className="logo flex flex-col items-center gap-4 mx-36">
              <IoChatbubblesSharp className="text-8xl" />
              <h5 className="text-2xl">ChatApp for Browser</h5>
              <p className="text-center">
                Send and receive messages through all over the world using your
                phone, laptop and any other device which can run internet upto 4
                devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
