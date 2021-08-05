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

//filtering data
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
    //[filter: filter의 조건이 true인것이 array 값이 되는것임]
    //{여러줄 쓸때???}
    //return true를 이용해서 해당되는것들 arr에 추가할수 있다
    var arr = data.filter((o) => o.name === "fred");
    setFred(arr);
    console.log("F", fred);
  };

  const filterYujun = () => {
    var arr = data.filter((o) => o.name === "yujun");
    setYujun(arr);
    console.log("Y", yujun);
  };
  //[]있어야 한번만 작동됨
  useEffect(() => {
    filterFred();
    filterYujun();
  }, []);

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
  };

  const updateList = () => {
    //regular expression으로 텍스트, 숫자 등등 체크할수 있음

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

  const random = (data) => {
    console.log(data);
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

  const handleDelete = (name, i) => {
    if (name === "fred") {
      var arr = [...fred];
      arr.splice(i, 1);
      setFred(arr);
    } else {
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
                      setSelected(i);
                      setMode("updateF");
                      setAddData(fred[i]);
                      console.log(i, fred[i]);
                    }}
                  >
                    <CgAdd />
                  </UpdateF>
                  <DeleteF
                    onClick={() => {
                      var arr = [...fred];
                      arr.splice(i, 1);
                      setFred(arr);
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
                      setSelected(i);
                      setMode("updateY");
                      setAddData(yujun[i]);
                      console.log(i, addData);
                    }}
                  >
                    <CgAdd />
                  </UpdateY>
                  <DeleteY
                    onClick={() => {
                      // setSelected(i);
                      var arr = [...yujun];
                      arr.splice(i, 1);
                      setYujun(arr);
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
          value={
            mode === "updateF" ? addData.date : mode === "updateY" ? addData.date : addData.date
          }
          name="date"
          onChange={handleDataChange}
        />
        <input
          type="number"
          placeholder="add $"
          value={
            mode === "updateF" ? addData.money : mode === "updateY" ? addData.money : addData.money
          }
          name="money"
          onChange={handleDataChange}
        />
        <button
          onClick={() => {
            mode === "create" ? addList() : updateList();
          }}

          // function 여러줄 쓸때 {}
          // onClick={()=>{
          //   addList();
          //   updateList();
          // }}
        >
          {btnName}
        </button>
      </InputCont>
    </Container>
  );
}

export default App;
