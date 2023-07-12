import Person, { HairColor } from './component/person';

import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <Person 
        name='onu' 
        email='steno@gmail.com'
        age={33} 
        hairColor={HairColor.Brown} // Replace 'black' with the appropriate HairColor enum value
      />
    </div>
  );
};

export default App;
