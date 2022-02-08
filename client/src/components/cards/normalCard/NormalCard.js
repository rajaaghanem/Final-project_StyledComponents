import React from "react";
import styled from "styled-components";

function NormalCard({color,
    componentSize,
    borderColor,
    border,
    boxShadow,
    shadowColor,
    selectedColorInner}) {

  const NormalCard = styled.div`
    display: flex;
    width: ${componentSize.componentWidth};
    height: ${componentSize.componentHeight};
    border-radius: ${border.borderRadius};
    border: ${border.borderWidth} ${border.borederStyle} ${borderColor};
    justify-content: space-around;
    color: gray;
    box-shadow: ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};
    background-color:  ${color};
  `;

  const Content = styled.div`
    width: ${componentSize.componentWidth};
    height: 50px;
    border-radius: 15px 15px 0px 0px;
    box-shadow:  ${boxShadow.hOffSet} ${boxShadow.vOffSet} ${boxShadow.blur} ${shadowColor};
    text-align: center;
    background-color:  ${selectedColorInner};
  `;

  return (
    <NormalCard>
          <Content>Title</Content>
    </NormalCard>
  );
}

export default NormalCard;
