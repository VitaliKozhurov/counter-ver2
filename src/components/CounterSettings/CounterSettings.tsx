import React, {FC, useState} from 'react';
import {Controls} from './Controls/Controls';
import {SetSettingComponent} from './SetSettingsComponent/SetSettingComponent';

type CounterSettingsType = {
    minCounterValue: number
    maxCounterValue: number
    changeSettingMode: () => void
    changeMinCounterValue: (value: number) => void
    changeMaxCounterValue: (value: number) => void
}

export const CounterSettings: FC<CounterSettingsType> = ({changeSettingMode, ...restProps}) => {
    const [error, setError] = useState<boolean>(false);
    const setSettingsError = (value:boolean) => {
        setError(value)
    }

    return (
        <div className={'display'}>
            <Controls {...restProps} setSettingsError={setSettingsError} />
            <SetSettingComponent
                changeSettingMode={changeSettingMode}
                error={error} />
        </div>
    )
};