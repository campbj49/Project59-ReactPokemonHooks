import { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
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

/**useAxios
 * 
 * hook that accepts a url and returns an array that will be added to when the 
 * coresponding function is given another url
 */
function useAxios(url){
    //just copy/pasted the relavant code from PlayingCards.js 
    //and modified it so that it works with pokemonList
    const [cards, setCards] = useState([]);
    const addCard = async (extension) => {
        if(typeof extension != "string") extension = "";
        const response = await axios.get(url+extension);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard];
}

export  {useFlip, useAxios};