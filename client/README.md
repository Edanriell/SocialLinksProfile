# SocialLinksProfile Client

To run server in development mode you must:
- Configure .env file (Check out .env examples);
- Start client, use command start:dev;

To run client in production mode you must:
- Configure .env file (Check out .env examples);
- Build client, use command start:build-only;
- Open directory with dist folder, open terminal there and run command <strong>python -m http.server 8000 --directory dist </strong>, to serve files locally;

Client is tested and is fully working in Chromium browsers, also in Firefox.