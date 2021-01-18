FROM node:14

RUN mkdir /code

WORKDIR /code

COPY [".", "."]

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "dev"]