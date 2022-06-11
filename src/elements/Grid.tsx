import React from "react";
import styled from "styled-components";

interface IGrid {
  is_flex?: string;
  width?: string;
  margin?: string;
  padding?: string;
  bg?: string;
  children: React.ReactNode;
}

const GridBox = styled.div<IGrid>`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
`;

const Grid = ({ is_flex, width, margin, padding, bg, children }: IGrid) => {
  const styles = { is_flex, width, margin, padding, bg };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

export default Grid;
