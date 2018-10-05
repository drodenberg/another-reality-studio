var express           = require('express'),
    app               = express(),
    compression = require('compression'),
    expressStaticGzip = require("express-static-gzip");


    var port = process.env.PORT || 8080; 

// app.use((req, res, next) => {
//   res.setHeader("Content-Encoding", "gzip");
//   next();
// });

//app.use(compression())
//app.use("/test", expressStaticGzip(__dirname + "/utils/"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/test', function (req, res) {
  //res.set({ "Content-Encoding": "gzip" })
  res.sendFile(__dirname + '/views/ARSsite-HTML5-Shipping.html');
});


// Compressed Files
// app.use("/ARSsite.data.jsgz", express.static(__dirname + "/utils/ARSsite.data.jsgz"));
// app.use("/Utility.jsgz", express.static(__dirname + "/utils/Utility.jsgz"));
// app.use("/ARSsite-HTML5-Shipping.wasmgz", express.static(__dirname + "/utils/ARSsite-HTML5-Shipping.wasmgz"));
// app.use("/ARSsite.datagz", express.static(__dirname + "/utils/ARSsite.datagz"));
// app.use("/ARSsite-HTML5-Shipping.js.symbolsgz", express.static(__dirname + "/utils/ARSsite-HTML5-Shipping.js.symbolsgz"));
// app.use("/ARSsite-HTML5-Shipping.jsgz", express.static(__dirname + "/utils/ARSsite-HTML5-Shipping.jsgz"));

// Pure JS Files
app.use("/ARSsite-HTML5-shipping.js", express.static(__dirname + "/JSutils/ARSsite-HTML5-Shipping.js"));
app.use("/ARSsite-HTML5-shipping.js.symbols", express.static(__dirname + "/JSutils/ARSsite-HTML5-Shipping.js.symbols"));
app.use("/ARSsite-HTML5-Shipping.wasm", express.static(__dirname + "/JSutils/ARSsite-HTML5-Shipping.wasm"));
app.use("/ARSsite.data.js", express.static(__dirname + "/JSutils/ARSsite.data.js"));
app.use("/ARSsite.data", express.static(__dirname + "/JSutils/ARSsite.data.js"));
app.use("/Utility.js", express.static(__dirname + "/JSutils/Utility.js"));

  


var port = 8080

app.listen(port, function () {
  console.log('Listening on port: ' + port)

  console.log(__dirname + "/JSutils/ARSsite-HTML5-Shipping.wasm");
  
});