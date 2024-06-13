# Use an official Node runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["tail", "-f", "/dev/null"]

