import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CardEvent from './subcomponent/CardEvent';
const options = ["Graphic Era Hill University Bhimtal","Graphic Era Hill University Haldwani","Graphic Era Deemed to be Dehradun"]

const Fetchdata = () => {

      const [selected, setSelected] = useState(options[0])
      
      const submit = ()=>{
        console.log(selected);
      };
  return (
  <>
   <form>
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      {options.map((value)=>{
        return(
        <option value={value} key={value}>{value}</option>
        )
        })}
    </select>
    <button type='button' onClick={submit}>Submit</button>
   </form>
    </>
  );
}

export default Fetchdata
