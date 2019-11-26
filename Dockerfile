FROM anjuna91/apachetomcat
MAINTAINER Anjuna
USER root
RUN mkdir /usr/local/tomcat/webapps/build/
RUN mkdir /usr/local/tomcat/webapps/build/static/
RUN mkdir /usr/local/tomcat/webapps/build/static/css/
RUN mkdir /usr/local/tomcat/webapps/build/static/js/
COPY $WORKSPACE/build/* /usr/local/tomcat/webapps/build/
COPY $WORKSPACE/build/static/css/*.css /usr/local/tomcat/webapps/build/static/css/
COPY $WORKSPACE/build/static/js/*.js /usr/local/tomcat/webapps/build/static/js/
EXPOSE 8080
CMD ["catalina.sh", "run"]
