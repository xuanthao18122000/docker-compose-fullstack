FROM nginx:latest

# Xóa cấu hình mặc định của Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Sao chép tệp cấu hình tùy chỉnh của bạn vào container
COPY nginx.conf /etc/nginx/nginx.conf