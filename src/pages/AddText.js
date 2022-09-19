import styled from "styled-components";
import { Button } from "antd";
import SelectResOption from "../components/SelectResOption";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BackgourndContainer = styled.div`
    width: 64vw;
    height: 45vw;
    align-items: center;
    background-image: linear-gradient(lightskyblue, dodgerblue);
    flex-direction: column;
`;

const TextContainer = styled.div`
    width: 48vw;
    height: 48px;
    border: none;
    margin-top: 12vw;
`;

const TextInput = styled.input`
    width: 48vw;
    font-size: 30px;
    padding: 5px;
    color: white;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid white;
    :focus{
        outline: none;
    }
`;

const TextAreaContainer = styled.div`
    width: 48vw;
    height: 40px;
    border: none;
    margin-top: 5vw;
`;

const TextareaInput = styled.textarea`
    width: 48vw;
    font-size: 30px;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    cursor: text;
`;

const AddBtn = styled(Button)`
    font-size: 20px;
    height: 40px;
    margin-top: 120px;
    :hover {
        color: black;
    }
`;

function AddText () {
    const navigate = useNavigate();
    const currentValue = 'Text';
    const handleChange = (value) => {
        navigate(`/create/${value}`)
      }
    return (
        <>
            <BackgourndContainer>
                <TextContainer>
                    <TextInput placeholder="2. Text input 설문조사 제목을 입력해주세요."></TextInput>
                </TextContainer>
                <TextAreaContainer>
                    <TextareaInput placeholder="미리보기 입니다." disabled="disabled"></TextareaInput>
                </TextAreaContainer>
                <AddBtn icon="plus">질문 추가하기</AddBtn>
            </BackgourndContainer>
            <SelectResOption currentValue={currentValue} handleChange={handleChange}></SelectResOption>
        </>
    )
}

export default AddText;