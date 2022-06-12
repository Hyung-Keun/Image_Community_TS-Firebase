import React from "react";

import styled from "styled-components";

interface IButton<T> {
  text?: string;
  onClick?: React.MouseEventHandler<T>;
}

const ElButton = styled.button<IButton<HTMLButtonElement & HTMLInputElement>>`
  width: 100%;
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`;

const Button = ({
  text,
  onClick,
}: IButton<HTMLButtonElement & HTMLInputElement>) => {
  return <ElButton onClick={onClick}>{text}</ElButton>;
};

export default Button;
