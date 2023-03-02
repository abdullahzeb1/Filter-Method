import React from 'react';
import Propes from './Components/Propes';
// import Catch from './Components/Catch';
// import Hookes from './Components/Hookes';

function App() {
  const myObjectApi = [
    {
      id: '1',
      name: 'Abdullah',
      email: 'abdullah@.com',
      city: 'Lahore',
    },
    {
      id: '2',
      name: 'Hassan',
      email: 'hassan@.com',
      city: 'Lahore',
    },
    {
      id: '3',
      name: 'Zaid',
      email: 'zaid@.com',
      city: 'Lahore',
    },
    {
      id: '4',
      name: 'Shujhat',
      email: 'shujhat@.com',
      city: 'Lahore',
    },
    {
      id: '5',
      name: 'Hamza Zeb',
      email: 'hamza@.com',
      city: 'Lahore',
    },
    {
      id: '6',
      name: 'Umer',
      email: 'umer@.com',
      city: 'Lahore',
    },
    {
      id: '7',
      name: 'Khawer',
      email: 'khawer@.com',
      city: 'Lahore',
    },
    {
      id: '8',
      name: 'Aliyam',
      email: 'aliyam@.com',
      city: 'Lahore',
    },
    {
      id: '9',
      name: 'Sami',
      email: 'sami@.com',
      city: 'Lahore',
    },
    {
      id: '10',
      name: 'Naveed',
      email: 'naveed@.com',
      city: 'Lahore',
    },
  ];

  return (
    <div>
      {/* <Hookes /> */}
      {/* <Catch /> */}
      <Propes onClick={myObjectApi} />
    </div>
  );
}

export default App;
