import { useState } from "react";
//toggle hook from example renamed for cards
function useFlip(initialVal = false) {
  // call useState, "reserve piece of state"
  const [value, setValue] = useState(initialVal);
  const flip = () => {
    setValue(oldValue => !oldValue);
  };
  
  // return piece of state AND a function to flip it
  return [value, flip];
}

export default useFlip;