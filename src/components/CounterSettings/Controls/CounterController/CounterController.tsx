import React, {ChangeEvent, FC} from 'react';
import {styled} from 'styled-components';

type CounterControllerType = {
    title: string
    value: number
    error: boolean
    changeSettingValue: (e: ChangeEvent<HTMLInputElement>) => void
   }

export const CounterController: FC<CounterControllerType> = ({title, value, error, changeSettingValue}) => {
    return (
        <>
            <ControllerWrapper>
                <ControllerTitle>{title}</ControllerTitle>
                <ControllerInput type={'number'} value={value} error={error.toString()} onChange={changeSettingValue}/>
            </ControllerWrapper>
        </>
    )
};

const ControllerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const ControllerTitle = styled.span`
  color: #61dafb;
  font-size: 24px;
  font-weight: 700;
`
const ControllerInput = styled.input<{ error: string }>`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  background-color: ${props => props.error === 'true' ? '#cc6a63' : 'white'};
`