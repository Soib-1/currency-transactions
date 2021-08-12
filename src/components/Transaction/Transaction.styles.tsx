import { Box, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

export const TransactionBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  padding: 0.4rem;
`;
export const SBox = styled(Box)`
  background: rgb(38, 38, 163);
  padding: 1.1rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const Trash = styled(DeleteIcon)`
  color: white;
  font-size: 2rem;
`;

export const TransactionText = styled(Typography)`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 1em;
  font-weight: 500;
`;
export const TransactionTitle = styled(Typography)`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
`;

export const SGrid = styled(Grid)`
  text-align: left;
`;
