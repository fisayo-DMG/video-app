const imgur = require('imgur');
const fs = require('fs');
const concat = require('concat-stream');

function setupImgurStorage(opts = {}) {
  if(!opts.clientId) throw new Error('Missing client id');
  imgur.setClientId(opts.clientId);
  imgur.setAPIUrl('https://api.imgur.com/3/')

  function _handleFile(req, file, cb) {
    file.stream.pipe(concat((data) => {
      imgur.uploadFile(data)
        .then((json) => {
          cb(null, json)
        })
        .catch(cb)
    }))
  }

  function _removeFile(req, file, cb) {}

  return {_handleFile, _removeFile}
    
}

module.exports = function(opts) {
  return setupImgurStorage(opts)
}