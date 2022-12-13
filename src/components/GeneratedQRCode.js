/* eslint-disable react/prop-types */
/* eslint-disable no-undef */ /* eslint-disable react/react-in-jsx-scope */
import logo from "../assets/logo.png";
import "./GeneratedQRCode.css";
import { useContext } from "react";
import { Context } from "../App";
import { useWindowSize } from "../hooks/useWindowSize";
let QRCode = require("qrcode-svg");

export const GeneratedQRCode = (props) => {
  const [url] = useContext(Context);
  const windowSize = useWindowSize();

  const findSize = (windowSize) => {
    if (windowSize.width < 730) return windowSize.width - 100;
    else if (windowSize.width >= 730) return windowSize.width / 3;
    else return 256;
  };

  const size = props.size ? props.size : findSize(windowSize);

  // const size = {
  //   sm: {
  //     width: 256,
  //     height: 256,
  //   },
  //   md: {
  //     width: 512,
  //     height: 512,
  //   },
  //   lg: {
  //     width: 1024,
  //     height: 1024,
  //   },
  // };

  const qrcode = new QRCode({
    content: url.toString() || props.path.toString(),
    padding: 0,
    width: size,
    height: size,
    color: "#324376",
    background: "#fff",
    ecl: "Q",
  }).svg();

  return (
    <div className="wrapper">
      <div dangerouslySetInnerHTML={{ __html: qrcode }} />
      <img src={logo} />
    </div>
  );
};
