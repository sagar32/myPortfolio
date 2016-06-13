var express = require('express'),
        app = express();
var port=process.env.PORT||3000;

app.use(express.static(__dirname));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
});

app.listen(port);
console.log("server listen at:"+port);
