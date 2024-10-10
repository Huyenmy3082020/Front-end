import styled from 'styled-components';
import { Image } from 'antd';
import { InputNumber } from 'antd';
export const WrapperStyleImage = styled(Image)`
    height: 64px !important;
    padding-right: 4px;
`;

export const WrapperStyleNameProducted = styled.h1`
    color: rgb (36 36 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`;
export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsisl;
    }
    span.change_address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        flext-shrink: 0;
    }
`;
export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    border-radius: 4px;
    width: 100%;
`;
