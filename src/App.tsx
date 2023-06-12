import React, { useState, createContext } from 'react';
import './App.css';
import Person, { hairColor } from './component/person';

interface AppcontextInterface{
  name:string;
    age: number
    country:string
}

const Appcontext=createContext<AppcontextInterface | null>(null)
const App: React.FC = () => {
  const contextValue:AppcontextInterface={
    name:"pedro",
    age: 20,
    country:"Nigeria"
  }
  const [country, setCountry]=useState("")
  return (
    <Appcontext.Provider value={contextValue}>

    
    <div className='App'>
      <Person name="onu"  email="onu@princeley.com"  age={9}
      hairColor2={hairColor.blonde}/>
    </div>
    </Appcontext.Provider>
  );
};

export default App;