FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY index.html .
COPY styles.css .
COPY script.js .
# COPY favicon.ico .  

COPY nginx.conf /etc/nginx/conf.d/default.conf 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]