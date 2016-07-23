var axios = require('axios');

var API = require('Constants');

const LMP_API_URL = API.GET_BASE_URL();

module.exports = {
  getFavoriteCards:function(){
    //logic to be added
    return[
      "794","796"
    ];
  },
  getDeletedCards:function(){
    //logic to be added
    return[
      "794","796"
    ];
  },
  getLikedCards:function(){
    //logic to be added
    return[
      "794","796"
    ];
  },
  getCardCategories:function(){
    //logic to be added
    return[
      {"Sport":1},
      {"Economie":1},
      {"People":1},
      {"UDC":1},
      {"BUZZ":1},
      {"AUTO":1}
    ];
  },
  getCardServices:function(){
    //logic to be added
    return[
      {"Sortie":1},
      {"Rencontre":0},
      {"Cinema":1}
    ];
  },

  isDeleted:function(){
    return true;
  },
  isViewed:function(){
    return true;
  },
  isLiked:function(){
    return true;
  },

  getCardTpyeFromCategory:function(category){
    console.log("getCardTpyeFromCategory recieved category->",category);
    return 'content';
  }
}
