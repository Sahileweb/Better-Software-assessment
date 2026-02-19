# 🚀 Upvote - Feature Request Board

A clean, minimalist product feedback board built for the Better Software Associate Software Engineering assessment. 

**Upvote** allows product teams to gather, track, and rank user feature requests to prioritize what to build next. Designed with a focus on clean architecture, rapid execution, and an AI-augmented workflow.

---

## 💻 Tech Stack
* **Frontend:** React.js, Vite, Tailwind CSS
* **Backend:** Python, Flask, Flask-RESTful
* **Database:** SQLite (via SQLAlchemy ORM)
* **Architecture:** Decoupled Client/Server REST API

---

## 🧠 Technical Decisions & Constraints

When building from 0 → 1, speed and simplicity are paramount. 
* **Zero-Config Database:** I opted for SQLite to ensure the reviewing engineering team can run this repository locally immediately, without needing to configure external PostgreSQL credentials or Docker containers.
* **Separation of Concerns:** By completely decoupling the React Vite frontend from the Flask backend, this application is structured to easily scale into a microservices architecture in the future.
* **AI-Augmented Engineering:** I utilized AI (Claude 3.5) as a pair programmer to rapidly bridge my existing REST API logic into Flask syntax. Please see the `/ai_docs` directory for my specific prompting constraints, architecture rules, and risk mitigation strategies.

---

## 🛠️ How to Run Locally

This project requires [Node.js](https://nodejs.org/) and [Python](https://www.python.org/) installed on your machine.

### 1. Start the Flask Backend
Open a terminal and navigate to the project root:
```bash
cd backend

# Create and activate the virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server (runs on http://localhost:5000)
python app.py