FROM node:12.18.3
WORKDIR /app
COPY . . 
RUN npm install 

CMD ["node","app.js"]