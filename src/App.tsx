import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterDisplay} from './components/CounterDisplay/CounterDisplay';
import {CounterSettings} from './components/CounterSettings/CounterSettings';
import {getStateFromLocalStorage, setStateToLocalStorage} from './utils/localStorage';

type LocalStorageType = {
    minCounterValue: number
    maxCounterValue: number
}

function App() {
    let min: number = 0;
    let max: number = 5;
    if(getStateFromLocalStorage('counter')){
        const {minCounterValue, maxCounterValue} = getStateFromLocalStorage('counter');
        min = minCounterValue;
        max = maxCounterValue;
    }

    const [minCounterValue, setMinCounterValue] = useState<number>(min);
    const [maxCounterValue, setMaxCounterValue] = useState<number>(max);
    const [counterValue, setCounterValue] = useState<number>(minCounterValue);
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);

    // useEffect gives us one render, we can get data fom localStorage without useEffect
    /*useEffect(() => {
        const stateFromLS = getStateFromLocalStorage('counter');
        if (stateFromLS) {
            const {minCounterValue, maxCounterValue} = stateFromLS;
            setCounterValue(minCounterValue);
            setMinCounterValue(minCounterValue);
            setMaxCounterValue(maxCounterValue);
        }

    }, [])*/

    const increaseCounterValue = () => {
        !isLimitValue && setCounterValue(counterValue + 1);
    }
    const resetCounterValue = () => {
        setCounterValue(minCounterValue);
    }
    const changeMinCounterValue = (value: number) => {
        setMinCounterValue(+value)
    }
    const changeMaxCounterValue = (value: number) => {
        setMaxCounterValue(+value)
    }
    const changeSettingMode = () => {
        if (isSettingMode) {
            const stateLocalStorage = {minCounterValue, maxCounterValue};
            setStateToLocalStorage<LocalStorageType>('counter', stateLocalStorage);
            setCounterValue(minCounterValue);
        }

        setIsSettingMode(!isSettingMode);
    }

    const isLimitValue = counterValue === maxCounterValue;

    return (
        <div className="App">
            {isSettingMode
                ? <CounterSettings
                    minCounterValue={minCounterValue}
                    maxCounterValue={maxCounterValue}
                    changeSettingMode={changeSettingMode}
                    changeMinCounterValue={changeMinCounterValue}
                    changeMaxCounterValue={changeMaxCounterValue}
                />
                : <CounterDisplay
                    counterValue={counterValue}
                    isLimitValue={isLimitValue}
                    increaseCounterValue={increaseCounterValue}
                    resetCounterValue={resetCounterValue}
                    changeSettingMode={changeSettingMode}
                />}
        </div>
    );
}

export default App;
