FROM node as build
WORKDIR /app
COPY . ./
# Builds node_modules
RUN npm install
# Builds preact app
RUN npm run build

FROM nginx
# Creates an app folder
WORKDIR /usr/share/nginx/html/app
# Copies configuration
COPY nginx.conf /etc/nginx/nginx.conf
# Copies code
COPY --from=build /app/build/. ./
