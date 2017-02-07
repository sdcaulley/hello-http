### HTTP Server Greeting

To start the server, type the following into the command line:


`node server.js`


In your browser, you can type the following to get the corresponding greeting:

## Hello <name>
# localhost:3000/greeting/<name>
`hello <name>`
# Example
`localhost:3000/greeting/claire`
`hello Claire`

## Hello stranger
# localhost:3000/greeting
`hello stranger`
# Example
`localhost:3000/greeting`
`hello stranger`

## <Salutation> stranger
# localhost:3000/greeting/salutation=<salutation>
`<salutation> stranger`
# Example
`localhost:3000/greeting/salutation=welcome`
`welcome stranger`

## <Salutation> <Name>
# localhost:3000/greeting/<name>/salutation=<salutation>
`<salutation> <name>`
# Example
`localhost:3000/greeting/claire/salutation=hola`
`hola claire`

You can also type the following to get an interesting fact about HTTP:

## Fact about HTTP
# localhost:3000/fact
`a more secure version of http is called http, it encrypts all of the information it sends and receives`