import React, { createContext } from 'react';

interface AppcontextInterface{

    name:string;
        age:number;
        country:string

}

const AppContext=createContext<AppcontextInterface | null>(null)

const App: React.FC = () => {
    const contextValue:AppcontextInterface={
        name:"onu",
        age:109,
        country:"Canada"
    }
  return (
    <AppContext.Provider value={contextValue}>

    </AppContext.Provider>
  );
};

export default App;
