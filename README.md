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
   1-1. стили находяться в /src/less/utils/sprite.less
   1-2. svg картинки находяться в /dist/svg-sprite/sprite.svg
2. 
 

