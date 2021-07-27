import React from 'react'
import Profile from './componentes/profile';
import Login from './componentes/login'
import { useAuth } from './providers/auth';

function App() {
  const { user } = useAuth()
  console.log(user)

  return (
    <div className="App">
        <h1>Olá Mundo!</h1>
        <Profile />
        <Login />
    </div>
  );
}

export default App;
