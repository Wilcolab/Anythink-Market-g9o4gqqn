# Anythink Market

This project contains both a Python FastAPI server and a Node.js server for managing tasks. Each server provides API routes for task management.

## Project Structure

The project has the following files and directories:

### Python Server
- `python-server/src/main.py`: FastAPI server implementation with routes for task management.
- `python-server/src/__init__.py`: Package marker file.
- `python-server/requirements.txt`: Python dependencies for FastAPI.
- `python-server/Dockerfile`: Docker image configuration for the FastAPI server.

### Node Server
- `node-server/src/index.js`: Node.js server implementation with routes for task management.
- `node-server/package.json`: Node.js dependencies and project configuration.
- `node-server/Dockerfile`: Docker image configuration for the Node.js server.

### Docker Configuration
- `docker-compose.yml`: Multi-container Docker configuration for both servers.

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers:

  ```shell
  docker compose up
  ```

  This command builds Docker images and starts all containers defined in `docker-compose.yml`.

- The FastAPI server runs on port `8000`.
- The Node.js server runs on port `3000`.

## API Routes

Both servers provide the following task management routes:

- `POST /tasks`: Adds a task to the task list.
- `GET /tasks`: Retrieves the task list.

