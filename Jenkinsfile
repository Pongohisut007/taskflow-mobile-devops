```groovy
pipeline {

    agent {
        docker {
            image 'node:20-alpine'
            args '-u root'
        }
    }

    environment {
        NODE_ENV = 'test'
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
            echo '======================================'
            echo 'BUILD SUCCESS'
            echo 'All stages completed successfully.'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo 'BUILD FAILED'
            echo 'Please check the Jenkins console log.'
            echo '======================================'
        }

        always {
            echo 'Pipeline finished.'
        }
    }
}
```
