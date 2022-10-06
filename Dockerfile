# FROM nginx
# COPY . /usr/share/nginx/html
FROM nginx
COPY . /app
RUN make /app
# CMD python /app/app.py