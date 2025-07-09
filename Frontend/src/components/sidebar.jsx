import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { TbCirclePlus2 } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

const Sidebar = (Props) => {
  const [Styling, setStyling] = useState("chat");

  let logoutHandler = () => {
    if (Props.onLogout) Props.onLogout();
  };

  return (
    <>
      <div className="sidebar flex flex-col justify-between pb-5 items-center w-1/20 pt-3 h-full rounded">
        <div className="top flex flex-col gap-2">
          <h5
            onClick={() => setStyling("chat")}
            className={`${
              Styling === "chat"
                ? "border-l-2 border-indigo-500 bg-zinc-800"
                : ""
            } ChatIcon cursor-pointer p-2 rounded text-center hover:bg-zinc-800`}
          >
            <HiOutlineChatBubbleBottomCenterText className="text-2xl text-center" />
            {/* Chat */}
          </h5>
          <h5
            onClick={() => setStyling("status")}
            className={`${
              Styling === "status"
                ? "border-l-2 border-indigo-500 bg-zinc-800"
                : ""
            } StatusIcon cursor-pointer p-2 rounded text-center hover:bg-zinc-800`}
          >
            {/* Status */}
            <TbCirclePlus2 className="text-2xl text-center" />
          </h5>
          <h5
            onClick={() => setStyling("call")}
            className={`${
              Styling === "call"
                ? "border-l-2 border-indigo-500 bg-zinc-800"
                : ""
            } CallIcon cursor-pointer p-2 rounded text-center hover:bg-zinc-800`}
          >
            <PiPhoneCallFill className="text-2xl text-center" />
            {/* Calls */}
          </h5>
        </div>
        <div className="bottom flex flex-col gap-2">
          <h5
            onClick={() => setStyling("setting")}
            className={`${
              Styling === "setting"
                ? "border-l-2 border-indigo-500 bg-zinc-800"
                : "bg-transparent"
            } SettingIcon cursor-pointer p-2 rounded text-center self-center hover:bg-zinc-800`}
          >
            <IoMdSettings className="text-2xl text-center" />
            {/* Settings */}
          </h5>
          <h5
            onClick={() => setStyling("profile")}
            className={`${
              Styling === "profile"
                ? "border-l-2 border-indigo-500 bg-zinc-800"
                : ""
            } ProfileIcon cursor-pointer p-2 rounded text-center hover:bg-zinc-800`}
          >
            {/* Profile */}
            <img
              className="w-8 h-8 border-1 border-zinc-700 bg- rounded-full object-cover"
              src={Props.imageUrl}
              alt=""
            />
          </h5>
          <h5
            onClick={logoutHandler}
            className="LogoutIcon bg-red-600 cursor-pointer p-2 rounded text-center hover:bg-red-700"
          >
            <CiLogout className="text-2xl text-center" />
          </h5>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
