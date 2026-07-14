##[Week 7 Offline] HTTP Part 1 (Payloads, Domains, IPs, Routes)

Request URL: https://www.google.com/
Request Method: GET
Status Code:200 0K
Remote Address:142.250.193.228:443  
Referrer Policy: origin

Response Headers
Request Headers

Request responoce model : HTTP / Websockets / WebRTC / GRPC

Static/public ip addresses : only cloud providers have

ip address : all devices have it .
To check : ping www.google.com (in terminal )

Port : (www.google.com:443) => it means default is 443

443=> HTTPS(its default for 443 port)
80=> HTTP

Methods : GET POST DELETE PUT/PATCH

- its basicly a signla to the server what i am trying to do .

Routes : google.com/function

- (funciton) is the route

Responce :
-payload- u get in json form .
javascript object notaion : JSON
other example : XML ,PBF

Status Code : 403,404, 411,405,412
3 series : redirection
5 series : server down
2 series : good status code
4 series : bad

request payload :
Body : In HTTP communications, the body (or payload) refers to the part of an HTTP message that contains the actual data being sent to the server.
It is usually JSON data that is transferred to the server.

respond payload : got back form server

what we did so far.
request : domains , ips , routes, methods, body
response : payload (html,plaitext,json), status code(200)

Clients
-curl
-in termianl (curl api.orders.zepto.com -d "{orders: [{type: "lays", amount:2}]}
-postman

# Week 7 Offline — HTTP Part 1

## Topics Covered

- HTTP request–response model
- Domains and IP addresses
- Ports
- HTTP methods
- Routes
- Request and response payloads
- HTTP status codes
- HTTP clients such as cURL and Postman

---

## 1. HTTP Request–Response Model

HTTP follows a **request–response model**:

1. A **client** sends a request to a server.
2. The **server** processes the request.
3. The server sends a response back to the client.

```text
Client → HTTP Request → Server

Client ← HTTP Response ← Server
```

### Example Request Information

```text
Request URL: https://www.google.com/
Request Method: GET
Status Code: 200 OK
Remote Address: 142.250.193.228:443
Referrer Policy: origin
```

### Explanation

- **Request URL:** The URL of the resource requested by the client.
- **Request Method:** Specifies the action the client wants to perform. In this example, the method is `GET`.
- **Status Code:** Indicates whether the request was successful. `200 OK` means the request was completed successfully.
- **Remote Address:** The IP address and port number of the server.
- **Referrer Policy:** Controls how much referrer information is included when navigating from one website to another.

---

## 2. Request Headers and Response Headers

### Request Headers

Request headers contain additional information sent by the client to the server.

They may include:

- The type of content the client accepts
- Browser information
- Authentication details
- Cookies
- Content type

### Response Headers

Response headers contain additional information sent by the server to the client.

They may include:

- Response content type
- Response size
- Caching information
- Cookies
- Server information

---

## 3. Communication Models and Protocols

Some common communication technologies are:

- **HTTP** — Commonly used for communication between clients and servers.
- **WebSockets** — Used for persistent, two-way, real-time communication.
- **WebRTC** — Used for real-time audio, video, and peer-to-peer communication.
- **gRPC** — A high-performance framework commonly used for communication between backend services.

---

## 4. Domains

A domain is a human-readable name used to access a website or server.

Example:

```text
www.google.com
```

Humans use domain names because they are easier to remember than IP addresses.

The domain name is converted into an IP address through the **Domain Name System (DNS)**.

```text
www.google.com → DNS → 142.250.193.228
```

---

## 5. IP Addresses

An **IP address** is a unique numerical address used to identify a device or server on a network.

Example:

```text
142.250.193.228
```

Devices connected to a network have IP addresses.

### Public and Private IP Addresses

- **Public IP address:** Used to identify a device or service on the internet.
- **Private IP address:** Used within a local network, such as a home or office network.
- Cloud providers commonly provide static public IP addresses for hosted applications and servers.

### Checking the IP Address of a Domain

Use the `ping` command in the terminal:

```bash
ping www.google.com
```

The command resolves the domain name to an IP address and attempts to check whether the server is reachable.

---

## 6. Ports

A **port** identifies a specific application or service running on a server.

Example:

```text
www.google.com:443
```

Here:

```text
www.google.com → Domain

443 → Port number
```

Common default ports:

|  Port | Protocol |
| ----: | -------- |
|  `80` | HTTP     |
| `443` | HTTPS    |

When using HTTPS, port `443` is usually used automatically.

```text
https://www.google.com
```

is generally equivalent to:

```text
https://www.google.com:443
```

---

## 7. HTTP Methods

HTTP methods indicate the type of action the client wants the server to perform.

In simple terms, an HTTP method acts as a **signal to the server describing what the client is trying to do**.

Common HTTP methods include:

| Method   | Purpose                               |
| -------- | ------------------------------------- |
| `GET`    | Retrieve or read data                 |
| `POST`   | Create or send new data               |
| `PUT`    | Replace or update an entire resource  |
| `PATCH`  | Partially update an existing resource |
| `DELETE` | Delete a resource                     |

### Example

```http
GET /users
```

This request asks the server to return a list of users.

```http
POST /users
```

This request asks the server to create a new user using the data provided in the request body.

---

## 8. Routes

A **route** is a specific path or endpoint on a server.

Example:

```text
google.com/function
```

Here:

```text
google.com → Domain

/function → Route
```

Another example:

```text
https://example.com/users
```

Here:

```text
https:// → Protocol

example.com → Domain

/users → Route
```

Different routes can perform different functions.

Examples:

```text
/users

/products

/orders

/login
```

---

## 9. Request Payload

A **request payload** is the actual data sent by the client to the server.

The request payload is generally sent inside the **request body**.

### Request Body

In HTTP communication, the body contains the data being sent to the server.

JSON is commonly used to transfer data.

Example:

```json
{
  "product": "Lays",
  "quantity": 2
}
```

The request body is commonly used with methods such as:

- `POST`
- `PUT`
- `PATCH`

A `GET` request usually retrieves data and generally does not require a request body.

---

## 10. Response Payload

A **response payload** is the data returned by the server after processing a request.

The response may contain:

- HTML
- Plain text
- JSON
- XML
- Images
- Files
- Protocol Buffers

Example JSON response:

```json
{
  "id": 1,
  "product": "Lays",
  "quantity": 2,
  "status": "confirmed"
}
```

---

## 11. JSON

JSON stands for:

```text
JavaScript Object Notation
```

JSON is a lightweight data format commonly used to exchange data between clients and servers.

Example:

```json
{
  "name": "Rishu",
  "role": "Frontend Developer"
}
```

Other data formats include:

- **XML** — Extensible Markup Language
- **Protocol Buffers (Protobuf/PBF)** — A compact binary data format commonly used with systems such as gRPC

---

## 12. HTTP Status Codes

HTTP status codes indicate the result of an HTTP request.

Status codes are divided into different categories.

| Status-code range | Meaning                 |
| ----------------- | ----------------------- |
| `1xx`             | Informational responses |
| `2xx`             | Successful responses    |
| `3xx`             | Redirection responses   |
| `4xx`             | Client-side errors      |
| `5xx`             | Server-side errors      |

### Common Status Codes

|                 Status code | Meaning                                                    |
| --------------------------: | ---------------------------------------------------------- |
|                    `200 OK` | The request was successful                                 |
|               `201 Created` | A new resource was successfully created                    |
|     `301 Moved Permanently` | The resource has permanently moved                         |
|                 `302 Found` | Temporary redirection                                      |
|           `400 Bad Request` | The request is invalid                                     |
|          `401 Unauthorized` | Authentication is required                                 |
|             `403 Forbidden` | The client does not have permission to access the resource |
|             `404 Not Found` | The requested resource or route was not found              |
|    `405 Method Not Allowed` | The HTTP method is not supported by the requested route    |
|       `411 Length Required` | The server requires a `Content-Length` header              |
|   `412 Precondition Failed` | A condition specified in the request was not satisfied     |
| `500 Internal Server Error` | An unexpected error occurred on the server                 |
|           `502 Bad Gateway` | A server received an invalid response from another server  |
|   `503 Service Unavailable` | The server is temporarily unavailable                      |

### Simple Classification

```text
2xx → Success

3xx → Redirection

4xx → Client-side error

5xx → Server-side error
```

---

## 13. HTTP Clients

An HTTP client is a tool or application that sends HTTP requests to a server.

Examples:

- Browser
- cURL
- Postman
- Frontend applications
- Mobile applications

---

## 14. cURL

**cURL** is a command-line tool used to send HTTP requests.

### Basic GET Request

```bash
curl https://www.google.com
```

Because `GET` is the default HTTP method, it does not need to be specified explicitly.

### POST Request with JSON Data

```bash
curl -X POST https://api.example.com/orders \
-H "Content-Type: application/json" \
-d "{\"orders\":[{\"type\":\"Lays\",\"amount\":2}]}"
```

Explanation:

```text
-X POST
→ Specifies the HTTP method

-H "Content-Type: application/json"
→ Tells the server that JSON data is being sent

-d
→ Adds data to the request body
```

---

## 15. Postman

Postman is a graphical application used to create, send, test, and debug HTTP requests.

Using Postman, we can configure:

- Request URL
- HTTP method
- Request headers
- Request body
- Authentication

Postman displays:

- Response payload
- Response headers
- HTTP status code
- Response time

---

## Summary

### HTTP Request

A request may contain:

```text
Domain

IP address

Port

Route

HTTP method

Request headers

Request body or payload
```

Example:

```http
POST https://api.example.com/orders
```

```json
{
  "product": "Lays",
  "quantity": 2
}
```

### HTTP Response

A response may contain:

```text
Response payload

Response headers

HTTP status code
```

Example:

```text
Status Code: 200 OK
```

```json
{
  "message": "Order created successfully"
}
```

### Complete Flow

```text
Client
   ↓
Domain
   ↓
DNS resolves the domain to an IP address
   ↓
Server IP address and port
   ↓
HTTP method and route
   ↓
Request headers and request body
   ↓
Server processes the request
   ↓
Status code, response headers, and response payload
   ↓
Client
```

Week 8 - Web Development | HTTP Part 2 - Headers, Params and Express — Writing your first HTTP server | 06/03/2026
