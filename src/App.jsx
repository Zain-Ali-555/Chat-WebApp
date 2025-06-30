import { IoChatbubblesSharp } from "react-icons/io5";

const App = () => {
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
        <div className="Chats w-1/4 h-full bg-zinc-800 rounded border-2"></div>
        <div className="openedChatSection w-[65%] h-full bg-zinc-900 rounded border-2 flex justify-center items-center text-zinc-700">
          <div className="logo flex flex-col items-center gap-4 mx-36">
            <IoChatbubblesSharp className="text-8xl" />
            <h5 className="text-2xl">ChatApp for Browser</h5>
            <p className="text-center">Send and receive messages through all over the world using your phone, laptop and any other device which can run internet upto 4 devices.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
