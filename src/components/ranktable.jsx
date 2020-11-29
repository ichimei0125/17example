import React, {forwardRef, createRef} from 'react';

import Number from './number'
import {RowStyle, AppStyle, PointStyle, PicStyle, NoStyle} from '../style/style'
import MoveableRow from './moveablerow'

var movement = {
    UP: 1,
    DOWN: -1,
    NOCHANGE: 0,
};

const Row = forwardRef((props, ref) => (
        <RowStyle ref={ref} key={props.no}>
            <NoStyle>
                {props.no}
            </NoStyle>
            <div>
                <PicStyle src={props.data.picture} height="36px" width="36px" alt='user pic' />
            </div>
            <div>
                {props.data.displayName}
            </div>
            <PointStyle>
                <Number number={props.data.score} />
            </PointStyle>
        </RowStyle>
));

export default class RankTable extends React.Component {

    render() {
        const rows = this.props.data.map((d, index) => {
            let moveDirection = movement.NOCHANGE; 
            let prevIndex = this.props.prevOrder[d.userID];
            if (prevIndex > index) { moveDirection = movement.DOWN};
            if (prevIndex < index) { moveDirection = movement.UP};

            // TODO: get border rect of element, inside of use hard code
            const moveLength = 48 * moveDirection; // row height 48 is defined by style.js

            return <Row ref={createRef()} data={d} no={index+1} m={moveLength} />
        });

        return (
            <AppStyle>
                <MoveableRow>
                    {rows}
                </MoveableRow>
            </AppStyle>
        );
    }
}