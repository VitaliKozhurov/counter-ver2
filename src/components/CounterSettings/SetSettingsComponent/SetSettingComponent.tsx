import React, {FC} from 'react';
import {styled} from 'styled-components';
import {Button} from '../../UI/Button/Button';

type SetSettingComponentType = {
    error: boolean
    changeSettingMode: () => void
}

export const SetSettingComponent: FC<SetSettingComponentType> = ({error, changeSettingMode}) => {
    const setAllSettings = () => {
        !error&&changeSettingMode()
    }
    return (
        <>
            <SetSettings>
                <Button title={'Set'} disabled={error} callback={setAllSettings} />
            </SetSettings>
        </>
    )
};

const SetSettings = styled.div`
  display: flex;
  justify-content: center;
  border: solid 3px #61dafb;
  border-radius: 10px;
  padding: 30px 20px;
`