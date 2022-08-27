import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnterButton from './Components/EnterButton';
import FormPassword from './Components/FormPassword';

function App() {

  const [password, setPassword] = useState("");

   if (password === "252525") {
    return (
      <div className="Validation">
        <h1>Validacion de datos</h1>
        <FormPassword setPassword={setPassword} />
        <EnterButton />
      </div>
    );
  } 

  return (
    <div className="Validation">
      <h1>Validacion de datos</h1>
      <FormPassword setPassword={setPassword}/>
      {password === "252525" ? <EnterButton/> : null}
    </div>
  );
}

export default App;