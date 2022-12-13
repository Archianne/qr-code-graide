/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import "./Input.css";

export const Input = () => {
  const [url, setUrl] = useContext(Context);
  const [temp, setTemp] = useState(null);
  console.log(url);

  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  useEffect(() => {
    console.log(temp);
  }, [temp]);

  function generateSVG(e) {
    e.preventDefault();
  }
  
  useEffect(() => {
    if (isValidUrl(temp)) setUrl(temp);
  })

  return (
    <form onSubmit={generateSVG}>
      <input
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Enter URL"
      />
      <div className="buttons">
        <button type="submit">Generate QR</button>
        <a href={`/${url}`}>Open</a>
      </div>
    </form>
  );
};
