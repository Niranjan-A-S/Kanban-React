import styled from "styled-components";
import { Input } from "../../../../../common/Input";

export const InputPriority = styled(Input).attrs(() => ({
  type: "number",
  placeholder: "*Priority",
  max: `${100}`,
  min: `${1}`,
  required: true,
}))``;
