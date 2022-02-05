import React from 'react';
import styled from "styled-components";

function Button({color, borderColor, componentSize, border, boxShadow}) {

    const Button = styled.button`
    background-color: ${color};
    width: ${componentSize.componentWidth};
    height: ${componentSize.componentHeight};
    padding: ${componentSize.componentPadding};
    margin: ${componentSize.componentMargin};
    border: ${border.borderWidth} ${border.borederStyle} ${borderColor};
    box-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} gray;
    border-radius: ${border.borderRadius}`;

    console.log("border style:", boxShadow);
    return <Button>Style ME!</Button>;
}


export default Button;


// $('#YouRow').css('margin-top', '6px');