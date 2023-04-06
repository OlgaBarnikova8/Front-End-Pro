import PropTypes from 'prop-types';
import styled from "styled-components";
import { ReactComponent as ButtonClose } from '../assets/icons/button.svg';

const StyledAlert = styled.div`
  width: 1200px;   
  padding: 0 20px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #605DEC;  
  color: #F6F6FE;
  
  ${props => {
    switch (props.color) {
      case "error":
        return `
         background: #EB5757; 
         color: #FAFAFA;`
      case "warning":
        return `
         background: #FFD12F; 
         color: #1513A0;`           
      }      
    }
};`

const Text = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;    
`
const Button = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  overflow: hidden;
  padding: 0px;  
`;

const Alert = ({ color, onClose, children }) => {
  return (
    <StyledAlert color={color}>
      <Text>{children}</Text>
      <Button onClick={onClose}><ButtonClose /></Button>
    </StyledAlert>
  );
};
    
Alert.propTypes = {
    color: PropTypes.oneOf(['primary', 'error', 'warning']),
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}
    
Alert.defaultProps = {
  color: "primary",
}

export default Alert;
