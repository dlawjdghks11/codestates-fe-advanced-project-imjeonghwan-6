import styled from "styled-components";
import { Button } from "antd";
import SelectResOption from "../components/SelectResOption";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addQuestion } from "../features/createSurveySlice";
import { useDispatch } from "react-redux";

const BackgourndContainer = styled.div`
    width: 64vw;
    height: 45vw;
    margin-top: 5vw;
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
    margin-top: auto;
    margin-bottom: 40px;
    :hover {
        color: black;
    }
`;

function AddText () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [surveyInfo, setSurveyInfo] = useState({
        question: '',
        isRequired: true,
        answer: {
            inputType: "text"
        }
    })
    const handleChange = (value) => {
        navigate(`/create/${value}`)
    }
    const inputHandler = (e) => {
        let value = e.target.value;
        setSurveyInfo({ ...surveyInfo, [e.target.name]: value });
    };
    const onSubmit = () => {
        const info = surveyInfo;
        dispatch(addQuestion(info))
    }
    return (
        <>
            <BackgourndContainer>
                <TextContainer>
                    <TextInput 
                        name="question"
                        placeholder="2. Text input 설문조사 제목을 입력해주세요."
                        onChange={inputHandler}
                    ></TextInput>
                </TextContainer>
                <TextAreaContainer>
                    <TextareaInput placeholder="미리보기 입니다." disabled="disabled"></TextareaInput>
                </TextAreaContainer>
                <AddBtn icon="plus" onClick={onSubmit}>질문 추가하기</AddBtn>
            </BackgourndContainer>
            <SelectResOption currentValue='Text' handleChange={handleChange}></SelectResOption>
        </>
    )
}

export default AddText;