import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ParamValue, Props, State } from "./types";

function ParamsEditor({ params, model }: Props) {
  const [state, setState] = useState<State>(model);

  const handleChange = (newParamValue: ParamValue) => {
    const newParamValues = state.paramValues.map((paramValue) =>
      paramValue.paramId === newParamValue.paramId ? newParamValue : paramValue,
    );

    setState((prev) => {
      return { ...prev, paramValues: newParamValues };
    });
  };

  const getModel = () => {
    return state;
  };

  useEffect(() => {
    console.log(getModel());
  }, [state]);

  return (
    <div className={styles.editor}>
      {params.map((param) => (
        <div className={styles.param} key={param.id}>
          {param.type === "string" && (
            <>
              <label htmlFor={String(param.id)}>{param.name}</label>
              <input
                id={String(param.id)}
                type="text"
                value={
                  state.paramValues.find((p) => p.paramId === param.id)?.value
                }
                onChange={(event) =>
                  handleChange({
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

export default ParamsEditor;
