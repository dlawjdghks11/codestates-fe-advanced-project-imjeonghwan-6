import styled from "styled-components";
import { Select, Switch, Button } from "antd";
import { useState } from "react";
import { add } from "../features/surveyListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SelectContainer = styled.div`
    width: 16vw;
    height: 45vw;
    margin-top: 5vw;
    flex-direction: column;
    align-items: center;
    border: 1px solid skyblue;
`;

const Container1 = styled.div`
    width: 13vw;
    height: 80px;
    flex-direction: column;
    margin-top: 8vw;
`;

const TextContainer = styled.span`
    margin-bottom: 10px;
    margin-top: 5px;
`;

const SelectOption = styled(Select)`

`;

const Options = styled(Select.Option)`
`;

const ToggleContainer = styled.div`
    width: 13vw;
    height: 20px;
    margin-top: 10px;
`;


const Toggle = styled(Switch)`
    margin-left: auto;
`;

const SubmitBtn = styled(Button)`
    margin-top: auto;
    margin-bottom: 5vw;
    height: 40px;
    font-size: 20px;
`;

function SelectResOption({currentValue, handleChange}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isTrue, setIsTrue] = useState(true);
    const toggleHandler = () => {
        setIsTrue(!isTrue);
    }
    const survey = useSelector((state) => state.surveyList);
    const onSubmit = () => {
        dispatch(add(survey));
        navigate('/');
    }
    return (
        <SelectContainer>
            <Container1>
                <TextContainer>답변 형식</TextContainer>
                <SelectOption 
                    defaultValue={currentValue} 
                    onChange={handleChange}
                >
                    <Options value="select">Select</Options>
                    <Options value="text">Text</Options>
                    <Options value="datepicker">Datepicker</Options>
                    <Options value="radio">Radio</Options>
                </SelectOption>
            </Container1>
            <ToggleContainer>
                <TextContainer>필수 여부</TextContainer>
                <Toggle onChange={toggleHandler} checked/>
            </ToggleContainer>
            <SubmitBtn type="primary" onClick={onSubmit}>생성 완료</SubmitBtn>
        </SelectContainer>
    )
}

export default SelectResOption;