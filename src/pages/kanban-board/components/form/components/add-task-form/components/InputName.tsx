import styled from "styled-components";
import { Input } from "../../../../../common/Input";

export const InputName = styled(Input).attrs((props) => ({
  type: "text",
  placeholder: "*Name",
  minLength: `${3}`,
  maxLength: `${15}`,
  required: true,
}))``;
