var axios = require('axios');
var API = require('Constants');
//http://api.openweathermap.org/data/2.5/weather?q=Orbe&APPID=c7d4832a2c992b89247a8f5c678d5c68&units=metric
const LMP_API_URL = API.GET_BASE_URL();

module.exports = {

  getCards:function(){
    console.log("BASE URL IS:"+LMP_API_URL);
    return [
      {
        id:1,
        articleNbr:2,
        timestamp:1469095156,
        category:'Economie',
        isLiked:1,
        likeNbr:76,
        title:'L\’amour avec un inconnu',
        imageUrl:'http://files.newsnetz.ch/upload//8/6/86695.jpg',
        shortDesc:'De plus en plus de femmes s’inscrivent sur les sites de rencontres passagères'
      },
      {
         id:2,
         articleNbr:1,
         timestamp:1469095156,
         category:'Economie',
         isLiked:0,
         likeNbr:12,
         title:'Embolo: j\'ai le 36 dans le dos!',
         imageUrl:'http://files.newsnetz.ch/story/1/5/6/15633989/216/teaserbreitgross.jpg',
         shortDesc:'La période estivale des transferts bat son plein. Toutes les infos et les rumeurs dans notre live-ticker.'
      },

      {
         id:3,
         articleNbr:5,
         timestamp:1469268670,
         category:'People',
         isLiked:0,
         likeNbr:12,
         title:'L. DiCaprio a une nouvelle amoureuse',
         imageUrl:'http://files.newsnetz.ch/bildlegende/234061/2809685_pic_970x641.jpg',
         shortDesc:'L\'acteur a été surpris en train d\'embrasser passionnément la top Nina Agdal '
      },

      {
         id:4,
         articleNbr:9,
         timestamp:1469268670,
         category:'Sport',
         isLiked:0,
         likeNbr:12,
         title:'Un délai à Google pour s\'expliquer',
         imageUrl:'http://files.newsnetz.ch/story/2/2/1/22166690/2/topelement.jpg',
         shortDesc:'Le système d\’exploitation Android est dans le viseur de la Commission européenne'
      },

      {
         id:5,
         articleNbr:8,
         timestamp:1369268670,
         category:'People',
         isLiked:0,
         likeNbr:12,
         title:"Barroso n'a rien à voir avec le Brexit",
         imageUrl:'http://files.newsnetz.ch/story/1/9/2/19272172/2/teasersmall16x9.jpg',
         shortDesc:'Le système d\’exploitation Android est dans le viseur depuis avril dernier'
      },

      {
         id:6,
         articleNbr:11,
         timestamp:1469268670,
         category:'Sport',
         isLiked:0,
         likeNbr:12,
         title:'Un délai à Google pour s\'expliquer',
         imageUrl:'http://files.newsnetz.ch/story/2/2/1/22166690/2/topelement.jpg',
         shortDesc:'Le viseur de la Commission européenne depuis avril dernier'
      },
      {
         id:7,
         articleNbr:6,
         category:'People',
         timestamp:1469095156,
         isLiked:0,
         likeNbr:12,
         title:"Retrouvé vivant dans un ravin plus tard",
         imageUrl:'http://files.newsnetz.ch/story/2/9/2/29298672/1/topelement.jpg',
         shortDesc:'Android est dans le viseur de la Commission européenne depuis avril dernier'
      },
      {
         id:8,
         articleNbr:16,
         timestamp:1469095156,
         category:'BUZZ',
         isLiked:0,
         likeNbr:12,
         title:"La nouvelle tendance qui agite le Web",
         imageUrl:'http://files.newsnetz.ch/bildlegende/233829/2805615_pic_970x641.jpg',
         shortDesc:'Android est dans le viseur de la Commission européenne depuis avril dernier'
      },
      {
         id:9,
         articleNbr:3,
         timestamp:1469095156,
         category:'AUTO',
         isLiked:0,
         likeNbr:12,
         title:"VW paiera 14,7 milliards de dollars",
         imageUrl:'http://files.newsnetz.ch/story/3/0/6/30628757/7/teasersmall16x9.jpg',
         shortDesc:'Android est dans le viseur de la Commission européenne depuis avril dernier'
      },
      {
         id:10,
         articleNbr:6,
         timestamp:1469268670,
         category:'AUTO',
         isLiked:0,
         likeNbr:12,
         title:"Le SUV Mercedes-Benz GLC devient",
         imageUrl:'http://files.newsnetz.ch/story/1/5/5/15535253/6/teasersmall16x9.jpg',
         shortDesc:"Dans cette catégorie, ce nouveau modèle très tendance."
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

  // {
  //    "id": 657,
  //    "title": "Post avec tous les modules - non publique",
  //    "subtitle": null,
  //    "isLocked": false,
  //    "isDiscovery": true,
  //    "category": "economie",
  //    "published_date": "2016-06-30 09:08:44",
  //    "tag": "didier drogba",
  //    "withSameTag": 1,
  //    "numberOfLike": "2",
  //    "permalink": "http://premium-lematin.xyz/post-de-sport/",
  //    "card": {
  //       "image": "http://premium-lematin.xyz/wp-content/uploads/2016/06/2016-04-17.jpg",
  //       "text": "<p>dasdasdasdasd</p>\n",
  //       "buttonUrl": "",
  //       "buttonText": "",
  //       "options": {
  //          "shareOptions": 1,
  //          "swipeUp": 1,
  //          "swipeDown": 1,
  //          "navigation": 1,
  //          "doubleClick": 1,
  //          "history": 1
  //       }
  //    }
  // }
}
