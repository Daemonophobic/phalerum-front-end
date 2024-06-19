# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

## Delete .git
RUN rm -rf .git

# Build the application
RUN npm run build

# Expose port 9000 for the application
EXPOSE 9000

# Start the application
CMD ["npm", "run", "dev"]
