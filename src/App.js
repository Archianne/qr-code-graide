/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from "react";
import { Input } from "./components/Input";
import { GeneratedQRCode } from "./components/GeneratedQRCode";

export const Context = createContext(["", () => {}]);

const App = () => {
  const [url, setUrl] = useState("graide.co.uk");

  return (
    <Context.Provider value={[url, setUrl]}>
      <main id="main-page">
        <Input />
        <GeneratedQRCode />
      </main>
    </Context.Provider>
  );
};

export default App;
