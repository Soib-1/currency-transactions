import { Box, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { Paper } from "@material-ui/core";
import { colors } from "./../../shared/colors";

export const TransactionBox = styled(Box)`
  padding: 0.4rem;
`;
export const SBox = styled(Paper)`
  background: ${colors.blue};
  padding: 1.1rem;
  border-radius: 1rem;
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
  text-align: center;
`;

export const SGrid = styled(Grid)`
  text-align: right;
`;
