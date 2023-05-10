import React, {useState} from 'react';
import './App.css';
import {CounterDisplay} from './components/CounterDisplay/CounterDisplay';
import {CounterSettings} from './components/CounterSettings/CounterSettings';

function App() {
    const [minCounterValue, setMinCounterValue] = useState<number>(0);
    const [maxCounterValue, setMaxCounterValue] = useState<number>(5);
    const [counterValue, setCounterValue] = useState<number>(minCounterValue);
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);

    const increaseCounterValue = () =>{
        setCounterValue(counterValue+1);
    }

    const resetCounterValue = () =>{
        setCounterValue(minCounterValue);
    }

    return (
        <div className="App">
            <CounterDisplay
                counterValue={counterValue}
                increaseCounterValue={increaseCounterValue}
                resetCounterValue={resetCounterValue}
            />
            <CounterSettings/>
        </div>
    );
}

export default App;
