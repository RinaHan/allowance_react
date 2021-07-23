import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 300px 0;
`;
export const Cont = styled.div`
  display: flex;
  margin: 50px auto;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
export const Name = `
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
export const NameF = styled.div`
  ${Name}
  background-color: #a7ecce;
`;
export const NameY = styled.div`
  ${Name}
  background-color: rgb(211, 234, 128);
`;
export const Note = `
  width: 300px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 20px 0;
  margin: 0 0 20px;
  > p {
    width: 200px;
    justify-content: space-between;
    display: flex;
  }
`;
export const NoteF = styled.div`
  ${Note}
  flex-direction: column;
  background-color: #d5f1e5;
`;
export const NoteY = styled.div`
  ${Note}
  flex-direction: column;
  background-color: rgb(233, 240, 208);
`;
export const NoteF_Total = styled.div`
  ${Note}
  justify-content: center;
  background-color: #d5f1e5;
`;
export const NoteY_Total = styled.div`
  ${Note}
  justify-content: center;
  background-color: rgb(233, 240, 208);
`;
export const SelectName = styled.select`
  width: 130px;
  height: 50px;
  margin-right: 10px;
  background-color: rgb(222, 234, 242);
  border: none;
  color: rgb(34, 131, 195);
  font-weight: bold;
  border-radius: 7px;
`;
export const Option = styled.option`
  color: rgb(144, 29, 9);
`;

export const InputCont = styled.div`
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
    /* width: 50px; */
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
export const Button = `
  border: none;
  color: #fff;
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content:center;
`;
export const DeleteF = styled.button`
  /* font-size:18px; */
  ${Button}
  background-color: #70e1a6;
  :hover {
    background-color: #a7ecce;
  }
  :active {
    background-color: #70e1a6;
    transition: 0.1s;
  }
`;
export const UpdateF = styled.button`
  /* font-size:18px; */
  ${Button}
  background-color: #70e1a6;
  :hover {
    background-color: #a7ecce;
  }
  :active {
    background-color: #70e1a6;
    transition: 0.1s;
  }
`;
export const DeleteY = styled.button`
  /* font-size:18px; */
  ${Button}
  background-color:rgb(184, 221, 49);
  :hover {
    background-color: rgb(202, 230, 101);
  }
  :active {
    background-color: rgb(198, 228, 88);
    transition: 0.1s;
  }
`;

export const UpdateY = styled.button`
  ${Button}
  background-color:rgb(184, 221, 49);
  :hover {
    background-color: rgb(202, 230, 101);
  }
  :active {
    background-color: rgb(198, 228, 88);
    transition: 0.1s;
  }
`;
