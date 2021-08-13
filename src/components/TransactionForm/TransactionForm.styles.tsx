import {
  Box,
  Button,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { colors } from "./../../shared/colors";

export const SButton = styled(Button)`
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 0.6rem;
  font-size: 1rem;
  border: 0.1rem solid ${colors.blue};
  &:hover {
    background: #e6d6ff;
  }
`;
export const TextLabel = styled(Box)`
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  color: ${colors.black};
`;

export const FormBackground = styled(Paper)`
  border-radius: 1rem;
  margin-top: 1.5rem;
  width: 90%;
`;

export const GridItem = styled(Grid)`
  margin: 2rem 0;
`;

export const Title = styled(Typography)`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: ${colors.black};
`;
export const Text = styled(Typography)`
  font-size: 1.2em;
  font-weight: bold;
  color: ${colors.black};
  text-align: right;
`;

export const InputName = styled(InputLabel)`
  color: #333
  font-weight: bold;
  padding: 0.1rem;
`;

export const InputField = styled(Input)`
  color: ${colors.black};
  font-weight: 450;
  border-radius: 0.2em;
  width: 100%;
`;
