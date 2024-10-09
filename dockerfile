FROM node

WORKDIR /app 

COPY package.json package-lock.json ./

RUN npm install

COPY tsconfig.json nodemon.json ./

COPY .env ./

EXPOSE 8000
    
CMD ["npm", "start"]
