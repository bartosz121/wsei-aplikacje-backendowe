
# Newsscraper frontend

Frontend for [news-scraper-api](https://github.com/bartosz121/news-scraper-api) using [newsscraper-auth](https://github.com/bartosz121/newsscraper-auth) as auth service

[Demo](https://newsreporter.bartoszmagiera.me/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Get your own `VITE_ST_APPNAME`, `VITE_ST_APIDOMAIN` and `VITE_ST_WEBSITEDOMAIN` from [supertokens](https://supertokens.com/)

If you are running this together with [newsscraper-auth](https://github.com/bartosz121/newsscraper-auth) - `VITE_ST_APIDOMAIN` should point to the auth service

```bash
VITE_ST_APPNAME=
VITE_ST_APIDOMAIN=
VITE_ST_WEBSITEDOMAIN=
VITE_NEWSSCRAPER_API_URL=
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/bartosz121/newsscraper-frontend
```

Go to the project directory

```bash
  cd https://github.com/bartosz121/newsscraper-frontend
```

Make sure you created .env file

Build and run the container

```bash
  docker build -t "newsscraper_frontend" .

  docker run -d --name "newsscraper_frontend" -p 80:80 newsscraper_frontend
```

App should be running on localhost at port 80
