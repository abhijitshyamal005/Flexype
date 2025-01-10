# Alerting System for Monitoring Failed POST Requests

## Project Overview
This project implements a backend alerting system designed to monitor a specific POST endpoint (`/api/submit`) for failed requests due to invalid headers or incorrect access tokens. It tracks invalid requests from each IP address within a configurable time window and triggers alerts via email when a defined threshold is exceeded. The system also logs metrics for failed requests and provides an endpoint to fetch these metrics.

## Features
- **Request Monitoring:** Tracks failed POST requests on `/api/submit` due to invalid headers or incorrect access tokens.
- **Threshold-Based Alerts:** Sends email notifications via Google's SMTP server when the failed request threshold (default: 5) is exceeded within the configured time window (default: 10 minutes).
- **Metrics Logging:** Logs details such as source IP, timestamp, and reason for failure.
- **Metrics Endpoint:** Exposes an API endpoint to retrieve logged metrics.
- **Scalability:** Designed to handle high traffic (~500 requests per second).

## Tech Stack
- **Backend Language:** Node.js (JavaScript/TypeScript)
- **Framework:** Express.js
- **Database:** MongoDB
- **Email Alerts:** Google's SMTP server

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/alerting-system.git
   cd alerting-system
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env` file with the following content:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/alerting-system
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   ALERT_THRESHOLD=5
   TIME_WINDOW=10
   ```
4. **Start the Server:**
   ```bash
   npm start
   ```

## API Endpoints
### 1. POST `/api/submit`
- **Description:** Endpoint to monitor POST requests.
- **Request Example:**
  ```bash
  curl -X POST http://localhost:3000/api/submit -H "Authorization: Bearer your-access-token"
  ```
- **Failure Response:** Triggers tracking on invalid headers or incorrect access tokens.

### 2. GET `/api/metrics`
- **Description:** Fetches logged metrics of failed requests.
- **Response Format:**
  ```json
  [
    {
      "ip": "192.168.1.1",
      "timestamp": "2024-01-10T10:00:00Z",
      "reason": "Invalid Access Token"
    }
  ]
  ```

## Folder Structure
```
alerting-system/
├── controllers/
│   └── alertController.js
├── models/
│   └── FailedRequest.js
├── routes/
│   └── api.js
├── utils/
│   └── emailService.js
├── .env
├── app.js
├── package.json
└── README.md
```

## Code Explanation
### `app.js`
Sets up the Express server, connects to MongoDB, and defines routes.

### `controllers/alertController.js`
Handles logic for request validation and logging failed requests.

### `models/FailedRequest.js`
Defines the MongoDB schema for storing failed request data.

### `routes/api.js`
Defines API routes (`/api/submit` and `/api/metrics`).

### `utils/emailService.js`
Configures and sends email notifications using Gmail SMTP.

## Email Alerts
- **SMTP Server:** Gmail's SMTP server is used for sending alerts.
- **Configuration:** Set `EMAIL_USER` and `EMAIL_PASS` in `.env`.

## Scalability Considerations
- Implemented rate limiting and optimized database queries.
- Designed with scalability to handle ~500 requests/second.

## Demo Video
- [Google Drive Link](https://drive.google.com/your-demo-video)

## Author
**Abhijit Shyamal**  
MCA Student at NIT Jamshedpur  
Event Coordinator for Ojass | Technical Support for Juniors

## Contribution
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

## Submission
- **Code:** [GitHub Repository](https://github.com/your-username/alerting-system)
- **Video:** [Google Drive Link](https://drive.google.com/your-demo-video)

For any queries, feel free to reach out.

---

**Note:** Please revert to the same email (hello@flexype.io) while cc’ing om.sinkar@flexype.io along with your resume.

Good luck! 🎯

