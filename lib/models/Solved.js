import pool from '../utils/pool.js';

class SolvedPuzzle {
    id;
    row1;
    row2;
    row3;
    row4;
    row5;
    row6;
    row7;
    row8;
    row9;
    
    constructor(puzzle) {
      this.id = puzzle.id;
      this.row1 = puzzle.row1;
      this.row2 = puzzle.row2;
      this.row3 = puzzle.row3;
      this.row4 = puzzle.row4;
      this.row5 = puzzle.row5;
      this.row6 = puzzle.row6;
      this.row7 = puzzle.row7;
      this.row8 = puzzle.row8;
      this.row9 = puzzle.row9;
    }

    static async insertSolved(row1) {
      const { rows } = await pool.query(
        'INSERT INTO solvedPuzzle (row1, row2, row3, row4, row5, row6, row7, row8, row9) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [row1[0].toString(), row1[1].toString(), row1[2].toString(), row1[3].toString(), row1[4].toString(), row1[5].toString(), row1[6].toString(), row1[7].toString(), row1[8].toString()]
      );
      return new SolvedPuzzle(rows[0]);
    }
}

export default SolvedPuzzle;
