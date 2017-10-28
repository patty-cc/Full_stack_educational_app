var requestHelper = {
  getRequest: function ( url, callback ) {
    var xhr = new XMLHttpRequest()
    xhr.open( 'Get', url )
    xhr.addEventListener( 'load', function() {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })
    xhr.send()
  }
}


module.exports = requestHelper
