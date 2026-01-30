import ParamsEditor from "./ParamsEditor";
import { Model, Param } from "./types";

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

function App() {
  return <ParamsEditor params={params} model={model} />;
}

export default App;
