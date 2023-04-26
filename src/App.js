import "./App.css";
import { Button, ConfigProvider, Input, Form } from "antd";
import { theme } from "./theme/theme";
import { useState } from "react";

function App() {
  let [input, setInput] = useState("");
  let [sort, setSort] = useState("");

  const onFinish = (values) => {
    let { angka } = values;
    if (sort === "ganjil") {
      let strGanjil = "";
      for (let i = 0; i < angka.length; i++) {
        for (let j = 0; j <= i; j++) {
          let num = Number(angka[j]);
          if (num % 2 === 1) {
            strGanjil += num;
          } else {
            strGanjil += "0";
          }
        }
        console.log(strGanjil);
        setInput(strGanjil);
      }
    } else if (sort === "segitiga") {
      let str = "";
      for (let i = 1; i < angka.length; i++) {
        str += angka.slice(0, i) + "\n";
      }
      console.log(str);
      setInput(str);
      // console.log("segiga");
    } else if (sort === "prima") {
      setInput("prima");
    }
  };

  return (
    <ConfigProvider theme={theme}>
      {console.log(input)}
      <div className="App">
        <div style={{ margin: "10px 30% ", display: "flex" }}>
          <Form onFinish={onFinish}>
            <Form.Item name="angka">
              <Input />
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Form.Item>
                <Button
                  onClick={() => {
                    setSort("segitiga");
                  }}
                  htmlType="submit"
                >
                  Generate Segitiga
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={() => {
                    setSort("ganjil");
                  }}
                  htmlType="submit"
                >
                  Generate Bilangan Ganjil
                </Button>
              </Form.Item>
              <Form.Item
                onClick={() => {
                  setSort("prima");
                }}
              >
                <Button htmlType="submit">Generate Bilangan Prima</Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div>
          <h1>Result:</h1>
          <h1>{input}</h1>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
