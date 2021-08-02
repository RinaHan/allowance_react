import React, { useState, useEffect } from "react";
import App from "./App.scss";
import Form from "./comps/Input";
import styled from "styled-components";
import ScrollToBottom from 'react-scroll-to-bottom';

const Select = styled.select`
  width: 170px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #6565cd;
`;

export default function Allownace() {
  const [fred, setFred] = useState([])
  const [yujun, setYujun] = useState([])

  const data = [
    {name:'fred', date:'2020-20-20', money:'$20'},
    {name:'fred', date:'2020-20-20', money:'$22'},
    {name:'fred', date:'2020-20-20', money:'$23'},
    {name:'fred', date:'2020-20-20', money:'$20'},
    {name:'fred', date:'2020-20-20', money:'$22'},
    {name:'fred', date:'2020-20-20', money:'$23'},
    {name:'fred', date:'2020-20-20', money:'$20'},
    {name:'fred', date:'2021-20-20', money:'$22'},
    {name:'fred', date:'2021-20-20', money:'$23'},
    {name:'fred', date:'2021-20-20', money:'$20'},
    {name:'yujun', date:'2020-20-20', money:'$20'},
    {name:'yujun', date:'2020-20-20', money:'$30'},
    {name:'yujun', date:'2020-20-20', money:'$40'},
    {name:'yujun', date:'2020-20-20', money:'$20'},
    {name:'yujun', date:'2020-20-20', money:'$30'},
    {name:'yujun', date:'2020-20-20', money:'$40'},
    {name:'yujun', date:'2021-20-20', money:'$20'},
    {name:'yujun', date:'2021-20-20', money:'$30'},
    {name:'yujun', date:'2021-20-20', money:'$40'},
  ]
   
  //질문: filter는 true인값을 array로 생성된다고 했는데, const fred는 [] 없음 error 남
  const filterData = () => {
    var fredArr = data.filter(o=> o.name === 'fred')
    setFred(fredArr)

    var yujunArr = data.filter(o=> o.name === 'yujun')
    setYujun(yujunArr)
  }

  useEffect(()=>{
  filterData()
  },[])

  // console.log(fredArr)
  return (
    <div className="App">
      <div className="Main">
        <div className="Body">
          {/* fred */}
          <div className="Section">
            <div className="NameCont">Fred</div>
            <ScrollToBottom className="NoteCont">
              {fred.map((o,i)=>{
                return(
                  <div className="TextCont">{o.date}, <b>{o.money}</b></div>
                )
              })}
            </ScrollToBottom>
          </div>
          {/* yujun */}
          <div className="Section">
            <div className="NameCont">Yujun</div>
            <ScrollToBottom className="NoteCont">
              {yujun.map((o,i)=>{
                return(
                  <div className="TextCont">{o.date}, <b>{o.money}</b></div>
                )
              })}
            </ScrollToBottom>
          </div>
        </div>
        {/* footer */}
        <div className="Footer">
          <div className="Inputs">
            <label className="Label" for="select">
              Select Name
            </label>
            <Select className="Select" id="select">
              <option label="Fred" value="fred" />
              <option label="Yujun" value="yujun" />
            </Select>
          </div>
          <div className="Inputs">
            <label className="Label" for="date">
              Select Date
            </label>
            <Form type="date" />
          </div>
          <div className="Inputs">
            <label className="Label" for="money">Add allowance</label>
            <Form type="number" placeholder="$" />
          </div>
          <button className="Btn">Add</button>
        </div>
      </div>
    </div>
  );
}
