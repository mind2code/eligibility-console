### STAGE 1: Build ###
FROM node:24-bullseye AS build
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY package.json .
RUN npm install
COPY . .
RUN ng build --configuration=production --output-path=dist/eligibility-console
 
### STAGE 2: Run ###
FROM nginx:1.25.2-alpine-slim
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/eligibility-console/browser /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
