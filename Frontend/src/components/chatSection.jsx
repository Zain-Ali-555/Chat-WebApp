import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import Person from "./person";
const ChatSection = () => {
  let [Focus, setFocus] = useState(false);
  return (
    <>
      <div className="Chats w-[34%] h-full bg-zinc-800 rounded p-3">
        <div
          className={`search p-2 flex justify-between items-center bg-zinc-700 rounded w-full border-b-2 ${
            Focus ? "border-indigo-600" : "border-zinc-500"
          }`}
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
          <Person name="Me" imageUrl="https://images.unsplash.com/photo-1744566917600-57a72a02a6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8" />
          <Person name="Ehtisham Hussain" imageUrl="https://plus.unsplash.com/premium_photo-1727343268376-0521b84e43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Person name="Waseem Shazad" imageUrl="https://plus.unsplash.com/premium_photo-1749836090972-c31e9c878b92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Person name="Najaf Ali" imageUrl="https://images.unsplash.com/photo-1741412252348-86050c6ae29e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Person name="Zain Ali" imageUrl="https://images.unsplash.com/photo-1669411162387-0415e1d0dc7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyMHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8" />
          <Person name="Syed Jaffar Raza Kazmi" imageUrl="https://images.unsplash.com/photo-1735915168669-e855a7aaabbb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </>
  );
};

export default ChatSection;
