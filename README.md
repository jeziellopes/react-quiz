# ⚛️ React Redux Quiz ⚛️

**React Redux Quiz** is a **React** app with **TypeScript** and **ESLint** applying concepts from **Flux Architecture** and **Clean Architecture**.

---

## Non-Functional Requirements

- Web App using React and TypeScript
- Use Redux for state management
- Consume questions from own REST API

## Functional Requirements

- Show one question at time
- For any question:
  - Show question text
  - Show alternatives (correct_answer and incorrect_answers)
  - Next and back button to move between questions 
  - When navigating between the questions save correct answers number in state
- After the last question, show the percentage of correct answers.

---

## How to use

### Install dependencies:

```shell
  yarn
```

### Change to develop branch:

```shell
  git checkout develop
```

### Generate .env:

```shell
  yarn env:copy
```

### Start development server:

```shell
  yarn start
```
