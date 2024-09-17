import { Upload } from 'antd';
import { ExceptionMap } from 'antd/es/result';
import styled from 'styled-components';
export const WrapperHeader = styled.h1`
    color: #000;
    font-size: 26px;
    padding-top: 10px;
`;
export const WrapperContentProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
    border: 1px solid #ccc;
`;

export const WrapperLabel = styled.label`
    color: #000;
    font-size: 20px;
    padding-left: 10px;
`;
export const WrapperInput = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid #ddd;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 10px;
    margin-top: 12px;
`;

export const WrapperFile = styled(Upload)`
    & .ant-upload-list-item {
        display: none;
    }
`;
