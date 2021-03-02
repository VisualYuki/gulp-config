$(document).ready(function () {
   //try {
   //   let mapData = $("#restaurants-map").data("config");
    
   //   if($(window).width() < 768) {
   //      mapData.zoom  = mapData.zoom - 3;
   //   }

   //   ymaps.ready(init);

   //   function init() {
   //      let myMap = new ymaps.Map("restaurants-map", {
   //         center: [mapData.lat, mapData.long],
   //         zoom: mapData.zoom,

   //         controls: ["zoomControl"], // включение контролов, которые нужны на карте
   //         behaviors: ["drag", "dblClickZoom"], // отключение поведения по умолчанию
   //      });

   //      for (let i = 0; i < mapData.labels.length; i++) {
   //         let myPlaceMark = new ymaps.Placemark(
   //            [mapData.labels[i].lat, mapData.labels[i].long],
   //            {
   //               balloonContentBody: "",
   //            },
   //            {
   //               iconLayout: "default#image",
   //               iconImageHref: "/svg/map-location.svg",
   //               iconImageSize: [50, 50],
   //               iconImageOffset: [0, 0],
   //            }
   //         );
   //         myMap.geoObjects.add(myPlaceMark);
   //      }
   //   }
   //} catch {}
});
