FROM tomcat:latest
MAINTAINER Anjuna

#COPY ./*.war /usr/local/tomcat/webapps/
ADD ./build /usr/local/tomcat/webapps/

EXPOSE 8080
CMD ["catalina.sh", "run"]
