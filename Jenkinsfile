pipeline {
    agent any

    tools {
        nodejs 'nodeJS-26'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code downloaded from GitHub'
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
