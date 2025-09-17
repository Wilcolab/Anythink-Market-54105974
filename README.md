
# Anythink Market Servers

This project now contains **two servers**:

- A FastAPI server implemented in Python (port 8000)
- A Node.js server implemented with Express (port 8001)

The Node.js server was added as part of a migration to improve scalability and performance. Both servers can be run together using Docker Compose.


## Project Structure

Key files and directories:

- `python-server/`: Python FastAPI server
  - `src/main.py`: FastAPI implementation
  - `requirements.txt`: Python dependencies
  - `Dockerfile`: Docker image for FastAPI
- `my-express-app/`: Node.js Express server
  - `src/app.js`: Express implementation
  - `package.json` & `yarn.lock`: Node dependencies
  - `Dockerfile`: Docker image for Node.js
- `docker-compose.yml`: Runs both servers together


## Getting Started

To run both servers using Docker Compose:

```shell
docker compose up
```

This will build and start both the Python (FastAPI) server on port **8000** and the Node.js (Express) server on port **8001**.


## API Routes

### Python FastAPI server (port 8000)
- `POST /tasks`: Adds a task
- `GET /tasks`: Retrieves the task list

### Node.js Express server (port 8001)
- `POST /tasks`: Adds a task (expects `{ "text": "..." }` in JSON body)
- `GET /tasks`: Retrieves the task list
- `GET /`: Returns "Hello World"

---

**Migration Note:**
The Node.js server was added as part of a migration from Python to Node.js. Both servers currently provide similar endpoints for managing tasks, but future development will focus on the Node.js implementation.
