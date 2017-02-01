<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Hello HTTP
======

## Directions

* Use the Node.js `http` module to create an http server. 
* responds with a greeting if the method is GET and url (path) is `/greeting/<name>`
  * If query string specifies `salutation` use that for the greeting salutation, otherwise `hello`
  * If name is not included, use "stranger", otherwise use name in greeting
* responds with an interesting fact about http (up to you) if the method is GET and the url (path) is `/fact`
* Any other request should return status code 404 Not Found and include the text: `CANNOT <verb> <path>`
* Add a `README.md` that describes how to use your API 

## Testing
* Use chai-http to test the API.

## Bonus

Feel free to add a library like `cowsay` or `figlet` to enhance your response if supplied as `?format=cowsay` query. :) 
No test necessary

## Rubric

* HTTP Path: 3pts
* HTTP Verb: 1pts
* 404: 1pt
* Query Handling: 2pts
* Test Design and Setup: 3pts
