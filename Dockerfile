
# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm install

# Expose the port (if needed for web or healthcheck)
EXPOSE 3000

# Start the bot
CMD ["node", "index.js"]
