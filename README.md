# BackendExpress

A simple backend API built using [Express.js](https://expressjs.com/), designed with a minimal and secure setup using middleware such as `cors`, `helmet`, and `morgan`.

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **dotenv** – environment variable management
- **cors** – Cross-Origin Resource Sharing
- **helmet** – security headers
- **morgan** – request logging
- **express-validator** – input validation

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository and install dependencies:

\`\`\`bash
git clone https://github.com/igoyadi/BackendExpress.git
cd BackendExpress
npm install
\`\`\`

### Running the Server

Start the backend using:

\`\`\`bash
node server.js
\`\`\`

The server will start on the port defined in your .env file or default to 5000.

## 🛡️ Middleware

This backend uses the following middleware:

- `cors` to handle cross-origin requests
- `helmet` to set security headers
- `morgan` for logging HTTP requests
- `express-validator` to validate incoming request data
