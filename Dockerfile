FROM keymetrics/pm2:8-alpine

WORKDIR /app

COPY . /app

RUN apk --update add git

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
RUN npm run build

RUN pm2 install vmarchaud/pm2-githook
RUN pm2 set pm2-githook:port 3031
RUN ./.githook.sh

EXPOSE 3030
EXPOSE 3031

CMD ["pm2-runtime", "start", "pm2.json"]
