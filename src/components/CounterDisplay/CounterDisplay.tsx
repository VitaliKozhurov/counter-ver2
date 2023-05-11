import React, {FC} from 'react';
import {CounterInfo} from './CounterInfo/CounterInfo';
import {CounterControls} from './CounterControls/CounterControls';

type CounterDisplayType = {
    counterValue: number
    isLimitValue: boolean
    increaseCounterValue: () => void
    resetCounterValue: () => void
    changeSettingMode: () => void
}

export const CounterDisplay: FC<CounterDisplayType> = ({counterValue, ...restProps}) => {
    const {isLimitValue} = restProps;

    return (
        <div className={'display'}>
            <CounterInfo counterValue={counterValue} isLimitValue={isLimitValue} />
            <CounterControls {...restProps} />
        </div>
    )
};