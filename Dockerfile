FROM tomcat:latest
MAINTAINER Anjuna

COPY $WORKSPACE/build /usr/local/tomcat/webapps/
#ADD ./build /usr/local/tomcat/webapps/

EXPOSE 8080
CMD ["catalina.sh", "run"]
