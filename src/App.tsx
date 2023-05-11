import React, {useState} from 'react';
import './App.css';
import {CounterDisplay} from './components/CounterDisplay/CounterDisplay';
import {CounterSettings} from './components/CounterSettings/CounterSettings';

function App() {
    const [minCounterValue, setMinCounterValue] = useState<number>(0);
    const [maxCounterValue, setMaxCounterValue] = useState<number>(5);
    const [counterValue, setCounterValue] = useState<number>(minCounterValue);
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);

    const increaseCounterValue = () => {
        !isLimitValue && setCounterValue(counterValue + 1);
    }
    const resetCounterValue = () => {
        setCounterValue(minCounterValue);
    }
    const changeSettingMode = () => {
        isSettingMode&&setCounterValue(minCounterValue);
        setIsSettingMode(!isSettingMode);
    }
    const changeMinCounterValue = (value: number) => {
        setMinCounterValue(+value)
    }
    const changeMaxCounterValue = (value: number) => {
        setMaxCounterValue(+value)
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
