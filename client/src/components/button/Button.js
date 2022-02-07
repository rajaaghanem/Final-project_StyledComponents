import React from 'react';
import styled from "styled-components";

function Button({color, borderColor, componentSize, border, boxShadow, shadowColor}) {

    const Button = styled.button`
    background-color: ${color};
    width: ${componentSize.componentWidth};
    height: ${componentSize.componentHeight};
    padding: ${componentSize.componentPadding};
    margin: ${componentSize.componentMargin};
    border: ${border.borderWidth} ${border.borederStyle} ${borderColor};
    box-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};
    border-radius: ${border.borderRadius}`;

    return <Button></Button>;
}


export default Button;


