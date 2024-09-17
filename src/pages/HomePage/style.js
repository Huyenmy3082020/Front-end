import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 6px;
    height: 44px;
    border-bottom: 1px solid red;
    justify-content: flex-start;
`;

export const WrapperBtnMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background-color: rgb(13, 92, 182);

        span {
            color: #fff;
        }
    }
`;
