# Define the base image
FROM node:18-alpine3.17

# Set the working directory
WORKDIR /app

# Copy all files
COPY . /app
COPY .env.local /app/.env.production
RUN rm -rf /app/.next
RUN rm -rf /app/package-lock.json

# Install dependencies
RUN yarn install 

# Build the Next.js app
RUN yarn build

# Expose the listening port
EXPOSE 3000

# Run npm start script
CMD ["sh", "-c", "yarn json-server & yarn start"]

