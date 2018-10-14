import express from "express";
import db from '../models/db';

const router = express.Router();


router.post("/create_database", (req, res) => {
  console.log('create_database');
  let sql = 'CREATE DATABASE node';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

router.post("/save_row", (req, res) => {
  console.log('save_row', req.body.colName);
  const arrRow = req.body.row.join("','");
  const arrCol = req.body.colName.join("','");
  let sql = 'INSERT INTO posts ('  + req.body.colName +') VALUES (' + "'" + arrRow + "'" +')';
  db.query(sql, (err, result) => {
    console.log('result', err);
    res.send(err.sqlMessage);
    if(err) throw err;
  });
});

router.post("/create_table", (req, res) => {
  console.log('create_table');
  // let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
  //   db.query(sql, (err, result) => {
  //       if(err) throw err;
  //       console.log(result);
  //       res.send('Database created...');
  //   });
  console.log('create_table');
});

router.get('/add_row', (req, res) => {
  // let post = {title:'Post One', body:'This is post number one'};
  // let sql = 'INSERT INTO posts SET ?';
  // let query = db.query(sql, post, (err, result) => {
  //     if(err) throw err;
  //     console.log(result);
  //     res.send('Post 1 added...');
  // });
  console.log('add_row');
});

// Select posts
router.post('/get_row', (req, res) => {
  let sql = 'SELECT * FROM posts';
  db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.json({results});
  //     res.send('Posts fetched...');
  });
  console.log('get_row');
});

// Select single post
router.post('/get_rows', (req, res) => {
  // let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  // let query = db.query(sql, (err, result) => {
  //     if(err) throw err;
  //     console.log(result);
  //     res.send('Post fetched...');
  // });
  console.log('get_rows');
});

// Update post
router.post('/update_row', (req, res) => {
  // let newTitle = 'Updated Title';
  // let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  // let query = db.query(sql, (err, result) => {
  //     if(err) throw err;
  //     console.log(result);
  //     res.send('Post updated...');
  // });
  console.log('update_row');
});

// Delete post
router.post('/delete_row', (req, res) => {
  let newTitle = 'Updated Title';
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Post deleted...');
  });
  console.log('delete_row');
});

router.post("/create_row", (req, res) => {
  // let sql = `INSERT INTO posts (id, title, body, dwsa, vdvrv) VALUES (NULL, NULL, NULL, '', '')`;
  // db.query(sql, (err, result) => {
  //   if(err) throw err;
  //   // console.log(result);
  //   res.send('row created...');
  // });
  console.log('create_row');
});

router.post("/create_column", (req, res) => {
  console.log(req.body);

  // let sql = `ALTER TABLE posts ADD ${req.body.name} INT NOT NULL AFTER body`;
  // db.query(sql, (err, result) => {
  //   if(err) throw err;
  //   // console.log(result);
  //   res.json({ test: 'test'});
  //   res.send('column created...');
  // });
  console.log('create_column');
});


export default router;
