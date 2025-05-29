pipeline {
  agent any

  stages {
    stage('Clone code from GitHub') {
      steps {
        git branch: 'main', url: 'https://github.com/hoadz69/eyeclinic-app.git'
      }
    }

    stage('Build Docker image') {
      steps {
        script {
          def imageName = 'eyeclinic-app'
          def tag = 'latest'
          sh "docker build -t ${imageName}:${tag} ."
        }
      }
    }

    stage('Run Docker container') {
      steps {
        script {
          def containerName = 'eyeclinic-app'
          sh """
            docker stop ${containerName} || true
            docker rm ${containerName} || true
            docker run -d --name ${containerName} -p 8081:80 eyeclinic-app:latest
          """
        }
      }
    }
  }
}