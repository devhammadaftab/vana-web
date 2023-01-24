import React from "react";
import { Card, CardBody, Label, Row, Spinner } from "reactstrap";
import { useStore } from "store/index";

interface Props { }

const GolfCard: React.FC<Props> = () => {

    const { state } = useStore();

    return (<Card className="golf-card">
        {!state.loader ? <>
            <Label>
                <b>Name:</b> {state.id}
            </Label>
            <Label>
                <b>Average:</b> {String(state.average)}
            </Label>
            <Label>
                <b>Handicap:</b> {String(state.handicap)}
            </Label>
            <Label>
                <b>Scores:</b> {state.scores.join(", ")}
            </Label>
            <Label>
                <b>Scores Count:</b> {state.scores.length}
            </Label>
        </> :
        <div className="spinner-container">
            <Spinner />
        </div>}
    </Card>)
}

export default GolfCard;