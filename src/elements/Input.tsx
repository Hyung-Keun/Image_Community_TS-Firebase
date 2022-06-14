import React from "react";

import styled from "styled-components";

import { Text, Grid } from "./index";

interface IInput<T> {
  margin?: string;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<T>;
  value?: string;
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
  value,
}: IInput<HTMLButtonElement & HTMLInputElement>) => {
  return (
    <React.Fragment>
      <Grid>
        <Text margin={margin}>{label}</Text>
        <ElInput value={value} placeholder={placeholder} onChange={onChange} />
      </Grid>
    </React.Fragment>
  );
};
export default Input;
