import styled from "styled-components";

const BackgourndContainer = styled.div`
    width: 80vw;
    height: 45vw;
    margin-top: 5vw;
    align-items: center;
    background-image: linear-gradient(lightskyblue, dodgerblue);
    flex-direction: column;
`;

function EndPage(){
    return (
        <BackgourndContainer></BackgourndContainer>
    )
}
export default EndPage;