pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm run test-suite'
            }
        }
    }

    post {
        always {
            echo 'Cypress Execution completed successfully'
        }
    }
}
