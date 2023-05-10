import React from 'react';
import {styled} from 'styled-components';

export const CounterController = () => {
    return (
        <>
            <ControllerWrapper>
                <ControllerTitle />
                <ControllerInput type={'number'}/>
            </ControllerWrapper>
        </>
    )
};

const ControllerWrapper = styled.div`

`
const ControllerTitle = styled.span`

`
const ControllerInput = styled.input`
`