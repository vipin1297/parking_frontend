FROM tomcat:latest
MAINTAINER Anjuna
COPY $WORKSPACE/target/*.war /usr/local/tomcat/webapps/
EXPOSE 88
