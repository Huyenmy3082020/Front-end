import { Spin } from 'antd';

function SpinnerComponent({ children, isLoading, delay = 500 }) {
    return (
        <Spin spinning={isLoading} delay={delay}>
            {children}
        </Spin>
    );
}

export default SpinnerComponent;
