import React, { useState } from "react";
import pointsStyle from "./main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faRedo,faTrash } from "@fortawesome/free-solid-svg-icons";

interface PointProps {
    x: number, y: number
}

export default function Points() {
    const [points, setPoints] = useState<PointProps[]>([]);
    const [actionList, setActionList] = useState<PointProps[]>([]);

    const undo = () => {
        const pointCopy = [...points]
        const lastPoint = pointCopy.pop();

        if (!lastPoint) return;
        setPoints(pointCopy);

        setActionList([...actionList, lastPoint])
    }

    const redo = () => {
        const actionCopy = [...actionList];
        const lastUndo = actionCopy.pop();

        if (!lastUndo) return;

        setPoints([...points, lastUndo]);
        setActionList(actionCopy);
    }

    function clearPoints() {
        setPoints([]);
        setActionList([]);
    }

    function addPoint(ev: React.MouseEvent) {
        const { clientX, clientY } = ev;
        const newPoint = { x: clientX, y: clientY };

        if (actionList.length > 0) setActionList([])
        setPoints([...points, newPoint]);
    };

    return (
        <div className={pointsStyle.container}>
            <button disabled={(points.length > 0 ? false : true)} className={pointsStyle.tools__btn} onClick={() => undo()}>
                <FontAwesomeIcon icon={faUndo}/>
            </button>

            <button className={pointsStyle.tools__btn} onClick={() => clearPoints()}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>

            <button disabled={(actionList.length > 0 ? false : true)} className={pointsStyle.tools__btn} onClick={() => redo()}>
                <FontAwesomeIcon icon={faRedo}/>
            </button>

            <div className={pointsStyle.board} onClick={addPoint}>
                {points.map((point, i) => {
                    return <Point x={point.x} y={point.y} key={i} />
                })}
            </div>
        </div>
    )
}

function Point(props: { x: number, y: number }) {
    return (
        <div className={pointsStyle.point}
            style={{ left: `${props.x}px`, top: `${props.y}px` }}>
        </div>
    )
}