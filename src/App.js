import React from 'react'
import Profile from './componentes/profile';
import { AuthContext } from './providers/auth';

function App() {
  const { user, setUser } = React.useContext(AuthContext)
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
