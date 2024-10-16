import styled from 'styled-components';
import { Card } from 'antd';
export const StyleNameProduct = styled.h1`
    font-weight: 450;
    font-size: 13px;
    display: block;
    line-height: 16px;
    height: 3.5rem;
    color: rgba(56, 56, 61);
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;
export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgba(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`;
export const WrapperPriceText = styled.div`
    font-size: 16px;
    color: rgba(255, 66, 78);
    font-weight: 500;
    padding-bottom: 16px;
`;
export const WrapperCardStyle = styled(Card)`
    width: 200px;
    position: relative;
`;
export const Discount = styled.span`
    font-size: 12px;
    color: rgba(255, 66, 78);
    font-weight: 500;
`;

export const SupperShipperText = styled.span`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0px;
    overflow: hidden;
    color: var(--Alias-Secondary---On-Theme, #808089);
    text-overflow: ellipsis;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    line-height: 150%;
    padding-left: 8px;
`;
