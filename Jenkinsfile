pipeline{
    agent any

    environment{
        GITHUB_REPO_URL = 'https://github.com/deep-bansal/InboxCom.git'
        DOCKER_BACKEND_IMAGE = 'deep04bansal/spe_backend:latest'
        DOCKER_FRONTEND_IMAGE = 'deep04bansal/spe_frontend:latest'
        PATH = "/usr/local/bin:${env.PATH}"
    }
    stages{
        stage('Github Pull'){
            steps{
               git branch: 'main', url: "${GITHUB_REPO_URL}"
            }
        }
        
        stage('Build Backend and Frontend') {
            steps {
                dir('backend') {
                    script {
                        sh '/usr/local/bin/npm install'
                    }
                }
                dir('frontend') {
                    script {
                        sh '/usr/local/bin/npm install'
                        sh '/usr/local/bin/npm run build'
                    }
                }
            }
        }
        
        stage('Testing'){
            steps{
                dir('frontend') {
                    script {
                        sh 'npm run test'
                    }
                }
                
            }
        }
       
        stage('Build Docker Images') {
            steps {
                script {
                    // Build backend Docker image
                    dir('backend') {
                        sh "/usr/local/bin/docker build -t ${DOCKER_BACKEND_IMAGE} ."
                    }

                    // Build frontend Docker image
                    dir('frontend') {
                        sh "/usr/local/bin/docker build -t ${DOCKER_FRONTEND_IMAGE} ."
                    }
                }
            }
        }
        
        
        stage('Push Docker Image') {
            steps {
                script{
                     withCredentials([usernamePassword(credentialsId: 'DockerHubCred', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    // Log in to Docker Hub
                    sh "/usr/local/bin/docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                    // Push the Docker image to Docker Hub
                    sh '/usr/local/bin/docker push ${DOCKER_BACKEND_IMAGE}'
                    sh '/usr/local/bin/docker push ${DOCKER_FRONTEND_IMAGE}'
                }

                 }
            }
        }
        stage('Run Ansible Playbook') {
        steps {
                script {
                    // Define the command to execute the Ansible playbook
                    def ansibleCommand = "/opt/homebrew/bin/ansible-playbook -i inventory deploy.yml --ask-become-pass"
            
                    // Execute the command
                    sh ansibleCommand
                }
            }
        }
    }
}
