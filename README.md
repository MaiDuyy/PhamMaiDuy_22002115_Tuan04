# PhamMaiDuy_22002115_Tuan04

Repo nay gom Dockerfile cho Bai 1 den Bai 10.

- `Bai03`: React + Vite voi `node:18-alpine`
- `Bai04`: Trang web tinh voi `nginx:latest`
- `Bai05`: Ung dung Go don gian
- `Bai06`: Node.js multi-stage build
- `Bai07`: Python doc bien moi truong `APP_ENV`
- `Bai08`: PostgreSQL tuy chinh voi file SQL khoi tao
- `Bai09`: Redis voi `redis.conf`
- `Bai10`: PHP + Apache, phu hop mount source tu host

## Lenh Docker cho tung bai

### Bai 03 - React + Vite

Build tu thu muc goc repo:

```bash
docker build -t bai03-react ./Bai03
docker run -p 5173:5173 bai03-react
```

Neu muon build truc tiep trong `Bai03/my-react-app`:

```bash
docker build -t bai03-react ./Bai03/my-react-app
docker run -p 5173:5173 bai03-react
```

### Bai 04 - Web tinh voi Nginx

```bash
docker build -t bai04-nginx ./Bai04
docker run -p 8080:80 bai04-nginx
```

### Bai 05 - Ung dung Go

```bash
docker build -t bai05-go ./Bai05
docker run -p 8080:8080 bai05-go
```

### Bai 06 - Node.js Multi-stage Build

```bash
docker build -t bai06-node ./Bai06
docker run -p 3000:3000 bai06-node
```

### Bai 07 - Python su dung ENV

```bash
docker build -t bai07-python-env ./Bai07
docker run --rm bai07-python-env
```

### Bai 08 - PostgreSQL tuy chinh

```bash
docker build -t bai08-postgres ./Bai08
docker run -d --name bai08-postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 bai08-postgres
```

### Bai 09 - Redis voi cau hinh tuy chinh

```bash
docker build -t bai09-redis ./Bai09
docker run -p 6379:6379 bai09-redis
```

### Bai 10 - PHP voi Apache

Chay bang `docker run` va mount source tu host:

```bash
docker build -t bai10-php-apache ./Bai10
docker run -p 8080:80 -v ${PWD}/Bai10:/var/www/html bai10-php-apache
```

Hoac dung Docker Compose trong thu muc `Bai10`:

```bash
docker compose -f ./Bai10/docker-compose.yml up --build
```
