pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t employee-backend:v1 ./backend
                '''
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKERHUB_USER',
                        passwordVariable: 'DOCKERHUB_TOKEN'
                    )
                ]) {
                    sh '''
                        docker tag employee-backend:v1 $DOCKERHUB_USER/employee-backend:jenkins-v1

                        echo "$DOCKERHUB_TOKEN" | docker login \
                            -u "$DOCKERHUB_USER" --password-stdin

                        docker push $DOCKERHUB_USER/employee-backend:jenkins-v1

                        docker logout
                    '''
                }
            }
        }
    }
}
