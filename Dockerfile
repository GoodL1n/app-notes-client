#STAGE 1 (BUILD)
FROM node AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


#STAGE 2
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir /etc/nginx/ssl
COPY --from=build /usr/src/app/dist/app-notes-client /usr/share/nginx/html