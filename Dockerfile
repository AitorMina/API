FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3003:3000
CMD [ "node", "app.js" ]

# El proceso para que todo funcione correctamente es:
# 1.- Crear dockerfile
# 2.- Crear imagen: docker build -t api.
# 3. Correr imagen: docker run -dp 3000:3000 nombreApi
# 4.- Verificar que la imagen este corriendo: docker ps o browser http://localhost:3000
# 5.- docker pull para subirla a docker hub

# 6.- nuevo commit -> volver al paso 2