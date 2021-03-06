import React, { useState } from "react";
import EditorPage from "../../../components/editorpage/EditorPage";
import Tools from "../../../components/tools/Tools";
import NormalCard from "../../../components/cards/normalCard/NormalCard";
import "./normalCard.css";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function NormalCardPage() {
  const [selectedColor, setSelectedColor] = useState("#AC617C");
  const [componentSize, setComponentSize] = useState({
    componentWidth: "130px",
    componentHeight: "190px",
    componentPadding: "0px",
    componentMargin: "0px",
  });
  const [selectedBorderColor, setSelectedBorderColor] = useState("#FFFFFF");
  const [selectedBoreder, setSelectedBoreder] = useState({
    borderWidth: "3px",
    borederStyle: "none",
    borderRadius: "15px",
  });
  const [boxShadow, setBoxShadow] = useState({
    hOffSet: "1px",
    vOffSet: "1px",
    blur: "3px",
  });
  const [selectedShadowColor, setSelectedShadowColor] = useState("gray");
  const [inner, setInner] = useState(false);
  const [selectedColorInner, setSelectedColorInner] = useState("#ECD4D7");
  const [isContinue, setisContinue] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  //hide the message about saving components
  const handleNoSaving = () => {
    setisContinue(true);
  };

  //go to home-page to let user login
  const handleGoToLogIn = () => {
    history.push("/home-page");
  };

  //switch inner to true (switch to inner div)
  const handleInner = () => {
    setInner(true);
  };

  //switch inner to false (switch to outer div)
  const handleOuter = () => {
    setInner(false);
  };

  return (
    <div>
      <div>
        <div className="tools-page-container">
          {!currentUser && (
            <div className={`login-message ${isContinue && "disply-none"}`}>
              <p>
                To be able to save your styles please Sign-Up or LOG-IN first
              </p>
              <div className="login-message_btn">
                <button onClick={handleNoSaving}>
                  Continue without saving
                </button>
                <button onClick={handleGoToLogIn}>Log in</button>
              </div>
            </div>
          )}
          <div className="innet-outer_container">
            <button onClick={handleInner}>Inner</button>
            <button onClick={handleOuter}>Outer</button>
            <Tools
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              componentSize={componentSize}
              setComponentSize={setComponentSize}
              componentWidth={componentSize.componentWidth}
              componentHeight={componentSize.componentHeight}
              selectedBorderColor={selectedBorderColor}
              setSelectedBorderColor={setSelectedBorderColor}
              selectedBoreder={selectedBoreder}
              setSelectedBoreder={setSelectedBoreder}
              boxShadow={boxShadow}
              setBoxShadow={setBoxShadow}
              selectedShadowColor={selectedShadowColor}
              setSelectedShadowColor={setSelectedShadowColor}
              setSelectedColorInner={setSelectedColorInner}
              selectedColorInner={selectedColorInner}
              inner={inner} //if the user coloring the inner div inner=true
            />
          </div>
          <div className="styled-component_button">
            <NormalCard
              color={selectedColor}
              componentSize={componentSize}
              borderColor={selectedBorderColor}
              border={selectedBoreder}
              boxShadow={boxShadow}
              shadowColor={selectedShadowColor}
              selectedColorInner={selectedColorInner} //the color of the inner div
            />
          </div>
        </div>
        <div>
          <EditorPage
            color={selectedColor}
            componentSize={componentSize}
            borderColor={selectedBorderColor}
            border={selectedBoreder}
            boxShadow={boxShadow}
            shadowColor={selectedShadowColor}
            selectedColorInner={selectedColorInner}
            showSave={true} //display the save button
            type={"cards"}
          />
        </div>
      </div>
    </div>
  );
}

export default NormalCardPage;
