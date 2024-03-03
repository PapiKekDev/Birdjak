FROM node:21-alpine
WORKDIR /app
copy . .
RUN npm install
ENV TOKEN="Token Here :3"
CMD ["node", "main.js"]