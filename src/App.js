import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 300px 0;
`;
const Cont = styled.div`
  display: flex;
  margin: 50px auto;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const Name = css`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  border-radius: 7px;
  margin: 20px 0;
`;
const NameF = styled.div`
  ${Name}
  background-color: #a7ecce;
`;
const NameY = styled.div`
  ${Name}
  background-color: rgb(211, 234, 128);
`;
const Note = css`
  width: 300px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 20px 0;
  margin: 0 0 20px;
  > p {
    width:200px;
    justify-content:space-between;
    display:flex;
  }
`;
const NoteF = styled.div`
  ${Note}
  flex-direction: column;
  background-color: #d5f1e5;
`;
const NoteY = styled.div`
  ${Note}
  flex-direction: column;
  background-color: rgb(233, 240, 208);
`;
const NoteF_Total = styled.div`
  ${Note}
  justify-content: center;
  background-color: #d5f1e5;
`;
const NoteY_Total = styled.div`
  ${Note}
  justify-content: center;
  background-color: rgb(233, 240, 208);
`;
const SelectName = styled.select`
  width: 130px;
  height: 50px;
  margin-right: 10px;
  background-color: rgb(222, 234, 242);
  border: none;
  color: rgb(34, 131, 195);
  font-weight: bold;
  border-radius: 7px;
`;
const Option = styled.option`
  color: rgb(144, 29, 9);
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
const Delete = css`
  border: none;
  font-size: 16px;
  color: #fff;
  /* margin: 0 0 0 30px; */

`;
const DeleteF = styled.button`
  ${Delete}
  background-color: #a7ecce;
  :hover {
    background-color: #70e1a6;
  }
  :active {
    background-color: #a7ecce;
    transition: 0.1s;
  }
`;
const DeleteY = styled.button`
  ${Delete}
  background-color:rgb(211, 234, 128);
  :hover {
    background-color: #b1dd88;
    /* color:#111; */
  }
  :active {
    background-color: rgb(211, 234, 128);
    transition: 0.1s;
  }
`;

function App() {
  const [fred, setFred] = useState([{ date: "2021-07-20", money: "30" }]);

  const [yujun, setYujun] = useState([{ date: "2021-07-20", money: "30" }]);

  const [addData, setAddData] = useState({
    name: "fred",
    date: "",
    money: "",
  });

  const handleDataChange = (event) => {
    // var event = {
    //   target: {
    //     name:'',
    //     value:''
    //   }
    // }

    const {
      target: { name, value },
    } = event;

    setAddData({
      ...addData,
      [name]: value,
    });
  };

  var FredTotal = 0;
  for (var i = 0; i < fred.length; i++) {
    FredTotal += Number(fred[i].money);
  }

  var YujunTotal = 0;
  for (var i = 0; i < yujun.length; i++) {
    YujunTotal += Number(yujun[i].money);
  }

  return (
    <Container className="App">
      <Cont>
        <Main>
          <NameF>Fred</NameF>
          <NoteF>
            {fred.map((o, i) => {
              return (
                <p key={i}>
                  {o.date}, <b>${o.money}</b>
                  <DeleteF>x</DeleteF>
                </p>
              );
            })}
          </NoteF>
          <NoteF_Total>
            total: <b>${FredTotal}</b>
          </NoteF_Total>
        </Main>
        <Main>
          <NameY>Yujun</NameY>
          <NoteY>
            {yujun.map((o, i) => {
              return (
                <p key={i}>
                  {o.date}, <b>${o.money}</b>
                  <DeleteY>x</DeleteY>
                </p>
              );
            })}
          </NoteY>
          <NoteY_Total>
            total:<b>${YujunTotal}</b>
          </NoteY_Total>
        </Main>
      </Cont>

      <InputCont>
        <SelectName name="name" onChange={handleDataChange}>
          <Option value="fred">Fred</Option>
          <option value="yujun">Yujun</option>
        </SelectName>
        <input
          type="date"
          placeholder="add $"
          value={addData.date}
          name="date"
          onChange={handleDataChange}
        />
        <input
          type="number"
          placeholder="add $"
          value={addData.money}
          name="money"
          onChange={handleDataChange}
        />
        <button
          onClick={() => {
            if (addData.name === "fred") {
              var arr = [...fred];
              arr.push({ name: addData.name, date: addData.date, money: addData.money });
              setFred(arr);
              setAddData({
                ...addData,
                // name:null,
                date: "",
                money: "",
              });
              // setMoney("w");
              console.log(arr);
            } else if (addData.name === "yujun") {
              var arr = [...yujun];
              arr.push({ name: addData.name, date: addData.date, money: addData.money });
              setYujun(arr);
              setAddData({
                ...addData,
                // name:null,
                date: "",
                money: "",
              });
              // setMoney("w");
              console.log(arr);
            }
          }}
        >
          Add
        </button>
      </InputCont>
    </Container>
  );
}

export default App;
