import express from "express";
import db from '../models/db';

const router = express.Router();

router.post("/show_tables", (req, res) => {
  let sql = 'show tables';
  db.query(sql, (err, results) => {
    if(err) {
      console.log(err);
      res.send(err.sqlMessage);
    };
    res.json({results});
  });
});

router.post("/create_table", (req, res) => {
  console.log('create_table');
  let sql = `CREATE TABLE ${req.body.nameTable} ( id INT )`;
  db.query(sql, (err, result) => {
    if(err) {
      console.log(err);
      res.send(err.sqlMessage);
    };
    res.send('Table created...');
  });
});

router.post("/save_row", (req, res) => {
  const arrRow = req.body.row.join("','");
  req.body.colName.join("','");
  let sql = 'INSERT INTO ' + req.body.activeTableName + ' ('  + req.body.colName +') VALUES (' + "'" + arrRow + "'" +')';
  db.query(sql, (err, result) => {
    if(err) {
      console.log(err)
      res.send(err.sqlMessage);
    };
  });
});

router.post('/get_row', (req, res) => {
  let sql = `SELECT * FROM ${req.body.activeTableName}`;
  db.query(sql, (err, results) => {
    if(err) {
      console.log(err)
      res.send(err.sqlMessage);
    };
    res.json({results});
  //     res.send('Posts fetched...');
  });
  console.log('get_row');
});

router.post('/delete_column', (req, res) => {
  let sql = `ALTER TABLE ${req.body.activeTableName} DROP ${req.body.colName}`;
  db.query(sql, (err, result) => {
    if(err) {
      console.log(err);
      res.send(err.sqlMessage);
    };
    console.log(result);
    res.send('Column deleted...');
  });
});

router.post('/change_col_title', (req, res) => {
  let sqlOne = `SHOW COLUMNS FROM ${req.body.activeTableName} WHERE Field LIKE '${req.body.lastTitle}'`;
  db.query(sqlOne, (err, result) => {
    if(err) {
      console.log(err);
      res.send(err.sqlMessage);
    };
    let sqlTwo = `ALTER TABLE ${req.body.activeTableName} CHANGE ${req.body.lastTitle} ${req.body.newTitle} ${result[0].Type}`;
    res.send('Name changed...');
    db.query(sqlTwo, (err, result) => {
      if(err) {
        console.log(err);
        res.send(err.sqlMessage);
      };
    });
  });
});

router.post('/update_row', (req, res) => {
  console.log('update_row', req.body);
  let sql = `UPDATE ${req.body.activeTableName} SET ${req.body.key} = '${req.body.val}' WHERE id = ${req.body.id}`;
  db.query(sql, (err, result) => {
    if(err) {
      console.log(err);
      res.send(err.sqlMessage);
    };
    res.send('Post updated...');
  });
});

router.post('/delete_row', (req, res) => {
  let sql = `DELETE FROM ${req.body.activeTableName} WHERE posts.id = ${req.body.id}`;
  db.query(sql, (err, result) => {
    if(err) {
      console.log(err)
      res.send(err.sqlMessage);
    };
    console.log(result);
    res.send('Post deleted...');
  });
  console.log('delete_row');
});

router.post("/create_column", (req, res) => {
  console.log(req.body);
  let sql = `ALTER TABLE ${req.body.activeTableName} ADD ${req.body.newColName} VARCHAR(255) NOT NULL AFTER ${req.body.lastName}`;
  db.query(sql, (err, result) => {
    if(err) {
      console.log(err)
      res.send(err.sqlMessage);
    };
    res.send('column created...');
  });
  console.log('create_column');
});


export default router;
