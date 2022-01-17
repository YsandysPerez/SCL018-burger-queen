import React from "react";
import {Link} from "react-router-dom";

export const Inicio = () => {
  return (
    <>
    <div className="m-20">
      <div className="flex justify-center">
      <h1 className="m-50 font-bold text-teal-50">Burger Queen</h1>
      </div>
      <div className="flex justify-center space-x-10">
      <Link to="/Garzon"><button className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800">Mesero</button></Link>
      <Link to="/Cocina"><button className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800">Cocina</button></Link>
      </div>
    </div>
   </>
  );
};
