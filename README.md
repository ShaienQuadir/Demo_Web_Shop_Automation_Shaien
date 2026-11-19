# Demo Web Shop Automation & API Testing

## Project Overview

This project is created as part of the SQA course assignment. It includes UI Automation using Playwright and API Automation using Postman and Newman.

**Website:** https://demowebshop.tricentis.com/

## Technologies Used

- Playwright
- JavaScript
- Node.js
- Postman
- Newman CLI
- Allure Report
- Git & GitHub

## Project Setup

### Prerequisites

- Node.js and npm
- Git
- Postman
- Java and Allure CLI (for viewing Allure reports)

### Installation

Clone the repository:

```bash
git clone https://github.com/ShaienQuadir/Demo_Web_Shop_Automation_Shaien.git
```

Go to the project folder:

```bash
cd Demo_Web_Shop_Automation_Shaien
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Part A: UI Automation

UI automation is implemented using Playwright with Page Object Model (POM).

### Test Scenarios

- **Q1:** Invalid Login
- **Q2:** User Registration and Add Product to Cart
- **Q3:** Product Search to Order Confirmation

### Run Individual UI Tests

Q1 - Invalid Login:

```bash
npx playwright test tests/login.spec.js
```

Q2 - Registration and Cart:

```bash
npx playwright test tests/register-cart.spec.js
```

Q3 - Checkout:

```bash
npx playwright test tests/checkout.spec.js
```

### Run All UI Tests

```bash
npm test
```

### HTML Report

After running UI tests, open the Playwright HTML report:

```bash
npm run test:report
```

### Allure Report

Generate the Allure report:

```bash
allure generate allure-results --clean -o allure-report
```

Open the report:

```bash
allure open allure-report
```

Note: Allure CLI and Java must be installed to generate and open the Allure report.

## Part B: API Automation

API automation is implemented using Postman and Newman CLI.

**Base URL:** https://jsonplaceholder.typicode.com

### Q1 - Get All Users

- Method: GET
- Endpoint: `/users`
- Validated HTTP status code 200.
- Validated JSON response.
- Verified that the response contains 10 users.
- Verified that every user has ID, name, and email.
- Saved a user ID for the next request.

### Q2 - Update User

- Method: PUT
- Endpoint: `/users/{{userId}}`
- Uses the user ID saved from Q1.
- Updates name, email, and company name using dynamic values.
- Validates response status code, user ID, updated name, updated email, updated company name, and non-empty phone number.

### Newman CLI Execution

Run API automation:

```bash
npm run test:api
```

Alternatively:

```bash
newman run "postman/API_Automation_Shaien.postman_collection.json" -e "postman/API_Environment.postman_environment.json"
```

### API Test Summary

- Total Requests: 2
- Total Assertions: 11
- Passed: 11
- Failed: 0

## Run UI and API Tests

Run all UI tests:

```bash
npm test
```

Run API tests:

```bash
npm run test:api
```

## Project Structure

```text
Demo_Web_Shop_Automation_Shaien/
│
├── .github/
│   └── workflows/
├── pages/
├── tests/
├── test-data/
├── screenshots/
├── postman/
├── reports/
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Author

**Name:** Md. Shaien Quadir  
**Course:** SQA  
**Batch:** 21

## Repository

https://github.com/ShaienQuadir/Demo_Web_Shop_Automation_Shaien
