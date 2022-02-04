import React from 'react';
import styled from "styled-components";

function Button({color}) {

    const Button = styled.button`
    background-color: ${color};`;

  return <Button>Style ME!</Button>;
}

export default Button;
