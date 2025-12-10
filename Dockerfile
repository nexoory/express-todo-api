FROM node:22-alpine

WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Открываем порт
EXPOSE 3000

# Команда запуска (будет переопределена в docker-compose для dev режима)
CMD ["npm", "start"]