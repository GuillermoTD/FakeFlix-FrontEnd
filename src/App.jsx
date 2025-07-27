import { useState } from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
// import  AuthPage from './components/Auth/AuthStyles'
// import { PrimeReactProvider } from "primereact/api";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <PrimeReactProvider> */}
        <HomePage />
      {/* </PrimeReactProvider> */}
    </>
  );
}

export default App;
