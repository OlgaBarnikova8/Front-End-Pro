import PropTypes from 'prop-types';
import styled from "styled-components";


const StyledButtonBase = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`
const StyledPrimaryButton = styled(StyledButtonBase)`
  background: #605dec;

  :hover {
    background: #1513a0;
  }

  :disabled {
    background: rgba(203, 212, 230, 0.3);
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  background: white;
  border: 1px solid #605dec;

  :hover {
    background: #e9e8fc;
  }

  :disabled {
    border: 1px solid #7C8DB0;
    background: white;
  }
`;

const IconButton = ({ onClick, color, disabled, children}) => {
    const buttonProps = {
        disabled,
        onClick,
        children,
    };

    if (color === 'secondary') {
        return <StyledSecondaryButton {...buttonProps}></StyledSecondaryButton>
    }

    return <StyledPrimaryButton {...buttonProps}></StyledPrimaryButton>;
};

IconButton.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

IconButton.defaultProps = {
    color: "primary",
    disabled: false,
}

export default IconButton;
