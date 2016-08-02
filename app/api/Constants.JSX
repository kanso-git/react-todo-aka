/*
   please put all the resusable constants here
   also all the wording used accorssed the app.

*/
module.exports = {
  BASE_URL:"https://lmpapp-api.herokuapp.com/wp-json/",
  SESSION_DURATION_USERINFO: 120,
  PUBLICITE_STR:'Publicite',
  REDACTION:'R',
  PUBLICITE:'P',
  DIVERTISSEMENT:'D',
  UNKNOWN:'U',
  TOGGLE_LIKE:'toggleLike',
  TOGGLE_HISTORY:'toggleHistory',
  TOGGLE_FAVORITE:'toggleFavorite',
  TOGGLE_SHARE:'toogleShare',
  SUJET_ACTUEL :'Sujet Actuel',
  CARD_HEIGHT:430,
  CARD_WIDTH:270,
  MARGIN_BTW_CARDS:10,
  MENU_RIGHT:'right',
  MENU_LEFT:'left',
  DEFAULT_LEFT_MENU:'main',
  MAIN_LEFT_MENU:'main',
  INTERESTS_LEFT_MENU:'interests',
  SERVICES_LEFT_MENU:'services',
  SUJET_ACTUEL_LEFT_MENU:'sujet_actuel',
  FAVORITE_LEFT_MENU:'favoris',
  HISTORY_LEFT_MENU:'history',
  HOME_TITLE:'le matin du soir',

  IS_MOBILE:{
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
    }
  }
}
