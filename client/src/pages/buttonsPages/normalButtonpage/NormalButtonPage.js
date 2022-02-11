import React, { useState } from "react";
import EditorPage from "../../../components/editorpage/EditorPage";
import Tools from "../../../components/tools/Tools";
import Button from "../../../components/buttons/buttonForGenerate/Button";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "./normalButtonPage.css";

function NormalButtonPage() {
  const [selectedColor, setSelectedColor] = useState("#AC617C");
  const [componentSize, setComponentSize] = useState({
    componentWidth: "130px",
    componentHeight: "70px",
    componentPadding: "20px",
    componentMargin: "20px",
  });
  const [selectedBorderColor, setSelectedBorderColor] = useState("#0C797D");
  const [selectedBoreder, setSelectedBoreder] = useState({
    borderWidth: "3px",
    borederStyle: "none",
    borderRadius: "4px",
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
      <div className="">
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

export default NormalButtonPage;
