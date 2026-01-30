import { Component, ReactNode } from "react";
import styles from "./styles.module.css";

export interface Param {
  id: number;
  name: string;
  type: "string";
}

interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}

interface IParamsEditor {
  getModel(): Model;
}

export interface Props {
  params: Param[];
  model: Model;
}

export type State = Readonly<Model>;

export class ParamsEditor
  extends Component<Props, State>
  implements IParamsEditor
{
  public readonly state: State = {
    paramValues: [],
  };

  constructor(props: Props) {
    super(props);

    this.state = props.model;
  }

  private handleChange(newParamValue: ParamValue) {
    const newParamValues = this.state.paramValues.map((paramValue) =>
      paramValue.paramId === newParamValue.paramId ? newParamValue : paramValue,
    );

    this.setState((prev) => {
      return { ...prev, paramValues: newParamValues };
    });
  }

  public getModel(): Model {
    return this.state;
  }

  render(): ReactNode {
    return (
      <div className={styles.editor}>
        {this.props.params.map((param) => (
          <div className={styles.param} key={param.id}>
            {param.type === "string" && (
              <>
                <label htmlFor={String(param.id)}>{param.name}</label>
                <input
                  id={String(param.id)}
                  type="textbox"
                  value={
                    this.state.paramValues.find((p) => p.paramId === param.id)
                      ?.value
                  }
                  onChange={(event) =>
                    this.handleChange({
                      paramId: param.id,
                      value: event.target.value,
                    })
                  }
                />
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
}
