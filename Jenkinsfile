```groovy
pipeline {

    agent {
        docker {
            image 'node:20-alpine'
        }
    }

    environment {
        NODE_ENV = 'test'
        APP_NAME = 'taskflow'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                dir('backend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Lint') {
            steps {
                dir('backend') {
                    sh 'npm run lint'
                }
            }
        }

        stage('Unit Test') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }
    }

    post {

        success {
            echo "======================================"
            echo "BUILD SUCCESS"
            echo "Application: ${APP_NAME}"
            echo "Environment: ${NODE_ENV}"
            echo "======================================"
        }

        failure {
            echo "======================================"
            echo "BUILD FAILED"
            echo "Application: ${APP_NAME}"
            echo "Please check the Jenkins console log."
            echo "======================================"
        }

        always {
            echo "Pipeline finished."
        }
    }
}
```
