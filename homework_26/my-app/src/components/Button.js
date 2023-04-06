import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButtonBase = styled.button`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  width: 76px;
  height: 48px;
  border-radius: 4px;
  border: none;  
  line-height: 22px;
  color: #FAFAFA;
  font-size: 16px;
  margin: 5px;  

  ${props => {
    if (props.size === "large") {
      return `
        width: 81px;
        font-size: 18px;
        line-height: 25px;`
    }
    if (props.size === "small") {
      return `
        width: 68px;`
    }
  }
}
`
const StyledPrimaryButton = styled(StyledButtonBase)`
  background: #605dec;

  :hover {
    background: #1513a0;
  }

  :disabled {
    background: rgba(203, 212, 230, 0.3);
    color: #7C8DB0;
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  background: white;
  border: 1px solid #605dec;
  color: #605DEC;

  :hover {
    background: #e9e8fc;
  }

  :disabled {
    border: 1px solid #7C8DB0;
    background: white;
  }
`;

const Button = ({ onClick, color, disabled, children, size}) => {
    const buttonProps = {
        disabled,
        onClick,
        children,
        size,
    };   

    if (color === 'secondary') {
        return <StyledSecondaryButton {...buttonProps}></StyledSecondaryButton>
    }

    return <StyledPrimaryButton {...buttonProps}></StyledPrimaryButton>;
};

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
}

Button.defaultProps = {
    color: "primary",
    size: "medium",
    disabled: false,
}

export default Button;
