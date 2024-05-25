FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 8081
EXPOSE 8081

# Run the app
CMD [ "node", "app-nera.js" ]