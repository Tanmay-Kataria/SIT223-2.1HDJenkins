pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --coverage'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                sh 'npm run lint'
                sh 'sonar-scanner'
            }
        }

        stage('Deploy') {
            steps {
                sh 'netlify deploy --prod'
            }
        }

        stage('Release') {
            steps {
                sh 'git add .'
                sh 'git commit -m "Release new version"'
                sh 'git push origin main'
            }
        }

        stage('Monitoring & Alerting') {
            steps {
                sh 'npx sentry-cli releases new "v1.0"'
            }
        }
    }
}
