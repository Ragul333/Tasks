var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cc65430b435551566fca249e00acbc00', true)
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data)
}

// Send request
request.send()