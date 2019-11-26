FROM tomcat:latest
MAINTAINER Anjuna
COPY /var/jenkins_home/workspace/parking_frontend/target/*.war /usr/local/tomcat/webapps/
EXPOSE 8888
