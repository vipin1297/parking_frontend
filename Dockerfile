FROM tomcat:latest
MAINTAINER Anjuna
COPY  $WORKSPACE/build /var/workspace
curl -u admin:admin http://3.17.179.154:8888/manager/reload?path=/build
EXPOSE 88
