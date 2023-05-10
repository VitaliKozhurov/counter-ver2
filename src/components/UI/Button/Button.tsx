import React, {FC} from 'react';
import {styled} from 'styled-components';

type ButtonPropsType = {
    title:string
    callback:()=>void
}

export const Button:FC<ButtonPropsType> = ({title, callback}) => {
    return (
        <>
            <SuperButton onClick={callback}>{title}</SuperButton>
        </>
    )
};

const SuperButton = styled.button`
  background: #61dafb;
  border:none;
  border-radius: 5px;
  color: #282c34;
  padding: 10px;
  font-size: 22px;
  font-weight: 600;
  width: 140px;
  transition: all .3s ease;
  cursor:pointer;
  &:active{
    transform: translateX(3px) translateY(2px);
  }
`