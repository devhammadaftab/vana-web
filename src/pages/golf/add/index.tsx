import React, { useState } from 'react'
import { Input, Button, Row } from 'reactstrap'
import { addScore, setLoader } from 'store/actions';
import { useStore } from 'store/index'

interface Props { }

const Add: React.FC<Props> = () => {

    const { state, dispatch } = useStore();
    const [score, setScore] = useState(0);

    const onScore = (e: any) => {
        setScore(e.target.value);
    }

    const onAdd = async () => {
        dispatch(setLoader(true));
        dispatch(await addScore({ name: state.id, score }));
        dispatch(setLoader(false));
    }

    return (
        <div className="score-input-container">
            <Input disabled={state.loader} className="score-input" type="number" onChange={onScore} />
            <Button
                className="score-add-button"
                disabled={!score || state.loader}
                onClick={onAdd}
            >
                +
            </Button>
        </div>
    )
}

export default Add