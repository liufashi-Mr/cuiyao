# Use the official Node.js image as the base image
FROM node:22-alpine3.21 AS base
LABEL maintainer="fashi.liu@qq.com"


RUN npm install -g pnpm@10.11.1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install the application dependencies
RUN pnpm i --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN pnpm build

# Expose the application port
EXPOSE 4090

# Command to run the application
CMD ["node", "dist/main"]