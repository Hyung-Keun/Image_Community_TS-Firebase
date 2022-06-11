import React from "react";
import styled from "styled-components";

interface IImage {
  shape?: string;
  src?: string;
  size?: string;
}

const AspectOutter = styled.div<IImage>`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div<IImage>`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div<IImage>`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

const Image = ({ shape, src, size }: IImage) => {
  const styles = { src, size };
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
  return <React.Fragment></React.Fragment>;
};

export default Image;
