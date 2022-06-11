import React from "react";

import styled from "styled-components";

import { Text, Grid } from "./index";

interface IInput<T> {
  margin?: string;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<T>;
}

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const Input = ({
  margin,
  label,
  placeholder,
  onChange,
}: IInput<HTMLButtonElement & HTMLInputElement>) => {
  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput placeholder={placeholder} onChange={onChange} />
      </Grid>
    </React.Fragment>
  );
};
export default Input;
