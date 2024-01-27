# NUS-ISS-Team10

# Project Name

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

3. Run the following command to start up the application:
    ```bash
    npm start
    ```

4. Access the app using http://localhost/welcome:


### Backend (Express)

1. Navigate to the `backend` directory on a new terminal:
   ```bash
   cd frontend
   ```


2. Install the required node modules using the following command:
    ```bash
    npm i
    ```

3. Run the following command to start up the application:
    ```bash
    npm run dev
    ```

4. Access the app through `http://localhost:4000/`

## Running the Whole App with Docker Compose

- Ensure that you have set the relevant environment files in both frontend and backend as the file `.env.prod`

- Run the following command to execute the spin-up of all docker containers:
    ```bash
    docker-compose up -d --build
    ```

- Once the operation has finished, you can navigate to Docker Desktop to monitor the status of each spun up container

- The frontend and backend can be accessed at `http://localhost:80/welcome` and `http://localhost:4000` respectively