FROM anjuna91/mytomcat
MAINTAINER Anjuna
USER root
RUN mkdir /usr/local/tomcat/webapps/build/
COPY $WORKSPACE/build/* /usr/local/tomcat/webapps/
EXPOSE 8080
CMD ["catalina.sh", "run"]
