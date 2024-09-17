import React from 'react';
import { Checkbox, Rate } from 'antd';
import { WrapperLable, WrapperText, WrapperContent } from './style';

function NavbarComponent() {
    const onChange = (checkedValues) => {
        console.log('Checked values:', checkedValues);
    };

    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => <WrapperText key={index}>{option}</WrapperText>);
            case 'checkbox':
                return (
                    <Checkbox.Group
                        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                        onChange={onChange}
                    >
                        {options.map((option) => (
                            <Checkbox key={option.value} value={option.value}>
                                {option.label}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                );
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span style={{ marginLeft: '4px' }}>{`tu ${option} sao `}</span>
                        </div>
                    );
                });
            case 'price':
                return options.map((option) => {
                    return (
                        <div
                            style={{
                                borderRadius: '10px',
                                color: 'rgb(56 ,56, 61)',
                                backgroundColor: 'rgb(238,238,238)',
                                width: 'fit-content',
                            }}
                        >
                            {option}
                        </div>
                    );
                });

            default:
                return null;
        }
    };

    return (
        <div>
            <WrapperLable>Label</WrapperLable>
            <WrapperContent>
                {renderContent('text', ['Tủ lạnh', 'Ti vi'])}
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' },
                ])}
            </WrapperContent>

            <WrapperContent>{renderContent('star', [3, 4, 5])}</WrapperContent>
            <WrapperContent>{renderContent('price', ['duoi 40', 'tren 50'])}</WrapperContent>
        </div>
    );
}

export default NavbarComponent;
