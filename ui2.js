import React, { useState, useEffect } from "react";
import App from "./App.scss";
import Form from "./comps/Input";
import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";

export default function Allownace() {
  const [fred, setFred] = useState([]);
  const [yujun, setYujun] = useState([]);

  // const [list, setList] = useState([
  //   { name: "fred", date: "2020-20-20", money: "$20" },
  //   { name: "fred", date: "2020-20-20", money: "$23" },
  //   { name: "fred", date: "2020-20-20", money: "$2" },
  //   { name: "fred", date: "2020-20-20", money: "$223" },
  //   // { name: "fred", date: "2020-20-20", money: "$20" },
  //   // { name: "fred", date: "2020-20-20", money: "$22" },
  //   // { name: "fred", date: "2020-20-20", money: "$23" },
  //   // { name: "fred", date: "2020-20-20", money: "$20" },
  //   // { name: "fred", date: "2021-20-20", money: "$22" },
  //   // { name: "fred", date: "2021-20-20", money: "$23" },
  //   // { name: "fred", date: "2021-20-20", money: "$20" },
  //   { name: "yujun", date: "2020-20-20", money: "$20" },
  //   // { name: "yujun", date: "2020-20-20", money: "$30" },
  //   // { name: "yujun", date: "2020-20-20", money: "$40" },
  //   // { name: "yujun", date: "2020-20-20", money: "$20" },
  //   // { name: "yujun", date: "2020-20-20", money: "$30" },
  //   // { name: "yujun", date: "2020-20-20", money: "$40" },
  //   // { name: "yujun", date: "2021-20-20", money: "$20" },
  //   // { name: "yujun", date: "2021-20-20", money: "$30" },
  //   { name: "yujun", date: "2021-20-20", money: "$40" },
  // ]);
  
  const [mode, setMode] = useState('create')
  const [selected, setSelected] = useState('')

  //질문: filter는 true인값을 array로 생성된다고 했는데, const fred는 [] 없음 error 남
  const filterData = () => {
    var fredArr = list.filter((o) => o.name === "fred");
    setFred(fredArr);

    var yujunArr = list.filter((o) => o.name === "yujun");
    setYujun(yujunArr);
  };

  const [data, setData] = useState({
    name:'fred',
    date:'',
    money:''
  })
  
  //질문
  const handleData = (event) => {
    const {
      target: {name, value}
    } = event;

    setData({
      ...data,
      [name]: value
    })
  }
  

  useEffect(() => {
    filterData();
  }, [list]);


 const addAllowance = async () => {
   try{
     var list = await axios.get('http://localhost:7000/api/getallownace')

   } catch(err){
     console.log(err.message)
   }
 }

  console.log(data)
  console.log(selected)

  return (
    <div className="App">
      <div className="Main">
        <div className="Body">
          {/* fred */}
          <div className="Section">
            <div className="NameCont">Fred</div>
            <ScrollToBottom className="NoteCont">
              {fred.map((o, i) => {
                return (
                  <div className="TextCont"
                  onClick={()=>{
                    setSelected(i)
                  }}>
                    <div className="DateText">{o.date},</div>
                    <div className="MoneyText">{o.money}</div>
                    {/* Fred V button */}
                    <div className="Vbtn">
                      <button 
                      onClick={()=>{
                        setData(o)
                        setMode('FredUpdate')
                      }}>v</button>
                    </div>
                    <div className="Xbtn">
                      <button 
                      onClick={()=>{
                        var arr = [...fred]
                        arr.splice(i,1)
                        setFred(arr)
                      }}>x</button>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          {/* yujun */}
          <div className="Section">
            <div className="NameCont">Yujun</div>
            <ScrollToBottom className="NoteCont">
              {yujun.map((o, i) => {
                return (
                  <div className="TextCont"
                  onClick={()=>{
                    setSelected(i)
                  }}>
                    <div className="DateText">{o.date},</div>
                    <div className="MoneyText">{o.money}</div>
                    <div className="Vbtn">
                    {/* Yujun V button */}
                      <button
                      onClick={()=>{
                        setData(o)
                        setMode('YujunUpdate')
                      }}>v</button>
                    </div>
                    <div className="Xbtn">
                      <button
                      onClick={()=>{
                        var arr = [...yujun]
                        arr.splice(i,1)
                        setYujun(arr)
                      }}>x</button>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
        </div>
        <div className="Footer">
          <div className="Inputs">
        {/* select */}
            <label className="Label" for="select">
              Select Name
            </label>
            <select className="Select" id="select" value={data.name}
            name="name"
            onChange={(e)=>{
              setData({
                ...data,
                name:e.target.value
              })
              // setData(handleData)
            }}>
              <option label="Fred" value="fred"/>
              <option label="Yujun" value="yujun"/>
            </select>
          </div>
          {/* date input */}
          <div className="Inputs">
            <label className="Label" for="date">
              Select Date
            </label>
            <Form type="date" name="date"
            value={data.date}
            onChange={(e)=>{
              setData({
                ...data,
                date:e.target.value
              })
              // setData(handleData)
            }}
            />
          </div>
          {/* money input */}
          <div className="Inputs">
            <label className="Label" for="money">
              Add allowance
            </label>
            <Form type="number" placeholder="$" name="money"
            value={data.money}
            onChange={(e)=>{
              setData({
                ...data,
                money:e.target.value
              })
              // setData(handleData)
            }}
            />
          </div>
          {/* button */}
          <button className="Btn"
          onClick={()=>{
            if(mode === 'create'){
              addAllowance()
              // var arr = [...list]
              // arr.push(data)
              // //ㅇㅣ건 왜 에러날까?
              // // arr.push({name:data.name, date:data.date, money:data.money})
              // setList(arr)
            } else if (mode === 'FredUpdate'){
                var arr = [...fred]
                arr[selected]=data
                setFred(arr)
            }
              else if (mode === 'YujunUpdate'){
                var arr = [...yujun]
                arr[selected] = data
                setYujun(arr)
              }
              setData({
                name:'fred',
                date:'',
                money:''
              })
          }}
          >Add</button>
        </div>
      </div>
    </div>
  );
}
