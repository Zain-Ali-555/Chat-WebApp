import { useRef } from "react";
import { IoSend } from "react-icons/io5";
const OpenedChat = () => {
  // let input = document.querySelector(".SendIcon");
  const inputRef = useRef();
  let valueGetHandler = () => {
    console.log("Working!");
    let value = inputRef.current.value;
    let newDiv = document.createElement("div");
    newDiv.className =
      "message2 max-w-1/2 self-end bg-green-700 text-white py-1 px-2 rounded-md";
    newDiv.innerHTML = `<h5>${value}</h5>`;

    console.log("Not working!");
  };
  return (
    <>
      <div className="openedPersonChat w-full flex flex-col  overflow-hidden ">
        <div className="openedTop w-full h-[10vh] p-5 bg-zinc-600 flex items-center gap-5 cursor-pointer hover:bg-zinc-600/90">
          <img
            className="w-14 h-14 border-1 border-zinc-700 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1749836090972-c31e9c878b92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h5 className="text-2xl text-white">Waseem Shazad</h5>
        </div>
        <div className="openedMiddle w-full h-[75vh] flex flex-col gap-2 p-2">
          <div className="clientAdminChat overflow-y-auto w-full h-full flex flex-col gap-5 p-5"></div>
        </div>
        <div className="openedBottom w-full h-[10vh] p-5 border-zinc-800 border-t-2 flex justify-center items-center gap-2">
          <input
            ref={inputRef}
            className="w-full p-2 rounded text-white outline-none "
            type="text"
            placeholder="Enter your message..."
          />
          <IoSend
            onClick={valueGetHandler}
            className="SendIcon text-5xl cursor-pointer hover:bg-zinc-600 p-1 rounded"
          />
        </div>
      </div>
    </>
  );
};

export default OpenedChat;
