import React, { Component } from 'react'
import styled from 'styled-components';

const Input = styled.input`
    border:none;
    border-radius: 5px;
    padding:10px;
    color:#6565cd;
    font-weight:bold;
    ::placeholder{
        font-weight: bold;
    color:#6565cd;

    }
`

export default function Form({type, name, value, onChange, placeholder}){
    return(
        <div><Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        /></div>
    )
}