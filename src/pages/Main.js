import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const BackgourndContainer = styled.div`
    width: 80vw;
    height: 45vw;
    justify-content: center;
    background-image: linear-gradient(lightskyblue, dodgerblue);
`;

const Container1 = styled.div`
    width: 70vw;
    height: 20vw;
    margin-top: 16vw;
`;

const Container2 = styled.div`
    width: 35vw;
    height: 20vw;
    flex-direction: column;
`;

const ImgContainer = styled.div`
    width: 35vw;
    height: 20vw;
`;

const TextContainer = styled.div`
    width: 35vw;
    height: 10vw;
    color: white;
    font-size: 2.2rem;
`;

const CreateBtn = styled(Button)`
    width: 100px;
    height: 40px;
    margin-left: 10px;
    background-color: navy;
    :hover {
        background-color: navy;
    }
`;

const ResponseBtn = styled(Button)`
    width: 100px;
    height: 40px;
    margin-left: 10px;
    margin-top: 5px;
    :hover {
        color: navy;
    }
`;

function Main(){
    const navigate = useNavigate();
    return (
        <>
            <BackgourndContainer>
                <Container1>
                    <Container2>
                        <TextContainer>설문조사를 생성 또는 작성 할 수 있습니다.</TextContainer>
                        <CreateBtn type="primary" onClick={() => {navigate("/create")}}>생성하기</CreateBtn>
                        <ResponseBtn onClick={() => {navigate("/response")}}>작성하기</ResponseBtn>
                    </Container2>
                    <ImgContainer></ImgContainer>
                </Container1>
            </BackgourndContainer>
        </>
    )
}

export default Main;