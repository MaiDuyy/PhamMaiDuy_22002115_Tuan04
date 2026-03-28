FROM node:18-alpine

WORKDIR /app

COPY my-react-app/package*.json ./
RUN npm ci

COPY my-react-app/index.html ./
COPY my-react-app/vite.config.js ./
COPY my-react-app/eslint.config.js ./
COPY my-react-app/public ./public
COPY my-react-app/src ./src

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
