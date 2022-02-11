import React, { useState } from "react";
import Button from "../../../components/buttons/buttonForGenerate/Button";
import EditorPage from "../../../components/editorpage/EditorPage";
import Tools from "../../../components/tools/Tools";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function RoundButtonPage() {
  const [selectedColor, setSelectedColor] = useState("#AC617C");
  const [componentSize, setComponentSize] = useState({
    componentWidth: "130px",
    componentHeight: "130px",
    componentPadding: "20px",
    componentMargin: "20px",
  });
  const [selectedBorderColor, setSelectedBorderColor] = useState("#FFFFFF");
  const [selectedBoreder, setSelectedBoreder] = useState({
    borderWidth: "4px",
    borederStyle: "dotted",
    borderRadius: "100px",
  });
  const [boxShadow, setBoxShadow] = useState({
    hOffSet: "4px",
    vOffSet: "4px",
    blur: "8px",
  });
  const [selectedShadowColor, setSelectedShadowColor] = useState("gray");
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
            inner={false}
          />
          <div className="styled-component_button">
            <Button
              color={selectedColor}
              componentSize={componentSize}
              borderColor={selectedBorderColor}
              border={selectedBoreder}
              boxShadow={boxShadow}
              shadowColor={selectedShadowColor}
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
            showSave={true}
            type={"buttons"}
          />
        </div>
      </div>
    </div>
  );
}

export default RoundButtonPage;
