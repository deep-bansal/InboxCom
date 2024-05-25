FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]

# docker run --name backend -v $(pwd):/app -v /app/node_modules -v logs:/app/logs --rm --network spe-net -p 8000:8000 nodes-backend

# docker run --name mongodb \
#   -e MONGO_INITDB_ROOT_USERNAME=admin \
#   -e MONGO_INITDB_ROOT_PASSWORD=secret \
#   -v data:/data/db \
#   --rm \
#   -d \
#   --network spe-net \
#   mongo