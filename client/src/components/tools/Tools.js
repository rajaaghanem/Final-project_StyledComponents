import React, { useState } from "react";
import "./tools.css";
import ColorPicker from "./colorPicker/ColorPicker";
import Button from "../button/Button";
import EditorPage from "../editorpage/EditorPage";
import BorderColor from "./borderColor/BorderColor";

function Tools() {
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
    borderRadius: "4px"
  });
  const [boxShadow, setBoxShadow] = useState({
    hOffSet: "4px",
    vOffSet: "4px",
    blur: "8px",
  });

  //handle box-shadow h-offset, v-offset and blur fields
  const handleBoxShadow = (e) => {
    const field = e.target.name;
    const newBoxShadow = {
      ...boxShadow,
      [field]: e.target.value,
    };
    setBoxShadow(newBoxShadow);
  };

  //handle border width and style and border-radius fields
  const handleBorderChange = (e) => {
    const field = e.target.name;
    const newBorder = {
      ...selectedBoreder,
      [field]: e.target.value,
    };
    setSelectedBoreder(newBorder);
  };

  //handle component width, height, margina nd padding
  const handleComponentSize = (e) => {
    const field = e.target.name;
    const newComponentSize = {
      ...componentSize,
      [field]: e.target.value,
    };
    setComponentSize(newComponentSize);
  };

  console.log("selectedBoreder", selectedBoreder);

  return (
    <>
      <div className="style-componant-page">
        <div>
          <ColorPicker
            value={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <div>
            <label>Width</label>
            <input
              value={componentSize.componentWidth}
              name="componentWidth"
              onChange={handleComponentSize}
            />
          </div>
          <div>
            <label>Height</label>
            <input
              value={componentSize.componentHeight}
              name="componentHeight"
              onChange={handleComponentSize}
            />
          </div>
          <div>
            <label>Padding</label>
            <input
              value={componentSize.componentPadding}
              name="componentPadding"
              onChange={handleComponentSize}
            />
          </div>
          <div>
            <label>Margin</label>
            <input
              value={componentSize.componentMargin}
              name="componentMargin"
              onChange={handleComponentSize}
            />
          </div>
          <div>
            <label>Border Color</label>
            <BorderColor setSelectedBorderColor={setSelectedBorderColor} />
            <div>
            <label>Border Width</label>
            <input
              value={selectedBoreder.borderWidth}
              name="borderWidth"
              onChange={handleBorderChange}
            />
            </div>
            <div>
              <label>Border Style</label>
              <select
                value={selectedBoreder.borederStyle}
                name="borederStyle"
                onChange={handleBorderChange}
              >
                <option value="none">none</option>
                <option value="solid">solid</option>
                <option value="double">double</option>
                <option value="dotted">dotted</option>
                <option value="groove">groove</option>
                <option value="ridge">ridge</option>
                <option value="inset">inset</option>
                <option value="outset">outset</option>
              </select>
            </div>
            <div>
            <label>Border Radius</label>
            <input
              value={selectedBoreder.borderRadius}
              name="borderRadius"
              onChange={handleBorderChange}
            />
            </div>
          </div>
          <div>
            <label>Box Shadow</label>
            <div>
              <label>h-offset</label>
              <input
                value={boxShadow.hOffSet}
                name="hOffSet"
                onChange={handleBoxShadow}
              />
            </div>
            <div>
              <label>v-offset</label>
              <input
                value={boxShadow.vOffSet}
                name="vOffSet"
                onChange={handleBoxShadow}
              />
            </div>
            <div>
              <label>Blur</label>
              <input
                value={boxShadow.blur}
                name="blur"
                onChange={handleBoxShadow}
              />
            </div>
          </div>
        </div>
        <div>
          <Button
            color={selectedColor}
            componentSize={componentSize}
            borderColor={selectedBorderColor}
            border={selectedBoreder}
            boxShadow={boxShadow}
          />
        </div>
      </div>
      <div>
        <EditorPage
          color={selectedColor}
          componentSize={componentSize}
        />
      </div>
    </>
  );
}

export default Tools;
