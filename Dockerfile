FROM node:20-alpine AS build


# the dist is what the app builds when we hit buld
WORKDIR /dist/src/app



# First . means Copy Where the docker file is located
# Second . means The copy destination would be the current (WORKDIR)working directory 

COPY . .

RUN rm package-lock.json
RUN npm install
RUN npm run build --prod

FROM nginx:latest AS ngiXX

# NOTE: This path may change according to your project's output folder 
COPY --from=build /dist/src/app/dist/* /usr/share/nginx/html
# COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY /nginx.conf  /etc/nginx/conf.d/default.conf 
# Exposing a port, here it means that inside the container 
EXPOSE 80