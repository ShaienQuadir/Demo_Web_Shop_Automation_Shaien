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
- Git & GitHub

## Part A: UI Automation
- Q1: Invalid Login
- Q2: User Registration
- Q3: Product Search to Order Confirmation

## Part B: API Automation

### Q1 – Get All Users
- Method: GET
- Endpoint: https://jsonplaceholder.typicode.com/users
- Validated status code, JSON response and 10 users.

### Q2 – Update User
- Method: PUT
- Endpoint: https://jsonplaceholder.typicode.com/users/1
- Updated user information using a JSON request body.
- Validated status code, updated name, email and company.

## Newman CLI Execution

Command:
```bash
newman run "postman/API_Automation_Shaien.postman_collection.json" -e "postman/API_Environment.postman_environment.json"
```

### Test Summary
- Total Requests: 2
- Total Assertions: 7
- Passed: 7
- Failed: 0

## Project Structure
- pages/
- tests/
- test-data/
- screenshots/
- postman/
- README.md

## Author
**Name:** Md. Shaien Quadir  
**Course:** SQA  
**Batch:** 21

## Repository
https://github.com/ShaienQuadir/Demo_Web_Shop_Automation_Shaien