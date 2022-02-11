import React, {useRef} from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "./editor.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor(props) {
  const { language, displayName, value, onChange } = props;
  const codeInput = useRef();

  //control the editor input 
  function handleChange(value){
    onChange(value);
  }

  //copy the codr to clipboard
  function handleCopy (){
    navigator.clipboard.writeText(codeInput.current.props.value);
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        { displayName }
        <button onClick={handleCopy}>Copy</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        ref={codeInput}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default Editor;
