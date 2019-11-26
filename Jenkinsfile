pipeline {
    agent any
        stages{
            stage('Git Checkout'){
                steps{
                    git 'https://github.com/Anjuna661/INGFAV_UI.git'
                }
            }
            stage('Build') {
                steps{
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'npm audit fix'
                }
            }
            stage(Deploy){
                steps{
                    sh 'cp -r $WORKSPACE/build /var/workspace'
                    sh 'curl -u admin:admin http://3.17.179.154:8888/manager/reload?path=/build'
                }
            }
            }
        }
