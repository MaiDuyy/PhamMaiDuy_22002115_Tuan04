FROM golang:1.22-alpine

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY main.go ./
RUN go build -o hello-go .

EXPOSE 8080

CMD ["./hello-go"]
