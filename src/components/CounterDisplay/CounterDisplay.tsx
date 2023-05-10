import React, {FC} from 'react';
import {CounterInfo} from './CounterInfo/CounterInfo';
import {CounterControls} from './CounterControls/CounterControls';

type CounterDisplayType = {
    counterValue: number;
    increaseCounterValue: () => void
    resetCounterValue: () => void
}

export const CounterDisplay: FC<CounterDisplayType> = ({counterValue, increaseCounterValue, resetCounterValue}) => {
    return (
        <div className={'display'}>
            <CounterInfo counterValue={counterValue} />
            <CounterControls increaseCounterValue={increaseCounterValue} resetCounterValue={resetCounterValue} />
        </div>
    )
};