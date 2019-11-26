FROM tomcat:latest
MAINTAINER Anjuna
COPY $WORKSPACE/build /usr/local/tomcat/webapps/
EXPOSE 8888
