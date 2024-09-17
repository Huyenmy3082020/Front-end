import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({ size, styleButton, styleTextButton, disabled, textButton, ...rest }) => {
    return (
        <Button
            disabled={disabled}
            style={{
                ...styleButton,
                background: disabled ? '#ccc' : 'rgb(255,57,69)',
                cursor: disabled ? 'not-allowed' : 'pointer',
                color: 'white',
            }}
            size={size}
            {...rest}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    );
};

export default ButtonComponent;
