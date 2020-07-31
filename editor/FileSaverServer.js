/*
* Original snippet provided by user Getterac7 in the mailing list:
* https://open.nlnet.nl/pipermail/webodf/2014-July/000132.html
* I just modified his original version to fit my requirements
*/


//change the api endpoint url with the one you are using
let apiEndpoint = 'localhost:9001/filesaver'

var serverSaver = function(blob, filename) {
    // FormData lets us send a blob along with other metadata for saving.

    console.log('in serverSaver')

    var fd = new FormData();
    fd.append('filename', filename);
    fd.append('filedata', blob);

    
    // POST data to our save script.
    $.ajax({
        type: 'POST',
        url: apiEndpoint,
        data: fd,
        processData: false,
        contentType: false,
        success: function(data) {
            // Success!
            alert(data.status);
        },
        error: function(data) {
            // Failure.
            alert('We got a big error here.\n' + JSON.stringify(data));
        }
    });
};