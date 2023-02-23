FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf

COPY dist/w2m /usr/share/nginx/html

COPY conf/nginx.conf /etc/nginx/nginx.conf