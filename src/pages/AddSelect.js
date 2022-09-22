import styled from "styled-components";
import { Button, Icon } from "antd";
import SelectResOption from "../components/SelectResOption";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectModal from "../components/SelectModal";
import { useDispatch } from "react-redux";
import { addQuestion } from "../features/createSurveySlice";

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
    border-bottom: 1px solid white;
`;

const TextareaInput = styled.textarea`
    width: 48vw;
    font-size: 30px;
    color: white;
    border: none;
    background-color: transparent;
    cursor: text;
`;

const SelectIcon = styled(Icon)`
    font-size: 30px;
    color: white;
    margin-right: 5px;
    cursor: text;
`;

const AddOptionBtn = styled.span`
    border: none;
    text-decoration: underline;
    margin-left: 8vw;
    margin-top: 40px;
    margin-right: auto;
    cursor: pointer;
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

function AddSelect () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [surveyInfo, setsurveyInfo] = useState({
        question: '',
        isRequired: true,
        answer: {
            inputType: "select",
            inputOptions: [
                {label: '', value: ''},
                {label: '', value: ''},
            ]
        }
    })
    const [openModal, setOpenModal] = useState(false);
    const modalHandler = () => {
        setOpenModal(!openModal)
    }
    const handleChange = (value) => {
        navigate(`/create/${value}`)
    }
    const inputHandler = (e) => {
        let value = e.target.value;
        setsurveyInfo({ ...surveyInfo, [e.target.name]: value });
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
                        placeholder="1. Select input 설문조사 제목을 입력해주세요."
                        onChange={inputHandler}
                    ></TextInput>
                </TextContainer>
                <TextAreaContainer>
                    <TextareaInput placeholder="미리보기 입니다." disabled="disabled"></TextareaInput>
                    <SelectIcon type="down" />
                </TextAreaContainer>
                <AddOptionBtn onClick={modalHandler}>옵션 추가하기</AddOptionBtn>
                <AddBtn icon="plus" onClick={onSubmit}>질문 추가하기</AddBtn>
            </BackgourndContainer>
            {openModal ? <SelectModal modalHandler={modalHandler} data={surveyInfo} setData={setsurveyInfo}/> : null}
            <SelectResOption 
                currentValue='Select' 
                handleChange={handleChange}
                setData={setsurveyInfo}
            ></SelectResOption>
        </>
    )
}

export default AddSelect;