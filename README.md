# A modified version of Wodoo TextEditor.

## Description:

**The texteditor.html file permit to save document in the server by calling a nodejs api that perform the saving.**

* The editor folder contain the entire modified version of Wodoo TextEditor.

* The saver_api folder contain the nodejs api endpoint which make use of expressjs and multer to save file in a specified directory.

## How to | Front-End:

The front-end module make use of **cross-origin HTTP request** to make the requests to the back-end as well as the original Wodoo Text Editor.
To make sure it works well in your browser, consider to use a web server to run the front-end module.

## How to | Back-End:

The back-end service implemented is intended as a simple (but fully working) example made by node-js, in particular with the use of ExpressJs module for the HTTP Rest Endpoint to serve the front-end requests and Multer module to receive Form-Data and save the file.

To run the back-end, **first change the upload folder in which you want to save the file with one of your choice** (or create the default *'uploads'* folder in the saver_api directory), then run:

**npm start**

in the saver_api folder
