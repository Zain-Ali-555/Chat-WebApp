import { useState } from "react";
import { IoSend } from "react-icons/io5";
const OpenedChat = () => {
  const [message, setMessage] = useState("");

  const [messagesList, setMessagesList] = useState([]);

  let valueGetHandler = () => {
    let newMessage = message.trim();
    if (newMessage === "") return;
    setMessagesList([...messagesList, newMessage]);
    setMessage("");
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
          <div className="clientAdminChat overflow-y-auto w-full h-full p-5">
            {/* Receiving  Message */}
            {/* <div className="sender_he flex flex-col gap-2 w-full border-white mb-2">
              <h5 className="bg-zinc-700 w-fit py-1 px-2 rounded text-white">
                Hi, there my name is Zain Ali. What's up?
              </h5>
            </div> */}
            {/* Sending Message */}
            {messagesList.map((dets, index) => {
              if (dets === "") {
                alert("You can't send empty messages.");
                return;
              }
              return (
                <div
                  key={index}
                  className="sender_we flex flex-col items-end   gap-2 w-full border-green-600 mb-2"
                >
                  <h5 className="bg-green-600 w-fit py-1 px-2 rounded text-white">
                    {dets}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className="openedBottom w-full h-[10vh] p-5 border-zinc-800 border-t-2 flex justify-center items-center gap-2">
          <input
            onInput={(e) => {
              setMessage(e.target.value);
              // console.log(e.target.value);
            }}
            className="w-full p-2 rounded text-white outline-none "
            onKeyDown={(e) => {
              if (e.key === "Enter") valueGetHandler();
            }}
            type="text"
            placeholder="Enter your message..."
            value={message}
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
