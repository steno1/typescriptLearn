import React, { ChangeEvent, useState } from 'react';

import { type } from 'os';

// Import necessary dependencies from React

export enum HairColor {
  Blonde = "Nice hair",  // Enumeration value for blonde hair color
  Brown = "Cool hair color",  // Enumeration value for brown hair color
  Pink = "Wow, that's cool"  // Enumeration value for pink hair color
}

// Define an enum for hair color options

export interface PersonProps {
  name: string;  // Name of the person
  age: number;  // Age of the person
  email: string;  // Email address of the person
  hairColor: HairColor;  // Hair color of the person
}

type NameType='steno'|"onu"
const nameType:NameType="steno"

const initialState = {
  country: '',
  names: ''
};

// Define an interface for the Person component props

const Person = ({ name, email, age, hairColor }: PersonProps) => {
  const [values, setValues] = useState<{ country: string;
     names: string }>(initialState);

  // Define a state variable 'values' using the 'useState' hook

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Event handler function to update the 'values' state on input change

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <h2>{age}</h2>
      <input
        name="country"
        placeholder="Write down your country"
        onChange={handleChange}
        value={values.country}
      />

      <input
        name="names"
        placeholder="Write down your names"
        onChange={handleChange}
        value={values.names}
      />

      <h4>{values.country}</h4>
      <h5>{hairColor}</h5>
      <h1>{values.names}</h1>
    </div>
  );
};

// Person component that renders person's information

export default Person;

// Export the Person component as the default export
