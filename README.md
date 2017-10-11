# Helicopters
Rent helicopters or my attempt at learning MEAN stack. View [SAMPLE APP](https://secret-brook-41447.herokuapp.com/) on Heroku.

## Installation

Clone the repository
```bash
$ git clone https://github.com/miaerbus/helicopters.git
```

Move into the directory
```bash
$ cd helicopters
```

Install the dependencies
```bash
$ npm install
```

Start the server
```bash
$ npm start
```
The application should run on port 8888. In your browser, just go to [http://localhost:8888](http://localhost:8888).

Optionally, populate the database with mongoimport
```bash
$ mongoimport --db helicopter --collection helicopters --drop --file helicopters.js
```
