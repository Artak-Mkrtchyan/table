import express from "express";
import db from '../models/db';

const router = express.Router();

router.post("/show_tables", (req, res) => {
  const sql = 'show tables';
  db.query(sql, (err, results) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    res.json({results});
  });
});

router.post("/create_table", (req, res) => {
  const sql = `CREATE TABLE ${req.body.nameTable} ( id INT )`;
  db.query(sql, (err, result) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    res.send('Table created...');
  });
});

router.post("/save_row", (req, res) => {
  if (req.body.row.length === 1) {
    var arrRow = req.body.row;
  } else {
    var arrRow = req.body.row.join("','");
    req.body.colName.join("','");
  }
  // eslint-disable-next-line block-scoped-var
  const sql = `INSERT INTO ${req.body.activeTableName} (${req.body.colName}) VALUES ('${arrRow}')`;
  db.query(sql, (err, result) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    res.send('Row saved...');
  });
});

router.post('/get_row', (req, res) => {
  const sql = `SELECT * FROM ${req.body.activeTableName}`;
  db.query(sql, (err, results) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    res.json({results});
  });
});

router.post('/delete_column', (req, res) => {
  const sql = `ALTER TABLE ${req.body.activeTableName} DROP ${req.body.colName}`;
  db.query(sql, (err, result) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    res.send('Column deleted...');
  });
});

router.post('/change_col_title', (req, res) => {
  const sqlOne = `SHOW COLUMNS FROM ${req.body.activeTableName} WHERE Field LIKE '${req.body.lastTitle}'`;
  db.query(sqlOne, (err, result) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    const sqlTwo = `ALTER TABLE ${req.body.activeTableName} CHANGE ${req.body.lastTitle} ${req.body.newTitle} ${result[0].Type}`;
    res.send('Name changed...');
    db.query(sqlTwo, (error, results) => {
      if(error) {
        res.send(err.sqlMessage);
      };
    });
    res.send('Column changed...');
  });
});

router.post('/update_row', (req, res) => {
  const sql = `UPDATE ${req.body.activeTableName} SET ${req.body.key} = '${req.body.val}' WHERE id = ${req.body.id}`;
  db.query(sql, (err, result) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    res.send('Row updated...');
  });
});

router.post('/delete_row', (req, res) => {
  const sql = `DELETE FROM ${req.body.activeTableName} WHERE ${req.body.activeTableName}.id = ${req.body.id}`;
  db.query(sql, (err, result) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    res.send('Row deleted...');
  });
});

router.post("/create_column", (req, res) => {
  const sql = `ALTER TABLE ${req.body.TableName} ADD ${req.body.newColName} VARCHAR(255) NOT NULL AFTER ${req.body.lastName}`;
  db.query(sql, (err, result) => {
    if(err) {
      res.send(err.sqlMessage);
    };
    res.send('Column created...');
  });
});


export default router;
