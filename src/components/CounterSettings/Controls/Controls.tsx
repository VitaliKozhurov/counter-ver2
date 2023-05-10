import React from 'react';
import {styled} from 'styled-components';
import {CounterController} from './CounterController/CounterController';

export const Controls = () => {
    return (
        <>
            <SettingsControls>
                <CounterController/>
                <CounterController/>
            </SettingsControls>
        </>
    )
};

const SettingsControls = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 3px #61dafb;
  border-radius: 10px;
  padding: 30px 20px;
`