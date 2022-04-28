
# Projekt - Programowanie aplikacji backendowych

Projekt ma na celu agregację newsów z różnych stron internetowych i prezentowanie ich w przejrzysty sposób. Rejestracja pozwala ustalić filtry na przeglądane newsy oraz zapis do newslettera w którym użytkownik codziennie dostaje wybrane artykuły.

Projekt składa się z trzech aplikacji:
- Aplikacja 1 - REST API jako źródło newsów - [Repozytorium](https://github.com/bartosz121/news-scraper-api)
- Aplikacja 2 - Rejestracja/logowanie użytkowników
- Aplikacja 3 - Frontend

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
|:x:|Rejestracja|
|:x:|Logowanie|

|   |Aplikacja 3|
|---|---|
|:x:|Przegląd newsów|
|:x:|Formularz rejestracji/logowania|
|:x:|Formularz zapisu do newslettera|

:x: Deployment
