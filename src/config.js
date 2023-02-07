//contiene los datos para conectarse a las bases de datos o persistencia que corresponda
import { config } from "dotenv";
config();
const URL = process.env.MONGODB_URI

export default {
  //File System 
  fileSystem: {
    path: "db",
  },
  //MongoDB
  mongoDb: {
    connectionString: URL,
  },
  //Firebase
  firebase: {
    type: "service_account",
    project_id: "mcuadros83-test",
    private_key_id: "49ca4307623b342fe3fce1fe6ae2f57e0c98c714",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLoG2by1H6PQ3w\nW6Z4idfLGAWTLi9PUsnxZGEE8TK555emCfX8g9OqP5ZdZzjx86dMK6iHxru3NJ5U\np5LHqTeyIiuZ3mGuDGXIfFKfLrCxN663uWbajWzJ4mwAlu2Ol/taNkMTkvOjx6Oy\nfg+9RQdnvRnOee+z0FJgE+bSDNlF9NFCzG80LrSsefKW2e4C8v/VPaOxW/kXDYSX\nkcF8KlCyF9JNZhC6VNpM/HrUmfzwynbVy0djB9IvN52XY/dGDa21ou3TL2qjljJW\nhVFApwgNvnByxBOPwDayHOk2XproWzRKJ/s2mp0xrPRT4WF+dMQx6x9yAKibv6qx\nNA5GPeDvAgMBAAECggEABgJx6a9U996AavpmzdeSRlIAVskop/Motuvq+cMykjkA\nXpacVhD/7gjauQlNrW+u8s5hDBd0kndw6s0CmyDmiLvTGe3tvRNsQj/6YkH1q1fv\nhfLoqFo/KTAlAYQddmAMO4Euy++XgDBpUjW/5NVE3ti+X7vKiWiEXdszLI9+Lr8k\nOVLuzUh9YJp2jJkaAFSjni8fgKWkYx5blM1zrUSPl1G9j7BChLsnADo6tEpnAVW6\n0sWcFRkFdFXl89fAKr7AK5Fsp50OYqBEGgLTBeocKOgjqrcseNFTKwtPYdFAGV+1\nkAAC+YkrWnpXmrQNDC19F+qNlfvvfcDwDU8QkdwjwQKBgQD7zjwKmB2ptQeARNw7\nbe1jTMMvPeJ4ZRSLYJ/HwPKfc1W3ed+ETBO8Y37CnUiJQhTonJoKj5mNYTkLTDAl\nmQQWFplhLgNn7P+n+MbqUhRN9LD1IwvNp0caxXV4BNvK/THXfxz0tKEdmBuZ1RHW\n4re12ui14qBIxbaW9k4gzcNLwQKBgQDPBL73RsSm2TPdoaZZ3jJVMbVqzCJt9EuD\n/dQyrovHlc4ZUEX/S6R8bkIwrh3Fg4H7TqSbFJ/wlBubkimxRWm9FINxSVUhLN92\nA0QC/je+cPx2zvUy0+si4/csv4MhzxVL+mq+p15NgWMEi7HniWFXTZe7hzCH2VTr\n0F5dw2MYrwKBgBKbk+5IfXCsEwjUjd3Kas96vbXBAfpZpeIC2uvdA1DrKftsAyt4\nn8C9LYHeM50JCBiEchGzuOostBV0pN4yZ43mT6FR0Cie5+mWxcRNGnkESwticp3Y\n7bU5wEuFOGTQvx0opJAkxP813VxJ1Y6mpGLI8Yd3Xtbh3XNccjuUWQlBAoGBAKWL\n7gpgFTI3zzoU4qpK/YUTUzgsNfwnt5u9h8tfuXfJXB7yCoe1Pbwjj9rN4hDosTD+\nGrPJMn14cvtdTunr0DrcBKC7O9Bjye7dfa3HDVzFjZ6UsZAL16T3F9o46+xFZYp0\nnpgHz2m7Zitkasf1HFpsOkJEQZLhQP+yiUQB02URAoGAaenKlU5gYmqrq4htiU7U\nqmIgDSxqhjw+UmH8X20auoZLls84dhcV1G4k5An0MKpK9hiX0V2puGSiswr3sTTm\ncUj4Zrj6WDA7cORk7it0rtjIxV/dhY69ZyRh7gyfDeTAkqPA6pM3yBnFhMVUq2cl\nhURdAgtSvhklx7QQbRV164Q=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-wjslw@mcuadros83-test.iam.gserviceaccount.com",
    client_id: "111684585489664633387",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wjslw%40mcuadros83-test.iam.gserviceaccount.com"
  },
};


