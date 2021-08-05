import React, { useState, useEffect } from "react";
import App from "./App.scss";
import Form from "./comps/Input";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";

export default function Allownace() {
  const [fred, setFred] = useState([]);
  const [yujun, setYujun] = useState([]);
  const [list, setList] = useState([]);
  const [mode, setMode] = useState("create");
  const [selected, setSelected] = useState("");

  //질문: filter는 true인값을 array로 생성된다고 했는데, const fred는 [] 없음 error 남
  //==> 코드 아래로 읽으면서 map 해야해서 [] 기본타입은 입력해 줘야한다.
  const filterData = () => {
    var fredArr = list.filter((o) => o.name === "fred");
    setFred(fredArr);

    var yujunArr = list.filter((o) => o.name === "yujun");
    setYujun(yujunArr);
  };

  const [data, setData] = useState({
    name: "fred",
    date: "",
    money: "",
  });

  const handleData = (event) => {
    const {
      target: { name, value },
    } = event;

    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    getAllowance();
  }, []);

  const getAllowance = async () => {
    try {
      var list = await axios.get("http://localhost:7000/api/getallowance");

      var fredArr = list.data.filter((o) => o.name === "fred");
      setFred(fredArr);

      var yujunArr = list.data.filter((o) => o.name === "yujun");
      setYujun(yujunArr);

    } catch (err) {
      console.log(err.message);
    }
  };

  const addAllowance = async () => {
    try {
      var add = await axios.post("http://localhost:7000/api/addAllowance", data);

      getAllowance();
      setData({
        name: "fred",
        date: "",
        money: "",
      });

    } catch (err) {
      console.log(err.messange);
    }
  };

  const updateAllowance = async () => {
    try {
      var update = await axios.post("http://localhost:7000/api/updateAllowance", data);

      getAllowance();
      setData({
        name: "fred",
        date: "",
        money: "",
      });

    } 
    catch (err) {
      console.log(err.message);
    }
  };

  const deleteAllowance = async (hello) => {
    try {
      var deletee = await axios.post("http://localhost:7000/api/deleteAllowance", { id: hello });

      getAllowance();
    } 
    catch (err) {
      console.log(err);
    }
  };

  console.log(selected);

  var clickUpdate = (data) => {
    setData(data);
    setMode("update");
  };

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
                  <div
                    className="TextCont"
                    onClick={() => {
                      setSelected(i);
                    }}
                  >
                    <div className="DateText">{o.date},</div>
                    <div className="MoneyText">${o.money}</div>
{/* Fred V button */}
                    <div className="Vbtn">
                      <button
                        onClick={() => {
                          clickUpdate(o);
                        }}
                      >
                        v
                      </button>
                    </div>
                    <div className="Xbtn">
                      <button
                        onClick={() => {
                          deleteAllowance(o.id);
                        }}
                      >
                        x
                      </button>
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
                  <div
                    className="TextCont"
                    onClick={() => {
                      setSelected(i);
                    }}
                  >
                    <div className="DateText">{o.date},</div>
                    <div className="MoneyText">${o.money}</div>
                    <div className="Vbtn">
{/* Yujun V button */}
                      <button
                        onClick={() => {
                          clickUpdate(o);
                        }}
                      >
                        v
                      </button>
                    </div>
                    <div className="Xbtn">
                      <button
                        onClick={() => {
                          deleteAllowance(o.id);
                        }}
                      >
                        x
                      </button>
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
            <select
              className="Select"
              id="select"
              value={data.name}
              name="name"
              onChange={handleData}
            >
              <option label="Fred" value="fred" />
              <option label="Yujun" value="yujun" />
            </select>
          </div>
{/* date input */}
          <div className="Inputs">
            <label className="Label" for="date">
              Select Date
            </label>
            <Form type="date" name="date" value={data.date} onChange={handleData} />
          </div>
{/* money input */}
          <div className="Inputs">
            <label className="Label" for="money">
              Add Allowance
            </label>
            <Form
              type="number"
              placeholder="$"
              name="money"
              value={data.money}
              onChange={handleData}
            />
          </div>
{/* button */}
          <button
            className="Btn"
            onClick={() => {
              if (mode === "create") {
                addAllowance();
              } else if (mode === 'update'){
                updateAllowance();
                setMode('create')
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
