# -- base --
FROM node:lts-alpine as base
WORKDIR /usr/src/app
RUN npm i -g npm @nestjs/cli

# -- dependencies --
FROM base as dependencies
COPY package.json .
COPY package-lock.json .
COPY packages/backend/package.json packages/backend/package.json
COPY packages/frontend/package.json packages/frontend/package.json
RUN npm ci --omit=dev
RUN cp -R node_modules prod_node_modules
RUN npm ci

# -- backend build --
FROM dependencies as backend_build
COPY packages/backend packages/backend
RUN npm run backend:build

# -- frontend build --
FROM dependencies as frontend_build
COPY packages/frontend packages/frontend
RUN npm run frontend:build

# -- release build --
FROM base as release_build
COPY --from=dependencies /usr/src/app/prod_node_modules node_modules
COPY --from=backend_build /usr/src/app/packages/backend/dist /usr/src/app
COPY --from=frontend_build /usr/src/app/packages/frontend/dist public

EXPOSE 3000 # TODO: change me
CMD node main.js