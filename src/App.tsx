import { useEffect } from "react";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import useThemeStore from "./store/themeStore";
import { Outlet } from "react-router-dom";

function App() {
  const dark = useThemeStore((state) => state.dark);
  const setDark = useThemeStore((state) => state.setDark);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDark(true);
  }, [setDark]);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="grid min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors pt-10">
      <MenuBar />
      <Outlet/>
    </div>
  );
}

export default App;
