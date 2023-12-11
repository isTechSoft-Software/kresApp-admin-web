FROM node:16-alpine
WORKDIR /kresappadminweb
COPY . .
RUN npm install --legacy-peer-deps
CMD npm run build; npm run preview
