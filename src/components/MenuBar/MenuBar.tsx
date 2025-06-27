import { ArrowLeft, ArrowRight, Maximize2, Menu, Minus, X } from "lucide-react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggleButton from "../../ui/ThemeToggleButton";
import NavigationComponent from "./desktop/NavigationComponent";

export default function MenuBar() {
  const [isFullScreen, setIsFullScreen] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const startDraggingWindow = async () => {
    await getCurrentWindow().startDragging();
  };

  const hideWindow = async () => {
    try {
      await getCurrentWindow().minimize();
    } catch (e) {
      console.log(e);
    }
  };

  const handleFullScreen = async () => {
    try {
      let screenStatus = await getCurrentWindow().isFullscreen();
      setIsFullScreen(screenStatus);
      console.log(screenStatus);
      if (isFullScreen) {
        await getCurrentWindow().setFullscreen(false);
        setIsFullScreen(false);
      } else {
        await getCurrentWindow().setFullscreen(true);
        setIsFullScreen(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleWindowClose = async () => {
    try {
      await getCurrentWindow().close();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="menu-bar fixed z-50 top-0 grid left-0 grid-cols-3 w-full   bg-[#191f1f] dark:bg-zinc-900">
      <div className="flex window-control  grid-cols-3 items-start gap-4 p-1 ">
        <X
          onClick={handleWindowClose}
          className="cursor-pointer w-5 text-white"
        />
        <Minus
          onClick={hideWindow}
          className="cursor-pointer w-5 text-white"
        />
        <Maximize2
          onClick={handleFullScreen}
          className="cursor-pointer w-5 text-white"
        />
      </div>
      <ul className="window-drag-area col-span-2 grid items-center w-full   grid-cols-12">
        {/* Dragging window section.... */}
        <li
          className="col-span-2 bg-pink-700  w-full h-full cursor-grabbing"
          onMouseDown={startDraggingWindow}
        ></li>

        {/* Navigation section.... */}
        <li className="grid grid-cols-2 w-fit  justify-self-center col-span-4 gap-5 md:gap-15 lg:gap-24  justify-items-center content-center text-white">
          <p onClick={() => navigate(-1)}>
            <ArrowLeft className="cursor-pointer" />
          </p>
          <p onClick={() => navigate(1)}>
            {" "}
            <ArrowRight className="cursor-pointer" />
          </p>
        </li>

        <li
          className="col-span-2   w-full h-full cursor-grabbing"
          onMouseDown={startDraggingWindow}
        ></li>

        <li className="w-full col-span-2 pr-3 grid items-center justify-items-center">
          <ThemeToggleButton />
        </li>

        <li className="w-full  text-white  col-span-2 pr-3 grid items-center justify-items-center">
          <Menu className="cursor-pointer justify-self-end" />
          <ul className="absolute h-fit w-fit  justify-self-center left-0 grid gap-1 pt-10 p-2">
            <NavigationComponent />
          </ul>
        </li>
      </ul>
    </div>
  );
}
