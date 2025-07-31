import { IoChatbubblesSharp } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import Sample from "./components/sample";
import OpenedChat from "./components/openedChat";
import Sidebar from "./components/sidebar";
import ChatSection from "./components/chatSection";
import NotCreatedSection from "./components/notCreatedSection";
import Login_And_Signup from "./components/Login_And_Signup";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => setIsLoggedIn(true);

  const logoutHandler = () => setIsLoggedIn(false);

  return (
    <>
      {!isLoggedIn ? (
        <Login_And_Signup onLoggedIn={loginHandler} />
      ) : (
        <div className="app fixed w-full h-screen pt-8 bg-zinc-700 text-white flex gap-2">
          <Sidebar
            onLogout={logoutHandler}
            imageUrl="https://images.unsplash.com/photo-1744566917600-57a72a02a6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"
          />
          <ChatSection
            name="Me"
            imageUrl="https://plus.unsplash.com/premium_photo-1727343268376-0521b84e43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="openedChatSection w-[65%] h-full bg-zinc-900 rounded-t-2xl overflow-hidden mr-2 border-2 flex justify-center items-center text-zinc-700">
            {/* <Sample /> */}
            <OpenedChat />

            {/* <NotCreatedSection /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
