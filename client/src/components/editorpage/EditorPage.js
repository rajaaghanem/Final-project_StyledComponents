import React, { useState, useEffect } from "react";
import "./editorpage.css";
import myApi from "../../api/API";
import Editor from "../editor/Editor";
import { Link } from "react-router-dom"

function EditorPage({
  color,
  componentSize,
  borderColor,
  border,
  boxShadow,
  shadowColor,
  showSave
}) {
  const [styledComponent, setStyledComponent] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [error, setError] = useState("");
  const [componentName, setComponentName] = useState("");
  const [showSavedMassege, setShowSavedMassege] = useState(false);

  useEffect(() => {
    const textStyled =
      `import styled from "styled-components";\nimport React from "react";\n\nfunction Button() {\n\n\tconst Button = styled.button` +
      `\n\t\tbackground-color: ${color};\n\t\twidth: ${componentSize.componentWidth};\n\t\theight: ${componentSize.componentHeight};\n\t\tpadding: ${componentSize.componentPadding};\n\t\tmargin: ${componentSize.componentMargin};\n\t\tborder: ${border.borderWidth} ${border.borederStyle} ${borderColor};\n\t\tbox-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};\n\t\tborder-radius: ${border.borderRadius};` +
      "\t\n\n\treturn <Button> </Button>;\n}\n\nexport default Button;";
    const textReact =
      'import React from "react";\n\nfunction Button() {\n\n\treturn <button className="btn"> </button>;\n}\n\nexport default Button;';
    const textCss = `.btn {\n\tbackground-color: ${color};\n\twidth: ${componentSize.componentWidth};\n\theight: ${componentSize.componentHeight};\n\tpadding: ${componentSize.componentPadding};\n\tmargin: ${componentSize.componentMargin};\n\tborder: ${border.borderWidth} ${border.borederStyle} ${borderColor};\n\tbox-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};\n\tborder-radius: ${border.borderRadius};\n}`;

    setStyledComponent(textStyled);
    setJs(textReact);
    setCss(textCss);
  }, [
    styledComponent,
    css,
    js,
    color,
    componentSize.componentHeight,
    componentSize.componentPadding,
    componentSize.componentMargin,
    componentSize.componentWidth,
    border,
    boxShadow,
    shadowColor,
  ]);

  //saved the component to the user database includes props array
  const handleSaveComponent = async () => {
    const obj = {
      name: componentName,
      styledComponent: styledComponent,
      jsComponent: js,
      cssComponent: css,
      global: true,
      category: "Buttons",
      propsArr: [
        color,
        componentSize.componentWidth,
        componentSize.componentHeight,
        componentSize.componentPadding,
        componentSize.componentMargin,
        border.borderWidth,
        border.borederStyle,
        borderColor,
        boxShadow.hOffSet,
        boxShadow.vOffSet,
        boxShadow.blur,
        shadowColor,
        border.borderRadius,
      ],
    };
    try {
      const response = await myApi.post("/savedcomponents", obj);
      console.log("component: ", response.data.styledComponent);
      setShowSavedMassege(true);
    } catch (e) {
      setError(e.response.data.message);
    }
  };



  return (
    <>
      {error && <div>{error}</div>}
      {showSave && !showSavedMassege && <div className="editor-save_btn">
        <label>Give your component a name: </label>
        <input
          value={componentName}
          onChange={(e)=>setComponentName(e.target.value)}
        ></input>
         <button
          className={componentName ? "display-save" : "display-unsave"}
          onClick={handleSaveComponent}
          disabled={componentName ? false : true}
        >
          Save
        </button>
      </div>}
      {showSavedMassege && <div className="show-saved-message_container"><p>Added to your profile</p><Link to="/user-profile">Go to profile</Link></div>}
      <div className="pane top-pane">
        <Editor
          language="javascript"
          displayName="styled-component"
          value={styledComponent}
        />
        <Editor language="css" displayName="CSS" value={css} />
        <Editor language="javascript" displayName="JS" value={js} />
      </div>
    </>
  );
}

export default EditorPage;
