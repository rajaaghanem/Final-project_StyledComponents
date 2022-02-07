import React from "react";
import styled from "styled-components";

function RoundButton({
  color,
  borderColor,
  componentSize,
  border,
  boxShadow,
  shadowColor,
}) {

    const RoundButton = styled.button`
    background-color: ${color};
    width: ${componentSize.componentWidth};
    height: ${componentSize.componentHeight};
    padding: ${componentSize.componentPadding};
    margin: ${componentSize.componentMargin};
    border: ${border.borderWidth} ${border.borederStyle} ${borderColor};
    box-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur}
      ${shadowColor};
    border-radius: ${border.borderRadius};
  `;

  return (
    <div>
      <RoundButton> </RoundButton>
    </div>
  );
}

export default RoundButton;
