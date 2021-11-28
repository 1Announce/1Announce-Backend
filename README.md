# Group A Back End

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