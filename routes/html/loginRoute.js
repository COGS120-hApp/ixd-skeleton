exports.view = (req, res) => {
    var path = require('path');
    let fs = require('fs');
    
    let file = fs.readFileSync(path.join(__dirname, "..", "..", '/public/handlebars/login.handlebars'), "utf8");
    //console.log(file);
    res.status(200).json({
        payload : file
    });
}