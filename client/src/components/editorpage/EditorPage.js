import React, { useState, useEffect } from "react";
import "./editorpage.css";
import { useAuth } from "../../contexts/AuthContext";
import { myApi } from "../../api/API";
import Editor from "../editor/Editor";
import { Link } from "react-router-dom";

function EditorPage({
  color,
  componentSize,
  borderColor,
  border,
  boxShadow,
  shadowColor,
  selectedColorInner,
  showSave,
  type,
}) {
  const [styledComponent, setStyledComponent] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [error, setError] = useState("");
  const [componentName, setComponentName] = useState("");
  const [showSavedMassege, setShowSavedMassege] = useState(false);
  const [innerColor, setInnerColor] = useState("");
  const { currentUser } = useAuth();

  let textStyled, textReact, textCss;

  useEffect(() => {
    if (type === "buttons") {
      setInnerColor("");
      addTextOfButton();
    } else if (type === "cards") {
      if (selectedColorInner) {
        setInnerColor(selectedColorInner);
      } else {
        setInnerColor("");
      }
      addTextOfCard();
    }
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

  //if the type of the component is button, set the state elements to button component text
  const addTextOfButton = () => {
    textStyled =
      `import styled from "styled-components";\nimport React from "react";\n\nfunction Button() {\n\n\tconst Button = styled.button` +
      "`" +
      `\n\t\tbackground-color: ${color};\n\t\twidth: ${componentSize.componentWidth};\n\t\theight: ${componentSize.componentHeight};\n\t\tpadding: ${componentSize.componentPadding};\n\t\tmargin: ${componentSize.componentMargin};\n\t\tborder: ${border.borderWidth} ${border.borederStyle} ${borderColor};\n\t\tbox-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};\n\t\tborder-radius: ${border.borderRadius};` +
      "`" +
      "\t\n\n\treturn <Button> </Button>;\n}\n\nexport default Button;";
    textReact =
      'import React from "react";\n\nfunction Button() {\n\n\treturn <button className="btn"> </button>;\n}\n\nexport default Button;';
    textCss = `.btn {\n\tbackground-color: ${color};\n\twidth: ${componentSize.componentWidth};\n\theight: ${componentSize.componentHeight};\n\tpadding: ${componentSize.componentPadding};\n\tmargin: ${componentSize.componentMargin};\n\tborder: ${border.borderWidth} ${border.borederStyle} ${borderColor};\n\tbox-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};\n\tborder-radius: ${border.borderRadius};\n}`;

    setStyledComponent(textStyled);
    setJs(textReact);
    setCss(textCss);
  };

  //if the type of the component is card, set the state elements to button component text
  const addTextOfCard = () => {
    textStyled =
      `import styled from "styled-components";\nimport React from "react";\n\nfunction Card() {\n\n\tconst Card = styled.div` +
      "`" +
      `\n\t\tdisplay: flex;\n\t\tbackground-color: ${color};\n\t\twidth: ${componentSize.componentWidth};\n\t\theight: ${componentSize.componentHeight};\n\t\tborder: ${border.borderWidth} ${border.borederStyle} ${borderColor};\n\t\tbox-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};\n\t\tborder-radius: ${border.borderRadius};\n\t\tjustify-content: space-around;` +
      "`\n" +
      `\n\tconst Content = styled.div` +
      "`\n" +
      `\t\twidth: ${componentSize.componentWidth};\n\t\theight: 50px;\n\t\tborder-radius: 15px 15px 0px 0px;\n\t\tbox-shadow:  ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};\n\t\tbackground-color:  ${selectedColorInner};` +
      "`" +
      "\t\n\n\treturn <Card> <Content>Title</Content> </Card>;\n}\n\nexport default Card;";
    textReact =
      'import React from "react";\n\nfunction Card() {\n\n\treturn <div className="card"> <div className="card-content"></div> </div>;\n}\n\nexport default Card;';
    textCss = `.card {\n\tdisplay: flex;\n\tbackground-color: ${color};\n\twidth: ${componentSize.componentWidth};\n\theight: ${componentSize.componentHeight};\n\tborder: ${border.borderWidth} ${border.borederStyle} ${borderColor};\n\tbox-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};\n\tborder-radius: ${border.borderRadius};\n\tjustify-content: space-around;\n} \n.card-content{\n\twidth: ${componentSize.componentWidth};\n\theight: 50px;\n\tborder-radius: 15px 15px 0px 0px;\n\tbox-shadow:  ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};\n\tbackground-color:  ${innerColor};\n}`;

    setStyledComponent(textStyled);
    setJs(textReact);
    setCss(textCss);
  };

  //saved the component to the user database includes props array
  const handleSaveComponent = async () => {
    const obj = {
      name: componentName,
      styledComponent: styledComponent,
      jsComponent: js,
      cssComponent: css,
      global: true,
      category: type,
      //add all the props into array [color, componentWidt, componentHeight, componentPadding, componentMargin, borderWidth
      // borederStyle, borderColor, hOffSet, vOffSet, blur, shadowColor, borderRadius, selectedColorInner]
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
        innerColor,
      ],
    };
    try {
      const response = await myApi(localStorage.getItem("token")).post(
        "/savedcomponents",
        obj
      );
      console.log("component: ", response.data.styledComponent);
      setShowSavedMassege(true);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      {showSave && !showSavedMassege && (
        <div className="editor-save_btn">
          <label>Give your component a name: </label>
          <input
            value={componentName}
            onChange={(e) => setComponentName(e.target.value)}
          ></input>
          <button
            className={componentName ? "display-save" : "display-unsave"}
            onClick={handleSaveComponent}
            disabled={componentName ? false : true}
          >
            Save
          </button>
        </div>
      )}
      {showSavedMassege && (
        <div className="show-saved-message_container">
          <p>Added to your profile</p>
          <Link to="/user-profile">Go to profile</Link>
        </div>
      )}
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
