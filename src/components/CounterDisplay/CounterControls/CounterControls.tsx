import React, {FC} from 'react';
import {styled} from 'styled-components';
import {Button} from '../../UI/Button/Button';

type CounterControlsType = {
    isLimitValue:boolean
    increaseCounterValue: () => void
    resetCounterValue: () => void
    changeSettingMode: () => void
}

export const CounterControls: FC<CounterControlsType> = ({isLimitValue, increaseCounterValue, resetCounterValue,changeSettingMode}) => {
    return (
        <>
            <Controls>
                <Button title={'Increment'} callback={increaseCounterValue} disabled={isLimitValue}/>
                <Button title={'Reset'} callback={resetCounterValue} />
                <Button title={'Settings'} callback={changeSettingMode} />
            </Controls>
        </>
    )
};

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 3px #61dafb;
  border-radius: 10px;
  padding: 30px 20px;
`