# Define the base image
FROM node:20-alpine3.17

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY . .

COPY .env .env.production

RUN nohup /usr/src/app/.bin/json-server --watch src/app/helper/data.json --host 0.0.0.0 --port 5000 &

# Build the Next.js app
RUN yarn build

# Expose the listening port
EXPOSE 3000

# Run npm start script
CMD ["yarn", "start"]
