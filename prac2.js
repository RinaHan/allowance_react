import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import styled, { css } from "styled-components";
import axios from "axios";
import { CgAdd } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import {
  Container,
  Cont,
  Main,
  NameF,
  NameY,
  NoteF,
  NoteY,
  NoteF_Total,
  NoteY_Total,
  SelectName,
  Option,
  InputCont,
  DeleteF,
  DeleteY,
  UpdateF,
  UpdateY,
} from "./style";

const data = [
  { date: "2021-07-21", money: "20", name: "fred" },
  { date: "2021-07-27", money: "10", name: "yujun" },
  { date: "2021-07-21", money: "6", name: "yujun" },
  { date: "2021-07-20", money: "30", name: "fred" },
  { date: "2021-07-22", money: "5", name: "yujun" },
  { date: "2021-07-23", money: "15", name: "yujun" },
  { date: "2021-07-24", money: "10", name: "yujun" },
  { date: "2021-07-28", money: "50", name: "fred" },
];

function App() {

  const [fred, setFred] = useState([]);
  const [yujun, setYujun] = useState([]);
  const [addData, setAddData] = useState({
    name: "fred",
    date: "",
    money: "",
  });
  const [selected, setSelected] = useState(0);
  const [mode, setMode] = useState("create");

 

  const filterFred = () => {
    var arr = data.filter((o) => o.name === "fred");
    setFred(arr);
    console.log("F", fred);
  };

  const filterYujun = () => {
    var arr = data.filter((o) => o.name === "yujun");
    setYujun(arr);
    console.log("Y", yujun);
  };

  useEffect(() => {
    filterFred();
    filterYujun();
  }, []);

  const handleDataChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setAddData({
      ...addData,
      [name]: value,
    });
  };

  const addList = async () => {
    if (addData.name === "fred") {
      var arr = [...fred];
      arr.push(addData);
      setFred(arr);
      setAddData({
        name: "fred",
        date: "",
        money: "",
      });
      console.log(arr);
    } else if (addData.name === "yujun") {
      var arr = [...yujun];
      arr.push(addData);
      setYujun(arr);
      setAddData({
        name: "fred",
        date: "",
        money: "",
      });
      console.log(arr);
    }
    var add = await axios.post("/addmoney", addData);
    //getallowance
  };

  const updateList = () => {
    //regular expression

    if (addData.name === "fred") {
      var arr = [...fred];
      arr[selected] = { date: addData.date, money: addData.money };
      setFred(arr);
      setMode("create");
      setAddData({
        name: "fred",
        date: "",
        money: "",
      });
    } else if (addData.name === "yujun") {
      var arr = [...yujun];
      arr[selected] = { date: addData.date, money: addData.money };
      setYujun(arr);
      setMode("create");
      setAddData({
        name: "fred",
        date: "",
        money: "",
      });
    }
  };

  var FredTotal = 0;
  for (var i = 0; i < fred.length; i++) {
    FredTotal += Number(fred[i].money);
  }

  var YujunTotal = 0;
  for (var i = 0; i < yujun.length; i++) {
    YujunTotal += Number(yujun[i].money);
  }

  var btnName;
  if (mode === "create") {
    btnName = <p>Add</p>;
  } else if (mode === "updateF" || mode === "updateY") {
    btnName = <p>Update</p>;
  }

  const handleUpdate = (o, i) => {
    setSelected(i);
    if (o.name === "fred") {
      setMode("updateF");
      setAddData(fred[i]);
      console.log(i, fred[i]);
    } else if (o.name === "yujun") {
      setMode("updateY");
      setAddData(yujun[i]);
      console.log(i, yujun[i]);
    }
  };

  const handleDelete = (o, i) => {
    if (o.name === "fred") {
      var arr = [...fred];
      arr.splice(i, 1);
      setFred(arr);
    } else if (o.name === "yujun") {
      var arr = [...yujun];
      arr.splice(i, 1);
      setYujun(arr);
    }
  };

  return (
    <Container className="App">
      <Cont>
        <Main>
          <NameF>F.J.</NameF>
          <NoteF>
            {fred.map((o, i) => {
              return (
                <p key={i}>
                  {o.date}, <b>${o.money}</b>
                  <UpdateF
                    onClick={() => {
                      handleUpdate(o, i);
                    }}
                  >
                    <CgAdd />
                  </UpdateF>
                  <DeleteF
                    onClick={() => {
                      handleDelete(o, i);
                    }}
                  >
                    <ImCancelCircle />
                  </DeleteF>
                </p>
              );
            })}
          </NoteF>
          <NoteF_Total>
            total: <b>${FredTotal}</b>
          </NoteF_Total>
        </Main>
        <Main>
          <NameY>Y.J.</NameY>
          <NoteY>
            {yujun.map((o, i) => {
              return (
                <p key={i}>
                  {o.date}, <b>${o.money}</b>
                  <UpdateY
                    onClick={() => {
                      handleUpdate(o, i);
                    }}
                  >
                    <CgAdd />
                  </UpdateY>
                  <DeleteY
                    onClick={() => {
                      handleDelete(o, i);
                    }}
                  >
                    <ImCancelCircle />
                  </DeleteY>
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
        <SelectName value={addData.name} name="name" onChange={handleDataChange}>
          <Option value="fred">F.J.</Option>
          <Option value="yujun">Y.J.</Option>
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
            mode === "create" ? addList() : updateList();
          }}
        >
          {btnName}
        </button>
      </InputCont>
    </Container>
  );
}

export default App;
