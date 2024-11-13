# Leads API

A Node.js and TypeScript API to manage leads using stored procedures. This API allows you to retrieve and create leads.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
  - [GET /api/leads]
  - [GET /api/lead]
  - [POST /api/lead]

## Installation

1. **Clone the repository**:

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Create a `.env` file in the root directory and add your environment variables**:
    ```env
    CONNECTIONSTRING="Server=your_server;Database=your_database;User Id=your_username;Password=your_password;Encrypt=true;TrustServerCertificate=true;"
    PORT=3000
    ```

## Usage

1. **Build the project**:
    ```sh
    npm run build
    ```

2. **Start the server**:
    ```sh
    npm run start
    ```

3. **For development**:

Run Code using VS Code's `Run and Debug` feature.

4. **Test the project**:
    ```sh
    npm run test
    ```

## Environment Variables

The project uses the following environment variables:

- `CONNECTIONSTRING`: Database connection string.
- `PORT`: Port number for the server (default is 3000).

## Endpoints

### GET /api/leads

Retrieve leads from the database.

**Query Parameters**:
N/A

**Example Request**:
```sh
GET /leads
```

### GET /api/lead

Retrieve a lead from the database.

**Query Parameters**:
- `id`: Lead ID (GUID).

**Example Request**:
```sh
GET /lead?id=E464B9AF-EFB0-4C49-80AE-2F9EB97FDC4C
```

### POST /api/lead

Add a lead to the database.

**Body Parameters**:
- `Name`: Lead's Full Name (string).
- `Email`: Lead's Email (string).
- `Mobile`: Lead's Mobile Number'(string).
- `PostCode`: Lead's Post Code' (string).
- `ServiceType`: Lead's Service Type (numeric).

**Example Request**:
```sh
POST /lead

{
    "Name": "Mike Chua 05",
    "Email": "mchua05@gmail.com",
    "Mobile": "(123) 456 7890",
    "PostCode": "55236",
    "ServiceType": 3
}
```