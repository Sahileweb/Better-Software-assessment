# AI Workflow & Guidance Constraints

## Overview
For this assessment, I utilized ChatGPT as an AI pair programmer. Because I was tasked with moving quickly, I used AI to bridge my existing architectural knowledge into the required tech stack.

## Constraints & System Rules
Whenever I prompted the AI, I established the following strict rules:
1. **Architecture:** "Do not write monolithic code. Use clean routing patterns."
2. **Translation:** "I am highly proficient in React, Node/Express, and SQL. Translate these Node backend concepts into Flask syntax for me."
3. **Simplicity:** "Use SQLite and SQLAlchemy for the database to ensure the hiring team can run the repo locally with zero external database configuration."
4. **UI/UX:** "Use Tailwind CSS utility classes to build a clean, modern interface without writing custom CSS files."

## Prompt Examples Used
* "Act as a Senior Python Engineer. Generate a Flask `app.py` file with GET and POST endpoints for a feature request board using SQLAlchemy."
* "Create a React functional component for a 'Feature Card' that includes an upvote button. Style it purely with Tailwind CSS."

## Risk Mitigation
To avoid "black box" code, I mandated that the AI include inline comments for any Flask-specific decorators (like `@app.route`) so I could fully understand and explain the execution flow during the walkthrough.