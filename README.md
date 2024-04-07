# NUS-ISS-Team10

# Project Name - Travel Aid

An application to help users plan for their dream journeys involving overseas travel

## Table of Contents

- [Prerequisites](#prerequisites)
- [Running Frontend and Backend Individually](#running-frontend-and-backend-individually)
  - [Frontend (React)](#frontend-react)
  - [Backend (Express)](#backend-express)
- [Running the Whole App with Docker Compose](#running-the-whole-app-with-docker-compose)

## Prerequisites

Make sure you have the following software installed on your machine:

- Docker
- Docker Compose
- Node Runtime Environment (if not using docker)

## Running Frontend and Backend Individually

### Frontend (React)


1. Navigate to the `frontend` directory on a new terminal:
   ```bash
   cd frontend
   ```


2. Install the required node modules using the following command:
    ```bash
    npm i
    ```

3. Ensure that you have set the environment variables for the application as `.env`. Refer to the following example file:
    ```bash
    REACT_APP_BACKEND_ENDPOINT=
    ```

4. Run the following command to start up the application:
    ```bash
    npm start
    ```

5. Access the app using `http://localhost:80`:


### Backend (Express)

1. Navigate to the `backend` directory on a new terminal:
   ```bash
   cd frontend
   ```


2. Install the required node modules using the following command:
    ```bash
    npm i
    ```

3. Ensure that you have set the environment variables for the application as `.env`. Refer to the following example file:

    ```bash
    REACT_APP_BACKEND_ENDPOINT=
    ```

    ```bash
    DATABASE_TYPE=
    DATABASE_CONNECTION_URL=
    ```
4. Run the following command to start up the application:
    ```bash
    npm run dev
    ```

5. Access the app through `http://localhost:4000/`

## Running the Whole App with Docker Compose

1. Ensure that you have set the relevant environment files in both frontend and backend as the file `.env.prod`. The examples for the frontend and backend environment files are shown below respectively:

    ```bash
    DATABASE_TYPE=
    DATABASE_CONNECTION_URL=
    ```

2. Run the following command to execute the spin-up of all docker containers:
    ```bash
    docker-compose up -d --build
    ```

3. Once the operation has finished, you can navigate to Docker Desktop to monitor the status of each spun up container

4. The frontend and backend can be accessed at `http://localhost:80` and `http://localhost:4000` respectively
