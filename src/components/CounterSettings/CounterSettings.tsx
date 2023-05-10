import React from 'react';
import {Controls} from './Controls/Controls';
import {SetSettingComponent} from './SetSettingsComponent/SetSettingComponent';

export const CounterSettings = () => {
    return (
        <div className={'display'}>
            <Controls/>
            <SetSettingComponent/>
        </div>
    )
};