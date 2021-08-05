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
// const data = [
//   { date: "2021-07-21", money: "20", name: "fred" },
//   { date: "2021-07-27", money: "10", name: "yujun" },
//   { date: "2021-07-21", money: "6", name: "yujun" },
//   { date: "2021-07-20", money: "30", name: "fred" },
//   { date: "2021-07-22", money: "5", name: "yujun" },
//   { date: "2021-07-23", money: "15", name: "yujun" },
//   { date: "2021-07-24", money: "10", name: "yujun" },
//   { date: "2021-07-28", money: "50", name: "fred" },
// ];

function App() {
  const [ fred, setFred ] = useState([]);
  const [ yujun, setYujun ] = useState([]);
  const [ addData, setAddData ] = useState({
    name: "fred",
    date: "",
    money: "",
  });
  const [ selected, setSelected ] = useState(0);
  const [ mode, setMode ] = useState("create");

  const getAllowance = async () => {
    try {
      //axios.get으로 data return
      var data = await axios.get("http://localhost:7000/api/getallowance");

      //return 한 data 연결
      //data.data

      //[{id:1, name:fred, date: 2021-09-13, money:5}, {id:1, name:yujun, date: 2021-09-13, money:5}]
      var arr1 = data.data.filter((o) => o.name === "fred");
      setFred(arr1);
      // console.log('fred', arr1)

      var arr2 = data.data.filter((o) => o.name === "yujun");
      setYujun(arr2);
      // console.log('yujun', arr2)
      
    } catch (err) {
      console.log(err.message);
    }
  };

  const addAllowance = async () => {
      try{
      // post로 데이타 보내기(addData에 담은거 보낼수 있음), 보내기만 하기때문에 보여주는 코드 작성 해줘야함
      //   var arr = [...fred];
      //   arr.push(addData);
      //   setFred(arr);
        
      var add = await axios.post("http://localhost:7000/api/addallowance", addData);
        
      setAddData({
        name: "fred",
        date: "",
        money: "",
      });
        
        //data 다시 call 해서 보여줘야함
        getAllowance();
        
      } catch (err) {
        console.log(err.message);
      }
  }

  const updateAllowance = async() => {
    try{
      var update = await axios.post("http://localhost:7000/api/updateAllowance", addData);

      setAddData({
        name: "fred",
        date: "",
        money: "",
      });

      getAllowance();

    } 
    catch (err) {
      console.log(err.message)
    }
  }
  const deleteAllowance = async() => {
    try{
      var deleteeee = await axios.post("http://localhost:7000/api/deleteAllowance",
      {
        id: id
      },
      console.log(deleteeee)
      );

      getAllowance();
    } 
    catch (err) {
      console.log(err.massage)
    }
  }

  useEffect(() => {
    getAllowance();
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

  const handleUpdate = (o) => {
    setMode("update");
     /**
        o = {
          id:1,
          name:fred,
          money:5,
          date:2021-09-13
        }
      */
    setAddData(o);
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
                      handleUpdate(o);
                    }}
                  >
                    <CgAdd />
                  </UpdateF>
                  <DeleteF
                    // onClick={() => {
                    //   handleDelete(o, i);
                    // }}
                    onClick={deleteAllowance}
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
                      handleUpdate(o);
                    }}
                  >
                    <CgAdd />
                  </UpdateY>
                  <DeleteY
                    // onClick={() => {
                    //   handleDelete(o, i);
                    // }}
                    onClick={deleteAllowance}
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
            mode === "create" ? addAllowance() : updateAllowance();
          }}
        >
          {btnName}
        </button>
      </InputCont>
    </Container>
  );
}

export default App;
