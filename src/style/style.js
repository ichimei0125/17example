import styled from 'styled-components'

const RowStyle = styled.div`
    display:-webkit-flex;
    display: flex;
    flex-direction: row;
    width: 320px;
    height: 48px;
    align-items: center;
`;

const NoStyle = styled.div`
    width: 24px;
`;

const PicStyle = styled.img`
    background-size: 100%;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border: 2px solid rgb(255, 255, 255);
`;

const PointStyle = styled.div`
    -webkit-box-flex: 1px;
    flex-grow: 1;
    text-align: right;
`;

const AppStyle = styled.div`
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    flex-direction: column;
`;

export {RowStyle, AppStyle, PointStyle, PicStyle, NoStyle};