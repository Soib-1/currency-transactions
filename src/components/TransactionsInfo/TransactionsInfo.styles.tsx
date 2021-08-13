import { Box, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { Paper } from "@material-ui/core";
import { colors } from "./../../shared/colors";

export const TransactionBox = styled(Box)`
  padding: 0.4rem;
  margin-top: 1rem;
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

export const TextLabel = styled(Box)`
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  color: ${colors.white};
`;

export const TransactionText = styled(Typography)`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 1.1em;
  font-weight: 500;
  text-align: right;
`;
export const TransactionName = styled(Typography)`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 1.3em;
  font-weight: 700;
  text-align: center;
`;
export const TransactionTitle = styled(Typography)`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 1.6em;
  font-weight: bold;
  text-align: center;
  margin: 0.3em 0;
`;

export const SGrid = styled(Grid)`
  text-align: right;
`;
