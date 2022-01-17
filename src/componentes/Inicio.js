import React from "react";
import {Link} from "react-router-dom";
import logo from "./logo.png";

export const Inicio = () => {
  return (
    <>
    <div className="m-20">
      <div className="flex justify-center">
      <img src={logo} alt="" className="h-80 px-40"/>
      </div>
      <div className="flex justify-center space-x-10">
      <Link to="/Garzon"><button className="h-20 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">Mesero</button></Link>
      <Link to="/Cocina"><button className="h-20 px-20 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">Cocina</button></Link>
      </div>
    </div>
   </>
  );
};
