
# Projekt - Programowanie aplikacji backendowych

Projekt ma na celu agregację i wyszukiwanie newsów z różnych stron internetowych i prezentowanie ich w przejrzysty sposób. Rejestracja pozwala zapisywac wybrane artykuly jako bookmarki ktore pozniej mozna przegladac.

[Demo](https://newsreporter.bartoszmagiera.me/)

Projekt składa się z trzech aplikacji:
- Aplikacja 1 - REST API jako źródło newsów - [Repozytorium](https://github.com/bartosz121/news-scraper-api)
- Aplikacja 2 - Rejestracja/logowanie użytkowników - [Repozytorium](https://github.com/bartosz121/newsscraper-auth)
- Aplikacja 3 - Frontend - [Repozytorium](https://github.com/bartosz121/newsscraper-frontend)


|   |Aplikacja 1|
|:-:|---|
|:heavy_check_mark:| Podstawowe REST API  |
|:heavy_check_mark:| Uwierzytelnianie użytkownika dla requestów `POST`, `PUT`, `DELETE`  |
|:heavy_check_mark:| Dodanie bazy danych |
|:heavy_check_mark:| Scrapowanie newsów z popularnych stron internetowych |
|:heavy_check_mark:| Automatycznie dodawanie zescrapowanych newsów do bazy danych (`POST` request)  |
|:heavy_check_mark:| Paginacja |
|:heavy_check_mark:| Dodanie `Celery` - automatycznie scrapowanie co 3 godziny |
|:heavy_check_mark:| Dockerfile & docker-compose |

|   |Aplikacja 2|
|---|---|
|:heavy_check_mark:|Rejestracja|
|:heavy_check_mark:|Logowanie|
|:heavy_check_mark:|Bookmarkowanie newsów|
|:heavy_check_mark:|Dockerfile|

|   |Aplikacja 3|
|---|---|
|:heavy_check_mark:|Przegląd newsów|
|:heavy_check_mark:|Formularz rejestracji/logowania|
|:heavy_check_mark:|Wyszukiwarka newsów|
|:heavy_check_mark:|Dodawanie/usuwanie bookmarków|
|:heavy_check_mark:|Dockerfile|


:heavy_check_mark: [Deployment](https://newsreporter.bartoszmagiera.me/)
