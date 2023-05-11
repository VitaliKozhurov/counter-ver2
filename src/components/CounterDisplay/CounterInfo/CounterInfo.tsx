import React, {FC} from 'react';
import {styled} from 'styled-components';

type CounterInfoType = {
    counterValue:number
    isLimitValue:boolean
}

export const CounterInfo:FC<CounterInfoType> = ({counterValue,isLimitValue}) => {
    return (
        <>
            <Display limit={isLimitValue.toString()}>{counterValue}</Display>
        </>
    )
};

const Display = styled.div<{limit:string}>`
  border: solid 3px #61dafb;
  border-radius: 10px;
  color:${props=>props.limit==='true'?'red':'#61dafb'};
  padding: 40px 20px;
  font-size: 60px;
  font-weight: 700;
`