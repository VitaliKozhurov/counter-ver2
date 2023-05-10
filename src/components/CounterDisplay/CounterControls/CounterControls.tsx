import React, {FC} from 'react';
import {styled} from 'styled-components';
import {Button} from '../../UI/Button/Button';

type CounterControlsType = {
    increaseCounterValue: () => void
    resetCounterValue: () => void
}

export const CounterControls: FC<CounterControlsType> = ({increaseCounterValue, resetCounterValue}) => {
    return (
        <>
            <Controls>
                <Button title={'Increment'} callback={increaseCounterValue} />
                <Button title={'Reset'} callback={resetCounterValue} />
                <Button title={'Settings'} callback={() => console.log('Settings')} />
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