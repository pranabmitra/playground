var childProcess = require('child_process');
var cmd = "diff file.txt file2.txt";

var fs = require('fs');
var path = require( 'path' );

/* file compare: running shell command */
childProcess.exec(cmd, (error, stdout, stderr) => {
    console.log(stdout);
    if (stdout) {
        console.log('NOT MATCHED.');
    } else {
        console.log('MATCHED');
    }
});


// another approach: using fs method
var file1 = fs.readFileSync('file.txt', 'utf8');
var file2 = fs.readFileSync('file2.txt', 'utf8');

console.log(file1.trim() === file2.trim());


/*  check if file or directory exists */
console.log('If file exists:');
fs.stat('filed.txt', function(err, fileStat) {
    if (err) {
        console.log(err);
        if (err.code == 'ENOENT') {
            console.log('Does not exist.');
        }
    } else {
        if (fileStat.isFile()) {
            console.log('File found.');
        } else if (fileStat.isDirectory()) {
            console.log('Directory found.');
        }
    }
});

/* Reading file contents */
console.log('Reading file contents:');
fs.readFile('file.txt', 'utf8', function(err, fileContents) {
    if (err) throw err;
    console.log(fileContents)
});

/* Writing file  */
fs.writeFile('testfile.txt', 'Hello, ', function(err) {
    if (err) throw err;
})

/* Deleting file */
fs.unlink('testfile.txt', function (err) {
  if (err) throw err;
  console.log('Deletion sucessful.');
});

/* File stats */
// Statistics include file size, inode, uid, gid, timestamps
fs.stat('file.txt', function (err, stats) {
  if (err) throw err;
  console.log('stats: ' + JSON.stringify(stats));
});

/* Rename and move file */
fs.rename('file.txt', 'test.txt.bak', function (err) {
  if (err) throw err;
  console.log('Rename complete.');
});

fs.rename('file2.txt', './moved/asd.txt', function (err) {
  if (err) throw err;
  console.log('Move complete.');
});
