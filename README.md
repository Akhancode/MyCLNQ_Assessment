# TaskFlow - Task Manager API

## Overview
TaskFlow is a simple task management system built using Express.js. The API allows users to manage tasks by performing operations such as creating, updating, deleting, and retrieving tasks. Each task contains a title, description, and status (e.g., "pending" or "completed").

## Technologies Used
- **Node.js**: JavaScript runtime environment for building the backend.
- **Express.js**: Web framework for building the RESTful API.
- **In-memory Storage**: Tasks are stored  file (JSON format) for persistence.

## Installation

### Prerequisites
- **Node.js** (version 12 or above recommended)

### Steps to Install

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Akhancode/MyCLNQ_Assessment.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd MyCLNQ_Assessment
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables** (optional):
    - Create a `.env` file in the root directory if needed.
    - Need key value - PORT = 3000

5. **Run the server**:
    ```bash
    npm start
    ```
    - The server will be running on [http://localhost:3000](http://localhost:3000) by default.

## API Documentation

To explore the API endpoints, please refer to the API documentation:

- Swagger API doc [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- [![Screenshot-2024-11-29-212712.png](https://i.postimg.cc/SR0194c1/Screenshot-2024-11-29-212712.png)](https://postimg.cc/FdZxt2W0)
- [![Screenshot-2024-11-29-212737.png](https://i.postimg.cc/9MHQNR2W/Screenshot-2024-11-29-212737.png)](https://postimg.cc/4KwGY3nM)

## Usage

1. **Create Task**: `POST /tasks` - Create a new task with a title, description, and status.
2. **Get All Tasks**: `GET /tasks` - Retrieve all tasks.
3. **Get Task by ID**: `GET /tasks/:id` - Retrieve a specific task by ID.
4. **Update Task**: `PUT /tasks/:id` - Update the status of a task by ID.
5. **Delete Task**: `DELETE /tasks/:id` - Delete a task by ID.
