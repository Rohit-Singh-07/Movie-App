import React from "react";
import "../App.css"

const Dropdown = ({title, options, category}) => {
  return (
    <div className="select h-[5vh] flex items-center md:w-[250px] w-20 px-2 py-auto text-[3vw] md:text-[1.5vw]">
      <select defaultValue="all" name="format" id="format" onChange={category}>
        <option value={"all"} disabled>{title}</option>
        {options.map((opt, i) =>{
            return <option key={i} value={opt} >{opt.toUpperCase()}</option>
        })}
      </select>
    </div>
  );
};

export default Dropdown;
