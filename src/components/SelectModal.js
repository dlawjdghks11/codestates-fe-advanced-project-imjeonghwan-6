import styled from "styled-components";
import { Input, Icon, Button } from "antd";
import { useState } from "react";

const ModalBackdrop = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.4);
    display: grid;
    place-items: center;
    overflow-y: auto;
`;

const BackgroundContainer = styled.div`
    width: 500px;
    height: 500px;
    background-color: #ffffff;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;
`;

const TitleContainer = styled.div`
    width: 450px;
    height: 24px;
    font-weight: bold;
    font-size: 22px;
    margin-top: 40px;
`;

const GuideContainer = styled.div`
    width: 450px;
    height: 60px;
    background-color: rgba(0,0,0,0.03);
    margin-top: 30px;
    padding-left: 10px;
    justify-content: center;
    flex-direction: column;
`;

const Container = styled.div`
    width: 480px;
    height: 230px;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
`;

const OptionContainer = styled.div`
    width: 450px;
    height: 80px;
    margin-top: 20px;
`;

const ValueContainer = styled.div`
    width: 220px;
    height: 80px;
    margin-left: 10px;
    flex-direction: column;
`;

const TextContainer = styled.div`
    width: 220px;
    height: 30px;
    margin-top: 10px;
    font-weight: lighter;
`;

const InputContainer = styled(Input)`
    height: 45px;
    padding: 5px;
    font-size: 16px;
`;

const AddOption = styled.span`
    height: 20px;
    margin-top: 20px;
    color: deepskyblue;
    cursor: pointer;
`;

const BtnContainer = styled.div`
    width: 500px;
    margin-top: auto;
    justify-content: center;
`;

const CancleBtn = styled(Button)`
    width: 249px;
    height: 50px;
    border-radius: 0px;
`;

const SubmitBtn = styled(Button)`
    width: 249px;
    height: 50px;
    border-radius: 0px;
`;

function SelectModal({modalHandler, data, setData}){
    const optionBtnHandler = () => {
        setData([...data.answer.inputOptions, {label: '', value: ''}])
    }
    return (
        <ModalBackdrop>
            <BackgroundContainer>
                <TitleContainer>옵션을 설정해 주세요.</TitleContainer>
                <GuideContainer>
                    <span>라벨: 실제로 설문조사 답변에 나타나는 label</span>
                    <span>값: JSON 데이터에 입력되는 value</span>
                </GuideContainer>
                <Container>
                {data.answer.inputOptions.map((el, idx) => {
                    return (
                        <OptionContainer key={idx}>
                            <ValueContainer>
                                <TextContainer>라벨</TextContainer>
                                <InputContainer placeholder="예) 동의함"></InputContainer>
                            </ValueContainer>
                            <ValueContainer>
                                <TextContainer>값</TextContainer>
                                <InputContainer placeholder="예) true"></InputContainer>
                            </ValueContainer>
                        </OptionContainer>
                    )
                })}
                </Container>
                <AddOption><Icon type="plus-circle" onClick={optionBtnHandler}/>옵션 추가하기</AddOption>
                <BtnContainer>
                    <CancleBtn onClick={modalHandler}>취소</CancleBtn>
                    <SubmitBtn type="primary" onClick={modalHandler}>완료</SubmitBtn>
                </BtnContainer>
            </BackgroundContainer>
        </ModalBackdrop>
    )
}

export default SelectModal;