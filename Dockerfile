FROM nginx:alpine
RUN sed "s/js;/js mjs;/" -i /etc/nginx/mime.types
COPY . /usr/share/nginx/html