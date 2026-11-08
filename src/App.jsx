import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { format } from "date-fns";

function App() {
  return (
    <div className="clock">
      <p>{format(new Date(), "PPpp")}</p>
    </div>
  );
}

    export default App