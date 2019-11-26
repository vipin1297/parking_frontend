FROM tomcat:latest
MAINTAINER Anjuna
RUN mkdir /usr/local/tomcat/webapps/build/
COPY $WORKSPACE/build/* /usr/local/tomcat/webapps/

EXPOSE 8080
CMD ["catalina.sh", "run"]
