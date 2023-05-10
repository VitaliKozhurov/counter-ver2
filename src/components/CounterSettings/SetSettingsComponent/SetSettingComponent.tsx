import React from 'react';
import {styled} from 'styled-components';
import {Button} from '../../UI/Button/Button';

export const SetSettingComponent = () => {
    return (
        <>
            <SetSettings>
                <Button title={'Set'} callback={()=>console.log(1)}/>
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