import React, {useState} from "react";
import {Colors} from "./Colors";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function Home() {
  const [id, setId] = useState(0);


  const colorBox = (
    <Box height={200} style={{"backgroundColor":`${Colors[id]}`}}
         border={1} borderRadius={5} borderColor={Colors[14]} m={5}>
    </Box>
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
    <Box display="flex" flexDirection="row" justifyContent="center" mt={5}>
      <Button variant="contained" color="secondary"
              onClick={changeColor} style={{"width":"15rem"}}>
        Color: {capitalizedFirstLetter(Colors[id])}
      </Button>
    </Box>
  );

  return (
    <div className="container mt-3">
      {colorBox}
      {buttonBox}
    </div>
  )
}

export default Home;