pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/BharathAutomation/SanamCypressFramework'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test-suite'
            }
        }
    }

    post {
        always {
            echo 'Cypress Execution completed successfully'
        }
    }
}
