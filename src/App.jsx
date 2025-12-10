import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Input from "./component/Input";
const [search , setSearch] = useState('')
import { TaskContext } from "./component/TaskContext";
function App() {
  const [dark, setDark] = useState(false);
  const handleMode = () => setDark((prev) => !prev);
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [darkModeText, setDarkModeText] = useState("Dark Mode");
  useEffect(() => {
    if (dark) {
      setDarkModeText("Light Mode");
      document.body.classList.add("bodyDark");
    } else {
      setDarkModeText("Dark Mode");
      document.body.classList.remove("bodyDark");
    }
  }, [dark]);

  return (
    <>
      <TaskContext.Provider
        value={{ dark, handleMode, darkModeText,  cards, setCards , search, setSearch }}>
       <Navbar></Navbar>
        <Input />
        </TaskContext.Provider>
    </>
  );
}

export default App;
