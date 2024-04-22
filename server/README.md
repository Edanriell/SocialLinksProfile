# SocialLinksProfile Server

To run server in development mode you must:
- Configure .env file (Check out .env examples);
- Start server, use command start:dev;

To run server in production mode you must:
- Configure .env file (Check out .env examples);
- Build server, use command start:build;
- <strong>After server is built, you must copy data folder to dist !</strong>;
- Open dist folder and open there a terminal and type <strong>$env:NODE_ENV="production"; $env:PORT=3020; $env:DB_URL="mongodb://127.0.0.1:27017/SocialLinksProfile?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2"; node main.js</strong>;

Server is tested and fully working in Node v.20.11.1.