import { useState } from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const App = () => {
  let [Focus, setFocus] = useState(false);
  return (
    <>
      <div className="app w-full h-screen bg-zinc-700 text-white flex justify-between p-5">
        <div className="sidebar flex flex-col justify-between items-center border-2 w-1/15 h-full rounded p-2">
          <div className="top flex flex-col gap-2">
            <h5 className="cursor-pointer border-2 p-2 rounded text-center">
              Chat
            </h5>
            <h5 className="cursor-pointer border-2 p-2 rounded text-center">
              Status
            </h5>
            <h5 className="cursor-pointer border-2 p-2 rounded text-center">
              Calls
            </h5>
          </div>
          <div className="bottom flex flex-col gap-5">
            <h5 className="cursor-pointer border-2 p-2 rounded text-center">
              Settings
            </h5>
            <h5 className="cursor-pointer border-2 p-2 rounded text-center">
              Profile
            </h5>
          </div>
        </div>
        <div className="Chats w-1/4 h-full bg-zinc-800 rounded border-2 p-3">
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
          <div className="chatList border-2 w-full h-[90%] overflow-y-auto scroll-auto flex flex-col gap-2 p-2 mt-4 rounded">
            <div className="person1 w-full py-2 rounded flex gap-5 items-center cursor-pointer hover:bg-zinc-900 p-2">
              <div className="w-14 h-14 border-1 border-zinc-700 bg- rounded-full bg-[url(https://plus.unsplash.com/premium_photo-1727343268376-0521b84e43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center "></div>
              <h5 className="text-xl">Zain Ali</h5>
            </div>
            <div className="person1 w-full py-2 rounded flex gap-5 items-center cursor-pointer hover:bg-zinc-900 p-2">
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
    </>
  );
};

export default App;
