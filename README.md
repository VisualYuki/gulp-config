# Front end

## Начальная настройка
1. `` $ npm run start `` -- скачать node_modules, обновить версии пакетов, получить js плагины, запуск сервера

## Gulp задачи
   ### Development mode
      1. `` $ npm run dev`` - запуск сервера для разработки и отслеживания файлов (без минификации)
      2. `` $ npm run dev:build`` - тоже самое, что npm run dev, только не запускается сервер
   ### Production mode
      1. `` $ npm run prod:dev`` - запуск сервера для разработки и отслеживания файлов (уже с минификацией файлов)
      2. `` $ npm run prod:build`` - тоже самое, что npm run prod:dev, только не запускается сервер
   ### Алгоритм запуска
      -- Сначала запускаем npm run dev и когда задача закрыта запускаем npm run prod:build.
   ### Особенности
      -- Если нужно поменять папку, куда будут идти скомпилированные файлы, то в gulp/config.js есть переменная outDir = "dist";
## Библиотеки
1. fancybox - модальные окна (http://fancyapps.com/fancybox/3/docs)
2. slick-slider - слайдер (https://kenwheeler.github.io/slick/)
3. 


## Помощь
Если совсем что-то непонятно, то можно мне написать vk - https://vk.com/moshkin_denis, или telegram - @denis_moshkin

## Особенности

1. svg-спрайты генерируеться gulp-ом 
   1. Добавить svg иконку в папку src/svg
   2. использовать иконку через конструкцию: 
      ```
      <svg class="svg-'название-файла-иконки'-dim"> //нужно чтобы задать ширину и высоту иконки
         <use xlink:href="#название-файла-иконки"></use>
      </svg>
      ```
      Пр.
      ```
      <svg class="svg-list-dim"> //нужно чтобы задать ширину и высоту иконки
         <use xlink:href="#list"></use>
      </svg>
      ```
        
2. 
 

