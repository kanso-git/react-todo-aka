var axios = require('axios');

//http://api.openweathermap.org/data/2.5/weather?q=Orbe&APPID=c7d4832a2c992b89247a8f5c678d5c68&units=metric
const LMP_API_URL = '';

module.exports = {

  getCards:function(){
    return [

      {
        id:0,
        articleNbr:6,
        theme:'BIRTHDAY',
        isLiked:1,
        likeNbr:760,
        title:'Annik\'s Birthday',
        imageUrl:'https://image.freepik.com/free-vector/colorful-happy-birthday-card_23-2147511988.jpg',
        shortDesc:'Happy Birthday Annik from Le Matin du Soir TEAM'
      },
      {
        id:1,
        articleNbr:2,
        theme:'RENCONTRE',
        isLiked:1,
        likeNbr:76,
        title:'L\’amour avec un inconnu',
        imageUrl:'http://files.newsnetz.ch/upload//8/6/86695.jpg',
        shortDesc:'De plus en plus de femmes s’inscrivent sur les sites de rencontres passagères'
      },
      {
         id:2,
         articleNbr:1,
         theme:'FOOTBALL',
         isLiked:0,
         likeNbr:12,
         title:'Embolo: j\'ai le 36 dans le dos!',
         imageUrl:'http://files.newsnetz.ch/story/1/5/6/15633989/216/teaserbreitgross.jpg',
         shortDesc:'La période estivale des transferts bat son plein. Toutes les infos et les rumeurs dans notre live-ticker.'
      },

      {
         id:3,
         articleNbr:5,
         theme:'PEOPLE',
         isLiked:0,
         likeNbr:12,
         title:'L. DiCaprio a une nouvelle amoureuse',
         imageUrl:'http://files.newsnetz.ch/bildlegende/234061/2809685_pic_970x641.jpg',
         shortDesc:'L\'acteur a été surpris en train d\'embrasser passionnément la top Nina Agdal sur une plage de Malibu'
      },

      {
         id:4,
         articleNbr:9,
         theme:'HIGH-TECH',
         isLiked:0,
         likeNbr:12,
         title:'Un délai à Google pour s\'expliquer',
         imageUrl:'http://files.newsnetz.ch/story/2/2/1/22166690/2/topelement.jpg',
         shortDesc:'Le système d\’exploitation Android est dans le viseur de la Commission européenne depuis avril dernier'
      },

      {
         id:5,
         articleNbr:8,
         theme:'ECONOMIE',
         isLiked:0,
         likeNbr:12,
         title:"G. Sachs: Barroso n'a rien à voir avec le Brexit",
         imageUrl:'http://files.newsnetz.ch/story/1/9/2/19272172/2/teasersmall16x9.jpg',
         shortDesc:'Le système d\’exploitation Android est dans le viseur de la Commission européenne depuis avril dernier'
      },

      {
         id:6,
         articleNbr:11,
         theme:'HIGH-TECH',
         isLiked:0,
         likeNbr:12,
         title:'Un délai à Google pour s\'expliquer',
         imageUrl:'http://files.newsnetz.ch/story/2/2/1/22166690/2/topelement.jpg',
         shortDesc:'Le système d\’exploitation Android est dans le viseur de la Commission européenne depuis avril dernier'
      },
      {
         id:7,
         articleNbr:6,
         theme:'FAITS DIVERS',
         isLiked:0,
         likeNbr:12,
         title:"Retrouvé vivant dans un ravin plus tard",
         imageUrl:'http://files.newsnetz.ch/story/2/9/2/29298672/1/topelement.jpg',
         shortDesc:'Le système d\’exploitation Android est dans le viseur de la Commission européenne depuis avril dernier'
      },
      {
         id:8,
         articleNbr:16,
         theme:'BUZZ',
         isLiked:0,
         likeNbr:12,
         title:"L'ab crack est la nouvelle tendance qui agite le Web",
         imageUrl:'http://files.newsnetz.ch/bildlegende/233829/2805615_pic_970x641.jpg',
         shortDesc:'Le système d\’exploitation Android est dans le viseur de la Commission européenne depuis avril dernier'
      },
      {
         id:9,
         articleNbr:3,
         theme:'AUTO',
         isLiked:0,
         likeNbr:12,
         title:"VW paiera 14,7 milliards de dollars",
         imageUrl:'http://files.newsnetz.ch/story/3/0/6/30628757/7/teasersmall16x9.jpg',
         shortDesc:'Le système d\’exploitation Android est dans le viseur de la Commission européenne depuis avril dernier'
      },
      {
         id:10,
         articleNbr:6,
         theme:'AUTO',
         isLiked:0,
         likeNbr:12,
         title:"Le SUV Mercedes-Benz GLC devient à son tour un coupé",
         imageUrl:'http://files.newsnetz.ch/story/1/5/5/15535253/6/teasersmall16x9.jpg',
         shortDesc:"Dans cette catégorie,  Le constructeur l’a bien compris en sortant ce nouveau modèle très tendance."
      }

    ];
  }

  // getCards: function(param) {
  //   var encodedParam = encodeURIComponent(param);
  //   var requestUrl = `${LMP_API_URL}&q=${encodedParam}`;
  //   console.log("requestUrl "+requestUrl);
  //
  //   return axios.get(requestUrl).then(function(res) {
  //     if(res.data.cod && res.data.message){
  //       throw new Error(res.data.message);
  //     }else{
  //       //alert(JSON.stringify(res.data.main,null,5));
  //       return res.data.main.temp;
  //     }
  //   }, function(res){
  //    throw new Error(res.data.message);
  //   })
  // }
}
