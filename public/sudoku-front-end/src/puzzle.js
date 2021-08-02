import React from 'react';
import request from 'superagent';
import { getPuzzle } from './localStorage';
import Row from './renderRow';

export default class Puzzle extends React.Component {
    state = {
        puzzle: [],
    }
    componentDidMount = async () => {
        this.newPuzzle();
    }

    // currentPuzzle = async e => {
    //     e.preventDefault();
    //     const { body } = await request
    //       .get('http://localhost:7890/api/v1/puzzle')
    //       const puzzle = [];
    //       puzzle[0] = body[0].row1.split(',');
    //       puzzle[1] = body[0].row2.split(',');
    //       puzzle[2] = body[0].row3.split(',');
    //       puzzle[3] = body[0].row4.split(',');
    //       puzzle[4] = body[0].row5.split(',');
    //       puzzle[5] = body[0].row6.split(',');
    //       puzzle[6] = body[0].row7.split(',');
    //       puzzle[7] = body[0].row8.split(',');
    //       puzzle[8] = body[0].row9.split(',');

    //       this.setState({ puzzle: puzzle})
    // }

    newPuzzle = async e => {
        e.preventDefault();
        const { body } = await request
          .post('http://localhost:7890/api/v1/puzzle')
          .send(0.5)
        const puzzle = [];
        puzzle[0] = body[0].row1.split(',');
        puzzle[1] = body[0].row2.split(',');
        puzzle[2] = body[0].row3.split(',');
        puzzle[3] = body[0].row4.split(',');
        puzzle[4] = body[0].row5.split(',');
        puzzle[5] = body[0].row6.split(',');
        puzzle[6] = body[0].row7.split(',');
        puzzle[7] = body[0].row8.split(',');
        puzzle[8] = body[0].row9.split(',');

        this.setState({ puzzle: puzzle})
    }

    render() {
        return (
            <div>
                {this.state.puzzle.map(row => <Row row={row}/>)}
            </div>
        )
    }
}