import React, {FC} from 'react';
import {styled} from 'styled-components';

type CounterInfoType = {
    counterValue:number
}

export const CounterInfo:FC<CounterInfoType> = ({counterValue}) => {
    return (
        <>
            <Display>{counterValue}</Display>
        </>
    )
};

const Display = styled.div`
  border: solid 3px #61dafb;
   border-radius: 10px;
  color: #61dafb;
  padding: 40px 20px;
  font-size: 60px;
  font-weight: 700;
`