import { golf } from 'endpoints/index';
import React, { useState } from 'react'
import AsyncSelect from 'react-select/async'
import { Row, Col, Input, Button } from 'reactstrap'
import { addScore, reset, setGolf, setLoader, setName } from 'store/actions';
import { useStore } from 'store/index';

interface Props { }

const Search: React.FC<Props> = () => {

    const { dispatch } = useStore();
    const [value, setValue] = useState<String>("");

    const loadOptions = (
        inputValue: String,
        callback: (options: any) => void
    ) => {
        if (inputValue) {
            setValue(inputValue);
            golf.getIds(inputValue)
                .then(async (response) => {
                    response = response.map((value: any) => {
                        return {
                            value,
                            label: value
                        }
                    })
                    if(!response.length) {
                        response = [{
                            value: inputValue,
                            label: inputValue
                        }];
                        setValue("");
                    }
                    callback(response);
                })
                .catch((error) => console.log(error))
        }
    };

    const onAsyncSelect = async (selected: any) => {
        dispatch(reset());
        if(value !==  "") {
            dispatch(setLoader(true));
            dispatch(await setGolf(selected.value));
            dispatch(setLoader(false));
        }
        else {
            dispatch(setName(selected.value));
        }
    }

    return (
        <AsyncSelect
            cacheOptions
            className='asyncselect'
            loadOptions={loadOptions}
            onChange={onAsyncSelect}
        />
    )
}

export default Search;