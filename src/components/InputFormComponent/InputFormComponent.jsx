import { Input } from 'antd';

function InputFormComponent(props) {
    const handleOnChangeInput = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <Input
            style={{
                fontSize: '20px',
                height: '40px',
                color: 'rgb(36, 36, 36)',
            }}
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleOnChangeInput}
            type={props.type}
        />
    );
}

export default InputFormComponent;
