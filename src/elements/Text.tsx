import React from "react";
import styled from "styled-components";

interface IText {
  bold?: boolean;
  color?: string;
  size?: string;
  children: React.ReactNode;
}
const P = styled.p<IText>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;

const Text = ({ bold, color, size, children }: IText) => {
  const styles = { bold, color, size };
  return <React.Fragment {...styles}>{children}</React.Fragment>;
};

export default Text;
