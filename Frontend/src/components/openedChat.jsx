import { IoSend } from "react-icons/io5";
const openedChat = () => {
  return (
    <>
      <div className="openedPersonChat w-full flex flex-col  overflow-hidden ">
        <div className="openedTop w-full h-[10vh] p-5 bg-zinc-600 flex items-center gap-5 cursor-pointer hover:bg-zinc-600/90">
          <div className="w-14 h-14 border-1 border-zinc-700 bg- rounded-full bg-[url(https://plus.unsplash.com/premium_photo-1749836090972-c31e9c878b92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center "></div>
          <h5 className="text-2xl text-white">Waseem Shazad</h5>
        </div>
        <div className="openedMiddle w-full h-[75vh] flex flex-col gap-2 p-2">
          <div className="clientAdminChat overflow-y-auto w-full h-full flex flex-col gap-5 p-5">
            <div className="message1 max-w-1/2 self-start bg-zinc-700 text-white py-1 px-2 rounded-md">
              <h5>Zain wo project kitna kr lia?</h5>
            </div>
            <div className="message2 max-w-1/2 self-end bg-green-700 text-white py-1 px-2 rounded-md">
              <h5>Hmm kr raha hoo thora thora bss.</h5>
            </div>
            <div className="message1 max-w-1/2 self-start bg-zinc-700 text-white py-1 px-2 rounded-md">
              <h5>mst hai jaldi kr?</h5>
            </div>
            <div className="message2 max-w-1/2 self-end bg-green-700 text-white py-1 px-2 rounded-md">
              <h5>haa g waseem bhai kr raha hoo</h5>
            </div>
            <div className="message1 max-w-1/2 self-start bg-zinc-700 text-white py-1 px-2 rounded-md">
              <h5>
                aur repo abhi tk ni bnai? me subha se wait kr raha sunday hai.
              </h5>
            </div>
            <div className="message2 max-w-1/2 self-end bg-green-700 text-white py-1 px-2 rounded-md">
              <h5>
                waseem bhai wo bnai hai lakin sham ko bnai hai. bss me ne apko
                collab wala link kab ka send kia hoa hai
              </h5>
            </div>
          </div>
        </div>
        <div className="openedBottom w-full h-[10vh] p-5 border-zinc-600 border-t-2 flex justify-center items-center gap-2">
          <input
            className="w-full p-2 rounded text-white outline-none "
            type="text"
            placeholder="Enter your message..."
          />
          <IoSend className="text-5xl cursor-pointer hover:bg-zinc-500 p-1 rounded" />
        </div>
      </div>
    </>
  );
};

export default openedChat;
