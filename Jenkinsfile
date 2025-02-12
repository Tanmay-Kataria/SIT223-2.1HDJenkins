pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
        bat 'npm test -- --ci --passWithNoTests'

            }
        }

        stage('Code Quality Analysis') {
            steps {
                bat 'npm run lint'
                bat 'sonar-scanner -Dsonar.projectKey=ReactSPA -Dsonar.host.url=http://localhost:9000 -Dsonar.token=<SONAR_TOKEN>'
            }
        }

        stage('Deploy') {
            steps {
                bat 'netlify deploy --prod'
            }
        }
    }
}
