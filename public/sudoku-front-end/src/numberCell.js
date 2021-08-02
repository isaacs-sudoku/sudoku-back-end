import React from 'react';

export default class NumberCell extends React.Component {
    componentDidMount = async () => {}

    render() {
        return (
            <input className='numberCell'>{this.props.value}</input>
        )
    }
}