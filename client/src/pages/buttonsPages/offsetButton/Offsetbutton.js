import React, {useState} from 'react';
import Button from '../../../components/buttons/buttonForGenerate/Button';
import EditorPage from "../../../components/editorpage/EditorPage";
import Tools from "../../../components/tools/Tools";

function Offsetbutton() {
    const [selectedColor, setSelectedColor] = useState("#AC617C");
    const [componentSize, setComponentSize] = useState({componentWidth: "130px",componentHeight: "70px",componentPadding: "20px",componentMargin: "20px",
    });
    const [selectedBorderColor, setSelectedBorderColor] = useState("#FFFFFF");
    const [selectedBoreder, setSelectedBoreder] = useState({
      borderWidth: "56px",
      borederStyle: "outset",
      borderRadius: "4px",
    });
    const [boxShadow, setBoxShadow] = useState({
      hOffSet: "4px",
      vOffSet: "4px",
      blur: "8px",
    });
    const [selectedShadowColor, setSelectedShadowColor] = useState("gray");
    
  return (
    <div><div>
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
  </div></div>
  )
}

export default Offsetbutton