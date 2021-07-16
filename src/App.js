import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 300px 0;
  /* background-color:rgb(30, 194, 104); */
`;
const InputCont = styled.div`
  > input {
    width: 210px;
    height: 50px;
    background-color: rgb(222, 234, 242);
    border: none;
    border-radius: 7px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
    color: rgb(34, 131, 195);
    ::placeholder {
      color: rgb(34, 131, 195);
      padding-left: 10px;
    }
    :hover {
      background-color: rgb(234, 241, 246);
    }
  }
  > button {
    width: 50px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    /* color:#fff; */
    background-color: rgb(151, 199, 231);
    border: none;
    border-radius: 7px;
    cursor: pointer;
    :hover {
      background-color: rgb(120, 184, 227);
    }
    :active {
      background-color: rgb(151, 199, 231);
    }
  }
`;
const Cont = styled.div`
  display: flex;
  margin: 50px auto;
`;
const Infom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const Name = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  border-radius: 7px;
  background-color: #a7ecce;
  margin: 20px 0;
`;
const Note = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  padding: 20px 0;
  background-color: #d5f1e5;
  margin: 0 0 20px;
`;
const SelectCont = styled.select`
  width: 130px;
  height: 50px;
  margin-right: 10px;
  background-color: rgb(222, 234, 242);
  border: none;
  color: rgb(34, 131, 195);
  font-weight: bold;
  border-radius: 7px;
`;

function App() {
  const [fred, setFred] = useState([
    { date: "2021-02-02", sum: "30" },
    { date: "2021-05-22", sum: "5" },
    { date: "2021-06-10", sum: "5" },
  ]);
  const [yujun, setYujun] = useState([
    { date: "2021-02-02", sum: "30" },
    { date: "2021-05-22", sum: "5" },
    { date: "2021-06-10", sum: "5" },
  ]);
  const [date, setDate] = useState("");
  const [sum, setSum] = useState("");

  return (
    <Container className="App">
      <Cont>
        <Infom>
          <Name>Fred</Name>
          <Note>
            {fred.map((o, i) => {
              return (
                <p key={i}>
                  {o.date}, <b>{o.sum}$</b>
                </p>
              );
            })}
          </Note>
          <Note>total</Note>
        </Infom>
        <Infom>
          <Name>Yujun</Name>
          <Note>
          {yujun.map((o, i) => {
              return (
                <p key={i}>
                  {o.date}, <b>{o.sum}$</b>
                </p>
              );
            })}
          </Note>
          <Note>total</Note>
        </Infom>
      </Cont>

      <InputCont>
        <SelectCont>
          <option value="fred">Fred</option>
          <option value="yujun">Yujun</option>
        </SelectCont>
        <input
          type="date"
          placeholder="add $"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="add $"
          value={sum}
          onChange={(e) => {
            setSum(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var arr = [...fred];
            arr.push({ date: date, sum: sum });
            setFred(arr);
            setDate("")
            setSum("")
            console.log(arr);
          }}
        >
          Add
        </button>
      </InputCont>
    </Container>
  );
}

export default App;
