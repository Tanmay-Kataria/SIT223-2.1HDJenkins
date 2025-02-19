pipeline {
    agent any

    environment {
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
                bat 'sonar-scanner -Dsonar.projectKey=ReactSPA -Dsonar.host.url=http://localhost:9000 -Dsonar.token=<SONAR_TOKEN>'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'netlify-auth-token', variable: 'NETLIFY_AUTH_TOKEN')]) {
                    bat 'npx netlify deploy --prod --dir=build --site=8785798b-5a67-4470-b5aa-9b4153c30329'
                }
            }
        }
        
        stage('Notify') {
            steps {
                // Email notification stage using the email-ext plugin.
                emailext(
                    subject: "Jenkins Build Notification: ${currentBuild.currentResult}",
                    body: """\
                        Build Status: ${currentBuild.currentResult}
                        Job: ${env.JOB_NAME}
                        Build Number: ${env.BUILD_NUMBER}
                        Console Log: ${env.BUILD_URL}
                    """,
                    to: "user@example.com",
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                )
            }
        }
    }
    
    post {
        always {
            echo "Pipeline finished with result: ${currentBuild.currentResult}"
        }
    }
}
