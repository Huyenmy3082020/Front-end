import styled from 'styled-components';
export const WrapperContainerLeft = styled.div`
    width: 500px;
    padding: 2px 45px 24px;
    background: rgb(255, 255, 255);
    border-radius: 20px 0px 0px 20px;
`;

export const WrapperContainerRight = styled.div`
    background: linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%);
    width: 300px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-radius: 0px 20px 20px 0px;
`;

export const SocialHeading = styled.p`
    font-size: 15px;
    color: rgb(120, 120, 120);
    display: inline-block;
    background: rgb(255, 255, 255);
    padding: 0px 20px;
    position: relative;
    z-index: 2;
`;
export const SocialItem = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0px;
    margin: 0px 0px 10px;
    list-style: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const SocialItemList = styled.li`
    margin: 0px 10px;
`;
export const WrapperText = styled.a`
    display: inline-block;
    text-decoration: underline;
    margin-left: 0px;
    font-size: 11px;
    color: rgb(120, 120, 120);

    &:hover {
        opacity: 0.95;
    }
`;

export const ImgClose = styled.img`
    position: absolute;
    right: -12px;
    top: -12px;
    width: 42px;
    height: 42px;
    background: none;
    border: none;
    cursor: pointer;
`;
