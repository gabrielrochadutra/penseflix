import styled from 'styled-components';

const Button = styled.button`
    background-color: #ed525f;
    border: 1px solid #ed525f;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    color: #151515;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .5;
    }
`;

export default Button;