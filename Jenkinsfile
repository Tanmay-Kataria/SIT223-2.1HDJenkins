pipeline {
    agent any
    environment{
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token') 
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --ci --passWithNoTests || exit 0'

            }
        }

        stage('Code Quality Analysis') {
            steps {
               bat 'npm run lint || exit 0'

            //  bat 'sonar-scanner -Dsonar.projectKey=ReactSPA -Dsonar.host.url=http://localhost:9000 -Dsonar.token=<SONAR_TOKEN>'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'netlify-auth-token', variable: 'NETLIFY_AUTH_TOKEN')]) {
                    // Replace YOUR_SITE_ID with your actual Netlify site ID.
                    bat 'npx netlify deploy --prod --dir=build --site=8785798b-5a67-4470-b5aa-9b4153c30329'
                }
            }
        }
    }
}
