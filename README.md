<a id="readme-top"></a>

<!-- PROJECT LOGO -->

<div align="center">

  <a href="https://github.com/dangor220/cartly/tree/main/src">
    <img src="assets/readme/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Cartly: интернет-магазин с каталогом, авторизацией и корзиной для гостей и пользователей</h3>

  <p align="center">Учебное веб-приложение, в котором можно просматривать товары, добавлять их в корзину без регистрации, а после входа сохранять корзину в аккаунте.
    <br />
    <br />
    <a href="https://github.com/dangor220/cartly/tree/main/src">Посмотреть код</a>
    <br />
    <br />
    <a href="#">Открыть демо</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#описание">Описание</a>
      <ul>
        <li><a href="#возможности">Возможности</a></li>
        <li><a href="#технологии">Технологии</a></li>
        <li><a href="#структура-проекта">Структура проекта</a></li>
      </ul>
    </li>
    <li><a href="#установка-и-запуск">Установка и запуск</a></li>
    <li><a href="#материалы">Материалы</a></li>
    <li><a href="#контакты">Контакты</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Описание

[![Product Name Screen Shot][product-screenshot]](https://github.com/dangor220/cartly)

Cartly — одностраничное приложение интернет-магазина, разработанное на React, TypeScript и Vite. Данные о товарах, пользователях и корзинах хранятся в Supabase (PostgreSQL). Пользователь просматривает каталог, открывает быстрый просмотр товара в модальном окне или отдельную страницу товара и добавляет позиции в корзину.

Гость может собирать корзину без регистрации: она хранится в `localStorage`. После входа гостевые позиции переносятся в базу данных и привязываются к аккаунту, поэтому корзина доступна с любого устройства. В шапке рядом со ссылкой на корзину отображается счётчик товаров, а на странице корзины можно менять количество, удалять позиции и видеть итоговую сумму.

[![Product Name Screen Shot 2][product-screenshot-2]](https://github.com/dangor220/cartly)

<p align="right">(<a href="#readme-top">В начало</a>)</p>

### Возможности

- Регистрация, вход и выход через Supabase Auth
- Восстановление сессии после перезагрузки страницы
- Валидация форм с помощью React Hook Form и Zod
- Каталог товаров: подборка на главной и полный список на отдельной странице
- Быстрый просмотр товара в модальном окне и страница товара
- Корзина для гостей на основе `localStorage`
- Корзина для авторизованных пользователей в базе данных
- Автоматический перенос гостевой корзины в аккаунт после входа
- Изменение количества и удаление товаров на странице корзины
- Счётчик товаров в шапке
- Защита данных на уровне базы: пользователь видит только свои позиции корзины

<p align="right">(<a href="#readme-top">В начало</a>)</p>

### Технологии

[![react][react.js]][react-url]
[![typescript][typescript.ts]][typescript-url]
[![vite][vite.js]][vite-url]
[![tailwindcss][tailwind.css]][tailwind-url]
[![react router][router.rr]][router-url]
[![supabase][supabase.sb]][supabase-url]
[![zod][zod.zd]][zod-url]

<p align="right">(<a href="#readme-top">В начало</a>)</p>

### Структура проекта

```
src/
├── app/        # каркас приложения: провайдеры, роутер, layout, шапка
├── pages/      # страницы, привязанные к маршрутам
├── features/   # логика по доменам: auth, products, cart
└── shared/     # переиспользуемые компоненты и утилиты
```

Зависимости направлены в одну сторону: `app → pages → features → shared`.

<p align="right">(<a href="#readme-top">В начало</a>)</p>

## Установка и запуск

1. Клонируйте репозиторий

   ```sh
   git clone https://github.com/dangor220/cartly.git
   ```

2. Перейдите в папку проекта и установите зависимости

   ```sh
   cd cartly
   npm install
   ```

3. Создайте файл `.env.local` в корне проекта и укажите данные вашего проекта Supabase

   ```sh
   VITE_SUPABASE_URL=
   VITE_SUPABASE_PUBLISHABLE_KEY=
   ```

   Используйте только публичный (publishable) ключ. Секретные ключи в клиентский код добавлять нельзя.

4. Создайте в Supabase таблицы `products` и `cart_items` с политиками доступа

5. Запустите приложение в режиме разработки

   ```sh
   npm run dev
   ```

6. Откройте в браузере адрес [http://localhost:5173](http://localhost:5173)

Для сборки production-версии используйте команду `npm run build`.

<p align="right">(<a href="#readme-top">В начало</a>)</p>

## Материалы

- [Код](https://github.com/dangor220/cartly/tree/main/src)
- [Репозиторий проекта](https://github.com/dangor220/cartly)

<p align="right">(<a href="#readme-top">В начало</a>)</p>

<!-- CONTACT -->

## Контакты

- Гордеев Данил Александрович - [@dangor220](https://t.me/dangor220)
- Почта - [dan.gor220@yandex.ru](mailto:dan.gor220@yandex.ru)

- Ссылка на проект: [https://github.com/dangor220/cartly](https://github.com/dangor220/cartly)

<p align="right">(<a href="#readme-top">В начало</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: assets/readme/product.png
[product-screenshot-2]: assets/readme/product-2.png
[react.js]: https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react
[react-url]: https://react.dev/
[typescript.ts]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript
[typescript-url]: https://www.typescriptlang.org/
[vite.js]: https://img.shields.io/badge/vite-20232A?style=for-the-badge&logo=vite
[vite-url]: https://vite.dev/
[tailwind.css]: https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss
[tailwind-url]: https://tailwindcss.com/
[router.rr]: https://img.shields.io/badge/react_router-20232A?style=for-the-badge&logo=reactrouter
[router-url]: https://reactrouter.com/
[supabase.sb]: https://img.shields.io/badge/supabase-20232A?style=for-the-badge&logo=supabase
[supabase-url]: https://supabase.com/
[zod.zd]: https://img.shields.io/badge/zod-20232A?style=for-the-badge&logo=zod
[zod-url]: https://zod.dev/
