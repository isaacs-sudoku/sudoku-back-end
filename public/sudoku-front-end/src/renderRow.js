import React from 'react';
import NumberCell from './numberCell';

export default class Row extends React.Component {
    state = {
        row: this.props.row,
    }
    componentDidMount = async () => {}

    render() {
        return (
            <div className='row'>
                {this.props.row.map(number => <NumberCell value={number} />)}
            </div>
        )
    }
}