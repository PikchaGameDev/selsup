import React from "react";
import ReactDOM from "react-dom/client";
import { Model, Param, ParamsEditor } from "./ParamsEditor";

const params: Param[] = [
  { id: 1, name: "Назначение", type: "string" },
  { id: 2, name: "Длина", type: "string" },
];

const model: Model = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParamsEditor params={params} model={model} />
  </React.StrictMode>,
);
