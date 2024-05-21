FROM node:16
WORKDIR /app/API
COPY ./package.json /app/API/
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "DEV" ];\
    then npm install;\
    else npm install --only=production;\
    fi
COPY . /app/API/
ENV PORT 3000
EXPOSE ${PORT}

