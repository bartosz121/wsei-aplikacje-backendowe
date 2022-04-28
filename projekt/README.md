
# Projekt - Programowanie aplikacji backendowych

Projekt ma na celu agregację newsów z różnych stron internetowych i prezentowanie ich w przejrzysty sposób. Rejestracja pozwala ustalić filtry na przeglądane newsy oraz zapis do newslettera w którym użytkownik codziennie dostaje wybrane artykuły.

Projekt składa się z trzech aplikacji:
- Aplikacja 1 - REST API jako źródło newsów - [Repozytorium](https://github.com/bartosz121/news-scraper-api)
- Aplikacja 2 - Rejestracja/logowanie użytkowników
- Aplikacja 3 - Frontend

|   |Aplikacja 1|
|:-:|---|
|[x]| Podstawowe REST API  |
|[x]| Uwierzytelnianie użytkownika dla requestów `POST`, `PUT`, `DELETE`  |
|[x]| Dodanie bazy danych |
|[x]| Scrapowanie newsów z popularnych stron internetowych |
|[x]| Automatycznie dodawanie zescrapowanych newsów do bazy danych (`POST` request)  |
|[x]| Paginacja |
|[x]| Dodanie `Celery` - automatycznie scrapowanie co 3 godziny |
|[x]| Dockerfile & docker-compose |

|   |Aplikacja 2|
|---|---|
|[ ]|Rejestracja|
|[ ]|Logowanie|

|   |Aplikacja 3|
|---|---|
|[ ]|Przegląd newsów|
|[ ]|Formularz rejestracji/logowania|
|[ ]|Formularz zapisu do newslettera|

[ ] Deployment
