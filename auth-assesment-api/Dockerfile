# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which your Nest.js application runs (change it as per your Nest.js app)
EXPOSE 5000

# Start the server using the production build
CMD [ "node", "dist/main" ]