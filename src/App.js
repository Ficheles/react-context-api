import React from 'react'
import Profile from './componentes/profile';
import { useAuth } from './providers/auth';

function App() {
  const { user, setUser } = useAuth()
  console.log(user)

  return (
    <div className="App">
        <h1>Olá Mundo!</h1>
        <input type="text" onChange={(e) => setUser({name: e.target.value})} />
        
        <hr/>
        <Profile />
    </div>
  );
}

export default App;
