import { Input } from 'antd';
import styled from 'styled-components';

export const WrapperLable = styled(Input)`
    &:focus {
        border-color: none;
        box-shadow: none;
        outline: 0;
        background-color: #ffffff;
    }
`;
