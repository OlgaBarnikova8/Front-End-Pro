import styled from "styled-components";

const StyledButton = styled.button`
  height: 48px;
  background-color: darkgreen;
  color: ${(props) => (props.active ? "#eee" : "#fff")};
`;

const ButtonStyled = ({ children, onClick }) => (
    <StyledButton onClick={onClick} active>{children}</StyledButton>
);

export default ButtonStyled;
