import styled from "styled-components";
import { Select, Switch } from "antd";
import { useState } from "react";

const SelectContainer = styled.div`
    width: 16vw;
    height: 45vw;
    flex-direction: column;
    align-items: center;
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

function SelectResOption({currentValue, handleChange}){
    const [isTrue, setIsTrue] = useState(true);
    const toggleHandler = () => {
        setIsTrue(!isTrue);
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
        </SelectContainer>
    )
}

export default SelectResOption;