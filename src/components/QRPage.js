/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import { GeneratedQRCode } from "./GeneratedQRCode";
import "./QRPage.css";

const QRPage = () => {
  const { url } = useParams();
  const [size, setSize] = useState(250);
  const windowSize = useWindowSize();

  return (
    <main id="main">
      <GeneratedQRCode path={url} size={size} />
      <input
        onChange={(e) => setSize(e.target.value)}
        value={size}
        type={"range"}
        min="100"
        max={windowSize.height - 250}
        className={"slider"}
      />
    </main>
  );
};

export default QRPage;
