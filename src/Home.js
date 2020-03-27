import React, {useState} from "react";
import {Colors} from "./Colors";

function Home() {
  const [id, setId] = useState(0);

  const widthStyle = "col-xl-5 col-lg-6 col-md-8 col-sm-10 col-10";
  const colorBox = (
    <div className={`container border border-success rounded ${widthStyle}`}
         style={{"height":"10rem", "background-color":`${Colors[id]}`}}>
    </div>
  );

  function changeColor() {
    if (id < Colors.length - 1){
      setId(old=>old + 1);
    }else {
      setId(0);
    }
  }

  function capitalizedFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const buttonBox = (
    <div className="container mt-5 d-flex justify-content-center">
      <button className="btn btn-outline-success" style={{"width":"15rem"}}
              onClick={changeColor}>
        Color: {capitalizedFirstLetter(Colors[id])}
      </button>
    </div>
  );

  return (
    <div className="container mt-3">
      {colorBox}
      {buttonBox}
    </div>
  )
}

export default Home;