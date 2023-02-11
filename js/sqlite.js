const initSqlJs = window.initSqlJs

const SQL = initSqlJs({
  locateFile: file => `./dist/sql-wasm.js`
});
const db = new SQL.Database();

let sqlstr = "CREATE TABLE websites (uid int, title str, url str, desc str, img str, tags str)\
INSERT INTO websites VALUES (12345,'Youtube','https://youtube.com','this is a description','./images/flower.jpg','video, learning')"
// UID, Title, URL, Desc, Img, Tags
db.run(sqlstr)

db.exec("SELECT * FROM websites")
console.log(db)
