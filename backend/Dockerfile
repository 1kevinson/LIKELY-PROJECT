FROM oven/bun:1-alpine

LABEL description="Likely backend service"

WORKDIR /app

COPY package.json .

RUN bun install
RUN bun install --frozen-lockfile --production

COPY . .

ENV NODE_ENV production
CMD ["bun", "src/index.js"]

EXPOSE 3000