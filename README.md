# 1Announce Backend

<p align="center">
  <img src="docs/1a.png" alt="1Announce logo" width="120" />
</p>

ExpressJS REST API that powers **1Announce**, a service for scheduling announcements once and having them delivered automatically to whichever chat platforms a user has connected.

The backend accepts an announcement (message content + delivery schedule), persists it, and registers an [AWS EventBridge](https://aws.amazon.com/eventbridge/) rule with a cron expression matching the requested time. When the rule fires, EventBridge invokes a platform-specific AWS Lambda function (e.g. `1Announce-Discord`) that actually delivers the message. This keeps delivery logic out of the backend entirely — adding support for a new platform is just a matter of writing a new Lambda target and pointing a rule at it.

## Documentation

- **Business case:** [1Announce Slides.pdf](<docs/1Announce Slides.pdf>) — project pitch deck
- **API reference:** [api_reference.md](docs/api_reference.md) — route-by-route API reference
- **Video Demonstration:** https://youtu.be/1MaAlAEfqFc

## Associated projects

1Announce is split across a few repositories:

- [1Announce-Discord-Bot](https://github.com/1Announce/1Announce-Discord-Bot) — Discord delivery service, invoked as an EventBridge/Lambda target by this backend.
- [1Announce-Teams-Bot](https://github.com/1Announce/1Announce-Teams-Bot) — Microsoft Teams delivery service, invoked the same way.

Each bot is a modular service provider: it just needs to accept the scheduled announcement payload and deliver it to its platform, so new platforms can be added without changing this backend beyond adding a new EventBridge target.

## File tree

```
1Announce-Backend/
└── src/
    ├── server.js                    Entry point — starts the Express app on port 8000
    ├── app.js                       Express app setup: JSON body parsing, CORS, route mounting
    ├── routes/
    │   ├── index.js                   GET / — health check
    │   ├── announcement.js            POST /announcement — validates input and creates an announcement
    │   └── announcements.js           GET /announcements — lists all announcements
    └── utils/
        ├── announcement-manager.js    Orchestrates creation: assigns an ID, schedules the AWS event, persists the record
        ├── aws-manager.js             Creates the EventBridge rule + Lambda target that delivers an announcement on schedule
        ├── api-manager.js             Caches announcements/users in memory, wraps ApiService with RxJS
        ├── api-service.js             Axios/RxJS client for the data store (mock-server in dev)
        └── utils.js                   Shared helpers — UUID generation, datetime → AWS cron expression
```

## Technologies

- **Node.js** / **Express** — HTTP server and routing
- **express-validator** — request validation
- **RxJS** — observable-based async flow for API calls
- **Axios** — HTTP client to the data store
- **AWS SDK (EventBridge)** — schedules announcement delivery via cron rules and Lambda targets
- **uuid** — announcement ID generation
- **cors** — cross-origin support for the web frontend
- **Jest** / **Supertest** — testing
- **json-server** — mock REST data store for local development
- **Travis CI** — continuous integration

## Usage

1. Install dependencies
   ```
   npm install
   ```

2. Install the mock JSON server
   ```
   npm install -g json-server
   ```

3. Configure AWS credentials in `.env`
   ```
   AWS_ACCESS_KEY_ID=
   AWS_SECRET_ACCESS_KEY=
   ```

4. Start the mock data server
   ```
   json-server --watch mock-server/db.json -p 5050
   ```

5. Start the API server
   ```
   node .
   ```
