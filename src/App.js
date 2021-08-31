import "./App.css";
import { sampleText } from "./sampleText";
import React, { useState, useEffect } from "react";
import marked from "marked";

function App() {
  const [text, setText] = useState(localStorage.getItem("text") || sampleText);

  function handleChange(e) {
    const txt = e.target.value;
    setText(txt);
  }

  const renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
  };

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea
            onChange={handleChange}
            className="form-control"
            rows="35"
            value={text}
          ></textarea>
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML={renderText(text)}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
