import pool from '../utils/pool.js';

class UnsolvedPuzzle {
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

    static async insertUnsolved(row1) {
      const { rows } = await pool.query(
        'INSERT INTO unsolvedPuzzle (row1, row2, row3, row4, row5, row6, row7, row8, row9) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [row1[0].toString(), row1[1].toString(), row1[2].toString(), row1[3].toString(), row1[4].toString(), row1[5].toString(), row1[6].toString(), row1[7].toString(), row1[8].toString()]
      );
      return new UnsolvedPuzzle(rows[0]);
    }

    static async getById(id) {
      const { rows } = await pool.query('SELECT * FROM unsolvedpuzzle WHERE id=$1', [id]);
  
      return new UnsolvedPuzzle(rows[0]);
    }
    
    static async getAll() {
      const { rows } = await pool.query('SELECT * from unsolvedpuzzle');
  
      return rows.map((row) => new UnsolvedPuzzle(row));
    }

    static async updateById(id, { row1 }) {
      const currentLogs = await UnsolvedPuzzle.getById(id);
      const newRow1 = row1[0].toString() ?? currentLogs.row1;
      const newRow2 = row1[1].toString() ?? currentLogs.row2;
      const newRow3 = row1[2].toString() ?? currentLogs.row3;
      const newRow4 = row1[3].toString() ?? currentLogs.row4;
      const newRow5 = row1[4].toString() ?? currentLogs.row5;
      const newRow6 = row1[5].toString() ?? currentLogs.row6;
      const newRow7 = row1[6].toString() ?? currentLogs.row7;
      const newRow8 = row1[7].toString() ?? currentLogs.row8;
      const newRow9 = row1[8].toString() ?? currentLogs.row9;
  
      const { rows } = await pool.query('UPDATE unsolvedpuzzle SET row1=$1, row2=$2 row3=$3, row4=$4, row5=$5, row6=$6, row7=$7, row8=$8, row9=$9, WHERE id=$10 RETURNING *', [newRow1, newRow2, newRow3, newRow4, newRow5, newRow6, newRow7, newRow8, newRow9, id]);
      
      return (rows[0]);
    }
    
    static async deleteById(id) {
      const { rows } = await pool.query('DELETE FROM unsolvedpuzzle WHERE id=$1 RETURNING *', [id]);
  
      return  new UnsolvedPuzzle(rows[0]);
    }
}

export default UnsolvedPuzzle;
