import React, { useContext } from "react";
import Main_poster from '../components/Main_poster'
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { MovieContext } from "../context/MovieContext";

function Main() {
  const test = useContext(MovieContext);
  console.log(test)


  return (
    <div className="main-wrapper">
      <Logo />
      <Main_poster />
      <Nav />
    </div>
  );
};

export default Main;
