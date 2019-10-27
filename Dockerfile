FROM node:10.15.3 as node
WORKDIR /app
COPY package.json /app/
COPY docker/npmrc /root/.npmrc
RUN npm install --only=prod
COPY ./ /app/
ARG env=production
RUN npm version && npm run buildProd

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
