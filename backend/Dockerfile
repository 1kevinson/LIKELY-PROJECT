FROM oven/bun

LABEL author="Kevin Kouomeu"
LABEL version="1.0"
LABEL description="Likely backend service"

WORKDIR /app

COPY package.json .

RUN npm install

COPY src src

ENV NODE_ENV production
CMD ["bun", "src/index.js"]

EXPOSE 3000