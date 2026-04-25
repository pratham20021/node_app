pipeline {
    agent any

    environment {
        IMAGE_NAME = "task_2-app"
        CONTAINER_NAME = "task_2-container"
        PORT = "3000"
    }

    stages {

        // 1. Pull the latest code from source control
        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        // 2. Install Node dependencies to validate the project builds cleanly
        stage("Install Dependencies") {
            steps {
                sh "npm install"
            }
        }

        // 3. Build a Docker image from the Dockerfile
        stage("Build Docker Image") {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        // 4. Stop & remove any old container, then run the new one
        stage("Run Container") {
            steps {
                sh "docker rm -f ${CONTAINER_NAME} || true"
                sh "docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            echo "Pipeline succeeded — app is running on port ${PORT}"
        }
        failure {
            echo "Pipeline failed — check the logs above"
        }
    }
}
