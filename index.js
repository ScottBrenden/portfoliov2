'use strict';

// const express = require('express')
// const morgan = require('morgan')
//
// const app = express()
//
// app.use(morgan('common'))
// app.use(express.static(`${__dirname}/build`))
// app.get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`))
//
// app.listen(process.env.PORT, () => {
//   console.log('Server runnint on port: ', process.env.PORT)
// })

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('.'));

app.get('*', function(request, response){
  response.sendFile('/src/index.html', {root: '.'});
});

app.listen(PORT, function(){
  console.log(`on PORT localhost:${PORT}`);
});
