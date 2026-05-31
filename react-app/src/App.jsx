import { useState } from 'react'
import './App.css'
import Welcome2 from './components/Welcome2';
import UserCard2 from './components/UserCard2';

function App() {
  return (
    <div>
      <Welcome2 />

      <UserCard2
        name="Carol"
        role="Student"
        email="carol@email.com"
        location="Phoenix"
      />

      <UserCard2
        name="luis"
        role="Developer"
        email="luis@email.com"
        location="New York"
      />

      <UserCard2
        name="Caleb"
        role="Designer"
        email="Caleb@email.com"
        location="Los Angeles"
      />
    </div>
  );
}

export default App;


