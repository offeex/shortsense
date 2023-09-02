FROM node:16-alpine

WORKDIR /usr/app

# first copy just the package and the lock file, for caching purposes
COPY package.json ./
COPY yarn.lock ./

# install dependencies
RUN yarn
RUN npx prisma generate

# copy the entire project
COPY . .

# build
RUN yarn build

CMD [ "yarn", "start" ]
