import { Model, Param } from "../types";

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Props {
  params: Param[];
  model: Model;
}

export type State = Readonly<Model>;
