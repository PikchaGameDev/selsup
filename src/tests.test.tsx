import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
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

describe("Params Editor", () => {
  test("Check fields displayed from params array", () => {
    render(<ParamsEditor params={params} model={model} />);

    const paramsElements = screen.getAllByRole("textbox");

    paramsElements.forEach((param, i) => {
      expect(Number(param.id)).toBe(model.paramValues[i].paramId);
    });
  });

  test("Check params fields initialized from model", () => {
    render(<ParamsEditor params={params} model={model} />);

    const paramsElements = screen.getAllByRole("textbox");

    paramsElements.forEach((param, i) => {
      expect(param).toHaveValue(model.paramValues[i].value);
    });
  });

  test("Check getModel method after params input changes", () => {
    render(<ParamsEditor params={params} model={model} />);

    const wrapper = shallow(<ParamsEditor params={params} model={model} />);

    const paramsElements = screen.getAllByRole("textbox");

    Promise.all(
      paramsElements.map(
        async (param, i) => await userEvent.type(param, `new value${i}`),
      ),
    ).then(() => {
      // @ts-ignore
      // tslint:disable-next-line: no-string-literal
      const result = wrapper.instance().getModel() as Model;

      result.paramValues.forEach((param, i) => {
        expect(param.value).toBe(`new value${i}`);
      });
    });
  });
});
