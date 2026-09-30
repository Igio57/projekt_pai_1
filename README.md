# projekt_pai_1

to jest z czata jak coś bo nie miałem pomysłu
„BookShelf” — menedżer książek

Aplikacja webowa do zarządzania własną biblioteką książek.

Każda książka może mieć:

Tytuł
Autor
Gatunek — select
Status — radio: Do przeczytania, W trakcie, Przeczytana
Ulubiona — checkbox
Rok wydania
Ocena — np. 1–5
opcjonalnie opis

Główny ekran pokazuje tabelę/karty książek, a użytkownik może je dodawać, edytować i usuwać.

Lista elementów Tabela/karty wszystkich książek: tytuł, autor, gatunek, status, ocena
Dodawanie Przycisk „Dodaj książkę” otwiera formularz
Edycja Przycisk „Edytuj” przy każdej książce
Usuwanie Przycisk „Usuń” + dialog potwierdzenia
Ten sam formularz BookForm dostaje opcjonalne book i działa zarówno dla add/edit
Reużywalny dialog Dialog używany np. do usuwania i formularza książki
Reużywalna paginacja Pagination jako osobny komponent
Wyszukiwanie Input: wyszukiwanie po tytule lub autorze
Filtrowanie Select np. po gatunku lub statusie
Sortowanie Tytuł, rok wydania lub ocena ↑/↓
Wszystko jednocześnie search → filter → sort → pagination
Maks. 5 elementów itemsPerPage = 5
Paginacja reaguje na zmiany Po add/delete/filter resetujesz lub korygujesz aktualną stronę
Controlled text title, author, description
Controlled select genre
Controlled checkbox favorite
Controlled radio status
Walidacja np. wymagany tytuł/autor, poprawny rok, ocena 1–5
Pusta lista „Nie znaleziono książek spełniających kryteria.”
Dodatkowy reusable component BookCard, FilterBar, FormField, Rating, itp.
Sensowny podział BookList, BookForm, BookDialog, Pagination, Filters itd.
