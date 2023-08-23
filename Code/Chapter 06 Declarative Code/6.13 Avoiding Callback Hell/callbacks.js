var fs = require('fs');

var fileWithData = '/hello.world';  
fs.readFile(fileWithData, 'utf8', function(err, txt) {  
    if (err) return console.log(err);

    txt = txt + '\n' + 'Add Data!';
    fs.writeFile(fileWithData, txt, function(err) {
        if(err) return console.log(err);
        console.log('Information added');
    });
});