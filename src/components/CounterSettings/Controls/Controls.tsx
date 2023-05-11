import React, {ChangeEvent, FC, useState} from 'react';
import {styled} from 'styled-components';
import {CounterController} from './CounterController/CounterController';

type ControlsType = {
    minCounterValue: number
    maxCounterValue: number
    changeMinCounterValue: (value: number) => void
    changeMaxCounterValue: (value: number) => void
    setSettingsError: (value: boolean) => void
}

export const Controls: FC<ControlsType> = ({
                                               minCounterValue,
                                               maxCounterValue,
                                               changeMinCounterValue,
                                               changeMaxCounterValue,
                                               setSettingsError
                                           }) => {
    const [minValueError, setMinValueError] = useState<boolean>(false);
    const [maxValueError, setMaxValueError] = useState<boolean>(false);

    const changeMaxSettingValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        if (value <= 0 || value <= minCounterValue && !maxValueError) {
            setMaxValueError(true);
            setMinValueError(true);
            setSettingsError(true);
        }
        if (value > minCounterValue && value > 0 && maxValueError) {
            setMaxValueError(false);
            minCounterValue >= 0 && setMinValueError(false);
            minCounterValue >= 0 && setSettingsError(false);
        }
        changeMaxCounterValue(value);
    }

    const changeMinSettingValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        if ((value < 0 || value >= maxCounterValue) && !minValueError) {
            setMinValueError(true);
            value >= maxCounterValue&& setMaxValueError(true);
            setSettingsError(true);
        }
        if (value >= 0 && value < maxCounterValue && minValueError) {
            setMinValueError(false);
            setMaxValueError(false);
            setSettingsError(false);
        }
        changeMinCounterValue(value);
    }

    return (
        <>
            <SettingsControls>
                <CounterController
                    title={'Max value :'}
                    value={maxCounterValue}
                    error={maxValueError}
                    changeSettingValue={changeMaxSettingValue}
                />
                <CounterController
                    title={'Min value :'}
                    value={minCounterValue}
                    error={minValueError}
                    changeSettingValue={changeMinSettingValue}
                />
            </SettingsControls>
        </>
    )
};

const SettingsControls = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 3px #61dafb;
  border-radius: 10px;
  padding: 33px 20px;

  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`