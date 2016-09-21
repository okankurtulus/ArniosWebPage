/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var textract = require('textract');

module.exports = {
	hi: function (req, res) {
    	return res.send('Hi there!');
  	},
  	upload: function(req, res) {

      req.file('fileToUpload').upload({
          // don't allow the total upload size to exceed ~10MB
          maxBytes: 10000000
      },function whenDone(err, uploadedFiles) {
          if (err) {
            return res.negotiate(err);
          }

          // If no files were uploaded, respond with an error.
          if (uploadedFiles.length === 0){
            return res.badRequest('No file was uploaded');
          } else {

            var filePath = uploadedFiles[0].fd;
            textract.fromFileWithPath(filePath, function( error, text ) {
                if(error) {
                  return res.negotiate(err);
                } else {
                  sails.log.info("textract completed.");


                  FileContent.create({text:text}).exec(function (err, fileContent){
                    if (err) { return res.negotiate(err); }

                    sails.log('FileContent\'s id is:', fileContent.id);
                    return res.send(text);
                  });

                }
            });
          }
      });

    }
};

