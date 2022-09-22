import styled from "styled-components";
import { Button, Typography, Icon } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../features/createSurveySlice";

const BackgourndContainer = styled.div`
    width: 80vw;
    height: 45vw;
    margin-top: 5vw;
    align-items: center;
    background-image: linear-gradient(lightskyblue, dodgerblue);
    flex-direction: column;
`;

const TextContainer = styled.div`
    width: 60vw;
    height: 48px;
    border: none;
    margin-top: 12vw;
`;

const TextInput = styled.input`
    width: 60vw;
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
    width: 60vw;
    height: 40px;
    border: none;
    margin-top: 5vw;
`;

const TextareaInput = styled.textarea`
    width: 60vw;
    max-height: 120px;
    font-size: 30px;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    :focus{
        outline: none;
    }
`;

const Container3 = styled.div`
    margin-left: 10vw;
    margin-top: 120px;
    margin-right: auto;
    flex-direction: row;
`;

const SubmitBtn = styled(Button)`
    font-size: 20px;
    height: 40px;
    :hover {
        color: black;
    }
`;

const TextContainer2 = styled(Typography.Text)`
    color: white;
    display: flex;
    margin-left: 30px;
    align-items: center;
`;

function CreateSurvey(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [surveyInfo, setSurveyInfo] = useState({
        title: '',
        description: '',
        formData: [],
        completionNotice: '귀한 시간 내주셔서 감사합니다.'
      })
    const autoResizeTextarea = (e) => {
        let textarea = document.querySelector('.autoTextarea');
      
        if (textarea) {
          textarea.style.height = 'auto';
          let height = textarea.scrollHeight; // 높이
          textarea.style.height = `${height + 4}px`;
        }
    };
    const inputHandler = (e) => {
        let value = e.target.value;
        setSurveyInfo({ ...surveyInfo, [e.target.name]: value });
    };
    const onSubmit = () => {
        const info = surveyInfo;
        dispatch(setTitle(info));
        navigate('/create/select');
    }
    const handleKeyPress = (e) => {
		if (e.type === 'keypress' && e.code === 'Enter') {
			onSubmit()
		}
	}
    return (
        <BackgourndContainer>
            <TextContainer>
                <TextInput 
                    name="title"
                    placeholder="문서 제목"
                    onChange={inputHandler}
                ></TextInput>
            </TextContainer>
            <TextAreaContainer>
                <TextareaInput 
                    name="description"
                    className="autoTextarea" 
                    placeholder="문서 설명"
                    onKeyDown={autoResizeTextarea}
                    onKeyUp={autoResizeTextarea}
                    onChange={inputHandler}
                    onKeyPress={handleKeyPress}
                >
                </TextareaInput>
            </TextAreaContainer>
            <Container3>
                <SubmitBtn 
                    icon="check" 
                    onClick={onSubmit}
                >설문조사 생성하기</SubmitBtn>
                <TextContainer2>Enter키를 눌러주세요. <Icon type="enter"/></TextContainer2>
            </Container3>
        </BackgourndContainer>
    )
}

export default CreateSurvey;