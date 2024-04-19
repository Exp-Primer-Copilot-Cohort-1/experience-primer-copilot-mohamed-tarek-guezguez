// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000);
console.log('Server is running on http://localhost:3000');

// Path: comments.html
// Create a form
// Create a form in comments.html that has a textarea and a submit button. The textarea should have the name attribute set to "comment" and the form should have the action attribute set to "/comment" with the method attribute set to "POST".

<!DOCTYPE html>
<html>
<head>
  <title>Comments</title>
</head>
<body>
  <form action="/comment" method="POST">
    <textarea name="comment"></textarea>
    <button type="submit">Submit</button>
  </form>
</body>
</html>

// Path: comments.js
// Handle form submission
// Modify the server so that it can handle form submissions. When a POST request is made to "/comment", read the comment from the request body and log it to the console.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/comment') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const comment = body.split('=')[1];
      console.log(comment);
      res.end();
    });
  } else {
    fs.readFile('./comments.html', (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000);
console.log('Server is running on http://localhost:3000');

// Path: comments.html
// Display comments
// Modify the server so that it can display comments. Create a comments array to store comments and display them in the comments.html file. The comments should be displayed below the form.

<!DOCTYPE html>
<html>
<head>
  <title>Comments</title>
</head>
<body>