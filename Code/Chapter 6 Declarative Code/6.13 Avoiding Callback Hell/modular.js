var fs = require('fs');

function logTextWasAdded(err) {  
    if(err) return console.log(err);
    console.log('Information added');
};

function addData(error, actualText) {  
    if (error) return console.log(error);

    actualText = actualText + '\n' + 'Add data';
    fs.writeFile(fileWithData, actualText, logTextWasAdded);
}

var fileWithData = 'hello.world';  
fs.readFile(fileWithData, 'utf8', addData);  