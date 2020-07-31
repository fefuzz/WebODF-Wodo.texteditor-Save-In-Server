/*
* Original snippet provided by user Getterac7 in the mailing list:
* https://open.nlnet.nl/pipermail/webodf/2014-July/000132.html
* I just modified his original version to fit my requirements
*/

var serverSaver = function(blob, filename) {
    // FormData lets us send a blob along with other metadata for saving.

    console.log('in serverSaver')

    var fd = new FormData();
    fd.append('name', filename);
    fd.append('data', blob);

    /*
    // POST data to our save script.
    $.ajax({
        type: 'POST',
        url: 'save.php',
        data: fd,
        processData: false,
        contentType: false,
        success: function(data) {
            // Success!
            alert('Saved! ' + data);
        },
        error: function(data) {
            // Failure.
            alert('We got a big error here.\n' + JSON.stringify(data));
        }
    });

     */
};