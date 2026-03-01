# QA Automation Engineer – Technical Exercise

## Overview

This repository contains a test automation framework built from scratch to validate the login functionality of:

🔗 https://the-internet.herokuapp.com/login

The objective of this exercise was not only to automate test cases, but to demonstrate architectural decisions, scalability considerations, cross-browser execution, backend interaction validation, and quality-focused thinking.

---

## Technology Stack

* **Language:** TypeScript
* **Automation Framework:** Playwright
* **Test Runner:** Playwright Test
* **Dependency Manager:** npm
* **Reporter:** Built-in Playwright HTML Reporter

### Why Playwright?

Playwright was selected because:

* Native support for modern browsers (Chromium, Firefox, WebKit)
* Built-in parallel execution and retry mechanisms
* First-class TypeScript support
* Powerful debugging tools (trace viewer, screenshots on failure)
* Clean fixture system for scalable test design

The framework is structured to support future growth with minimal refactoring.

---

## 🏗 Project Architecture

The project follows a clean and scalable structure:

```
qa-automation-login-playwright/
│
├── tests/
│   ├── login/
│   └── logout/
│
├── pages/
│   ├── LoginPage.ts
│   └── SecureAreaPage.ts
│
├── fixtures/
│
├── utils/
│   └── constants.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Design Principles

* **Page Object Model (POM):**
  Separates UI interaction logic from test assertions, improving maintainability and readability.

* **Custom Fixtures:**
  Page objects are injected into tests using Playwright’s fixture extension system, reducing repetition and improving scalability.

* **Constants Externalization:**
  Test data and expected messages are centralized in a utility file to avoid hardcoding values.

* **Clean Responsibility Separation:**
  Each page object represents a specific view (LoginPage, SecureAreaPage), avoiding mixed concerns.

---

## Test Coverage Strategy

The following scenarios were identified for the login feature:

### Automated Scenarios

✔ Successful login with valid credentials
✔ Logout functionality
✔ Invalid username
✔ Invalid password
✔ Empty fields submission
✔ URL validation after login
✔ Visibility validation of secure page elements
✔ HTTP authentication request validation (status code & redirect)

### Identified but Not Automated

* Boundary value testing (extremely long inputs)
* Security testing (e.g., SQL injection attempts)
* Performance or rate limiting validations
* Accessibility validations

These were excluded intentionally to focus on functional coverage aligned with the scope of the exercise.

---

## Setup & Execution

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Install Playwright browsers

```
npx playwright install
```

### 3️⃣ Run tests

```
npm run test
```

### 4️⃣ Open HTML report

```
npm run report
```

---

## Reporting

The framework uses Playwright's built-in HTML reporter, providing:

* Structured test results
* Execution time details
* Error stack traces
* Screenshots on failure
* Trace files on first retry

---

## Scalability Considerations

This framework can be extended to:

* Support additional features (e.g., registration, password reset)
* Integrate API + UI testing
* Run in CI pipelines (GitHub Actions, GitLab CI)
* Add tagging strategies (e.g., smoke, regression)
* Introduce data-driven testing patterns

---

## Final Notes

This project was built with maintainability, clarity, and scalability in mind.
The structure reflects real-world automation design principles rather than a minimal solution for a simple scenario.

---
