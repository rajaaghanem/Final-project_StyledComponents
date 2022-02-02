import React, { useState, useEffect } from "react";
import "./App.css";
import Editor from "./components/editor/Editor";

function App() {
  const data = ["red", "2", "2", "1", "2", "solid", "pink", "10"];

  const [styledComponent, setStyledComponent] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  useEffect(() => {
    const textStyled =
      `import styled from "styled-components";\nimport React from "react";\n\nfunction Button() {\n\n\tconst Button = styled.button` +
      `\n\t\tcolor: ${data[0]};\n\t\tfont-size: ${data[1]}rem;\n\t\tmargin: ${data[2]}rem;\n\t\tpadding: ${data[3]}rem;\n\t\tborder: ${data[4]}px ${data[5]} ${data[6]};\n\t\tborder-radius: ${data[7]}px;\n` +
      "\t;\n\n\treturn <Button> Normal Button </Button>;\n}\n\nexport default Button;";
    const textReact =
      'import React from "react";\n\nfunction Button() {\n\n\treturn <button className="btn">Normal Button</button>;\n}\n\nexport default Button;';
    const textCss = `.btn {\n\tcolor: ${data[0]};\n\tfont-size: ${data[1]}rem;\n\tmargin: ${data[2]}rem;\n\tpadding: ${data[3]}rem;\n\tborder: ${data[4]}px ${data[5]} ${data[6]};\n\tborder-radius: ${data[7]}px;\n}`;

    setStyledComponent(textStyled);
    setJs(textReact);
    setCss(textCss);
  }, []);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="javascript"
          displayName="styled-component"
          value={styledComponent}
          // onChange={setStyledComponent}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          //onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          //onChange={setJs}
        />
      </div>
      <div className="pane">
        {/* <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe> */}
      </div>
    </>
  );
}

export default App;
