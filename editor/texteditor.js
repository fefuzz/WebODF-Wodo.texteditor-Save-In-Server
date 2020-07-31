


function createEditor() {
    // begin: check for being served by a webserver
    // just done to catch a mistake sometimes done by people testing Wodo.TextEditor
    // who might have missed this requirement before
    var href = window.location.href;
    if (! /^http(s)?:/.test(href)) {
        alert("texteditor.html must be served by a webserver.");
        return;
    }
    // end: check for being served by a webserver

    var editor, loadedFilename;


    function saveInServer() {
        function saveByteArrayLocally(err, data) {
            if (err) {
                alert(err);
                return;
            }
            // TODO: odfcontainer should have a property mimetype
            var mimetype = "application/vnd.oasis.opendocument.text",
                filename = loadedFilename || "doc.odt",
                blob = new Blob([data.buffer], {type: mimetype});


            console.log(blob);

            var file = new File([blob], filename,{type:mimetype, lastModified:new Date()})

            console.log(file);

            serverSaver(blob, filename);

            editor.setDocumentModified(false);
        }

        editor.getDocumentAsByteArray(saveByteArrayLocally);
    }



    var editorOptions = {
        userData: {
            fullName: "Tim Lee",
            color:    "blue"
        },
        saveCallback: saveInServer,
        annotationsEnabled: true
    };


    function onEditorCreated(err, e) {
        if (err) {
            // something failed unexpectedly, deal with it (here just a simple alert)
            alert(err);
            return;
        }
        editor = e;
        editor.openDocumentFromUrl("welcome.odt", function(err) {
            if (err) {
                // something failed unexpectedly, deal with it (here just a simple alert)
                alert("There was an error on opening the document: " + err);
            }
        });
        //todo: change static filename with dinamic one
        loadedFilename = "welcome.odt";

    }
    Wodo.createTextEditor('editorContainer', editorOptions, onEditorCreated);
}