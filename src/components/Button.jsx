import React from 'react';
import styled, { css } from "styled-components";

const FilledHover = styled.button`
  text: ${(props) => props.text};
  ${(props) =>
    props.filled &&
    css`
      color: #aae1f5;
      background-color: #c60e5a;
      border: 2px solid #c60e5a;
      text-transform: uppercase;
      font-family: "DM Sans", sans-serif;
      text-align: center;
      transition: 1s;
      margin: 1em;
      padding: 1em 2em;
      &:hover {
        color: #c60e5a;
        background-color: #aae1f5;
        border: 2px solid #c60e5a;
      }
    `}
  ${(props) =>
    props.outlined &&
    css`
      margin: 1em 3em;
      padding: 0.5em 2em;
      text-align: center;
      background-color: #aae1f5;
      color: #c60e5a;
      border: 2px solid #c60e5a;
      text-transform: uppercase;
      transition: 1s;
      cursor: pointer;
      margin: 1em;
      padding: 1em 2em;
      &:hover {
        background-color: #c60e5a;
        color: #aae1f5;
        border: 2px solid #c60e5a;
      }
    `};
`;

function Button(props) {
  return <FilledHover {...props} />;
}
export default Button;
