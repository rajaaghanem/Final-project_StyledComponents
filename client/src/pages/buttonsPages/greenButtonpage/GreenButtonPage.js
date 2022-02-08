import React, { useState } from "react";
import EditorPage from "../../../components/editorpage/EditorPage";
import Tools from "../../../components/tools/Tools";
import GreenBUtton from "../../../components/buttons/greenButton/GreenButton";
import "./greenButtonPage.css";

function GreenButtonPage() {
  const [selectedColor, setSelectedColor] = useState("#19073a");
  const [componentSize, setComponentSize] = useState({componentWidth: "130px",componentHeight: "70px",componentPadding: "20px",componentMargin: "20px",
  });
  const [selectedBorderColor, setSelectedBorderColor] = useState("#0C797D");
  const [selectedBoreder, setSelectedBoreder] = useState({
    borderWidth: "3px",
    borederStyle: "dotted",
    borderRadius: "4px",
  });
  const [boxShadow, setBoxShadow] = useState({
    hOffSet: "4px",
    vOffSet: "4px",
    blur: "8px",
  });
  const [selectedShadowColor, setSelectedShadowColor] = useState("gray");
  
  return <div>
      <div>
      <div className="tools-page-container">
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
          <GreenBUtton
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
  </div>;
}

export default GreenButtonPage;
