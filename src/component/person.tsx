import * as React from 'react';
import { useState, ChangeEvent  } from 'react';

export enum hairColor{
  blonde="nice hair",
  brown="cool hair color",
  pink="wow thats cool"
}

export interface PersonProps {
    name:string,
    age:number,
    email:string,
    hairColor2:hairColor
   
}


const Person= ({name, email, age, hairColor2}: PersonProps)=> {
  const [country, setCountry] = React.useState<any>(null)
 const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
setCountry(e.target.value)
  }

  return (
    <div>
     <h1>{name}</h1>
      <p>{email} </p> 
      <h2> {age}</h2> 
      <input placeholder='write down your country' 
      onChange={handleChange}/>
      <h4>{country}</h4>
      <h5>{hairColor2}</h5>
      
    </div>
  );
}
 export default Person;