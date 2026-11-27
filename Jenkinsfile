pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code is available in Jenkins workspace'
            }
        }

        stage('Build Information') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Build Complete') {
            steps {
                echo 'First Jenkins pipeline completed successfully!'
            }
        }
    }
}
