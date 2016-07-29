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

  IS_MOBILE:function(){
    return false;
  }
}
