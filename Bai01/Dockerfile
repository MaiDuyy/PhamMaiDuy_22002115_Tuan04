# Sử dụng node:18 làm base image
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy các file mã nguồn vào container
COPY package*.json ./
# (Tùy chọn) Chạy npm install nếu bạn có file package.json
# RUN npm install 

COPY app.js .

# Mở cổng 3000
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["node", "app.js"]