FROM node:6.10.3

EXPOSE 8080

RUN mkdir -p /opt/api
WORKDIR /opt/api

COPY package.json /opt/api
RUN npm --no-color install --production

COPY . /opt/api/

CMD ["npm", "start"]
