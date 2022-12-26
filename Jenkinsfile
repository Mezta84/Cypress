pipeline{
    agent any 

    tools {nodejs  "node"}


    stages{
        stage('Cypress Parrallel Test Suite'){
            parallel{
                stage('Slave Node1'){
                    agent {
                        label "remote_node1"
                    }
                    steps{
                        git url: 'https://github.com/Mezta84/Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run test-dashboard'
                    }
                }
                stage('Slave Node2'){
                    agent {
                        label "remote_node2"
                    }
                    steps{
                        git url: 'https://github.com/Mezta84/Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run test-dashboard'
                    }
                }
            }
        }

        
    }
}