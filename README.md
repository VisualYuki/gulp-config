# Front end

## Начальная настройка
1. `` $ npm install `` - установить node_modules P.S должна быть установлена node.js глобально
2. `` $ npm run getLibs или gulp getLibs `` - скачать .js и .css файлы из библиотек из node_modules P.S все файлы .css нужно переименовать .less
2. `` $ npm update --save`` - обновить пакеты до актуальной версии

## Gulp задачи
1. `` $ gulp dev  или npm run dev`` - запуск сервера для разработки и отслеживания файлов (development mode) 
2. `` $ gulp build или npm run build`` - очистка папки dist и полная компиляцией всех файлов из папки src в dist (production mode)

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
 

