import { Row } from 'antd';
import styled from 'styled-components';
import Tippy from '@tippyjs/react'; // Import Tippy từ @tippyjs/react

export const WrapperHeader = styled(Row)`
    padding: 10px;
    background-color: #fff;
    z-index: 999;
    align-items: center;
    flex-wrap: no-wrap;
    padding-bottom: 8px;
`;

export const WrapperTextHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
`;

export const WrapperHeaderAccount = styled.div`
    color: #fff;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    margin-left: 30px;
`;
export const WrapperTextHeaderSmall = styled.span`
    color :#fff
    font-size :12px;
`;

export const WrapperTextIcon = styled.span`
    font-size: 14px;
    color: rgb(0, 62, 161);
    margin-top: 8px;
    font-weight: 600;
    text-align: center;
`;

export const WrapperList = styled.span`
    display: flex;
    height: 24px;
    width: 712px;
    align-items: flex-start;
    margin-top: 12px;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 12px;
    list-style: none;
`;

export const WrapperListItem = styled.a`
    display: block;
    font-weight: 450;
    font-size: 12px;
    line-height: 150%;
    color: rgb(128, 128, 137);
    white-space: nowrap;
`;
export const WrapperListAccount = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 8px 10px;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    &:hover {
        background-color: rgba(39, 39, 42, 0.12);
    }
`;
export const WrapperListAccountIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 4px;
    border-radius: 50%;
`;
export const WrapperListAccountAdd = styled.a`
    text-decoration: underline;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(39, 39, 42);
`;

export const WrapperListAccountLink = styled.a`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: rgb(128, 128, 137);
`;

export const WrapperListAccountTippiLi = styled.li`
        padding-top: 5px;
        padding-bottom:5px;
        &:hover {
        background-color: rgba(39, 39, 42, 0.08);
    }
}
`;
export const StyledTippy = styled(Tippy)`
    .tippy-content {
        padding: 0 !important;
        background-color: #fff;
        color: #000;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-top: 9px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .tippy-arrow:before {
        border-style: none !important;
    }
`;
