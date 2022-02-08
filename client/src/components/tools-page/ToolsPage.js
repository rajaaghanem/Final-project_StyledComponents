import React, { useState } from "react";
import Tools from "../tools/Tools";
import Button from "../buttons/buttonForGenerate/Button";
import EditorPage from "../editorpage/EditorPage";
import "./tools-page.css";

function ToolsPage() {
  const [selectedColor, setSelectedColor] = useState("#FFF");
  const [componentSize, setComponentSize] = useState({
    componentWidth: "120px",
    componentHeight: "120px",
    componentPadding: "20px",
    componentMargin: "20px",
  });
  const [selectedBorderColor, setSelectedBorderColor] = useState("#005affff");
  const [selectedBoreder, setSelectedBoreder] = useState({
    borderWidth: "4px",
    borederStyle: "solid",
    borderRadius: "4px",
  });
  const [boxShadow, setBoxShadow] = useState({
    hOffSet: "4px",
    vOffSet: "4px",
    blur: "8px",
  });
  const [selectedShadowColor, setSelectedShadowColor] = useState("gray");

  return (
    <div>
      <div className="tools-page-container">
        <Tools
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          componentSize={componentSize}
          setComponentSize={setComponentSize}
          selectedBorderColor={selectedBorderColor}
          setSelectedBorderColor={setSelectedBorderColor}
          selectedBoreder={selectedBoreder}
          setSelectedBoreder={setSelectedBoreder}
          boxShadow={boxShadow}
          setBoxShadow={setBoxShadow}
          selectedShadowColor={selectedShadowColor}
          setSelectedShadowColor={setSelectedShadowColor}
        />
        <div>
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
        />
      </div>
    </div>
  );
}

export default ToolsPage;
