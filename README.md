# Group A Back End
[![Build Status](https://app.travis-ci.com/1Announce/Group-A-Back-End.svg?branch=master)](https://app.travis-ci.com/1Announce/Group-A-Back-End)

ExpressJS Back-End API to service 1Announce Web Application. Controller for database and AWS infrastructure.

## Dependencies

- Node.JS
- express
- rxjs
- axios
- aws-sdk
- cors
- uuidv4
- express-validator

## Usage

1. First, install dependencies
```
npm install
```

2. Install Mock JSON Server
```
npm install -g json-server
```

3. Configure AWS credentials in `.env`
```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

4. Start JSON Server
```
json-server --watch mock-server/db.json -p 5050
```

5. Start the server
```
node .
```
