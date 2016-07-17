var React = require('react');

var ArticleList = require('ArticleList');

var Detail = React.createClass({
  getInitialState:function(){
    return {
      articles:[
        {
          id:1,
          title:'RENCONTRE',
          imageUrl:'http://files.newsnetz.ch/upload//8/6/86695.jpg',
          shortDesc:'L’amour avec un inconnu - De plus en plus de femmes s’inscrivent sur les sites de rencontres passagères '
        },
        {
           id:2,
           title:'FOOTBALL',
           imageUrl:'http://files.newsnetz.ch/story/1/5/6/15633989/216/teaserbreitgross.jpg',
           shortDesc:'La période estivale des transferts bat son plein. Toutes les infos et les rumeurs dans notre live-ticker.'
        }
      ]
    }
  },
  render:function(){
    var {atricles} = this.state;
    return(
      <div>
        <ArticleList articles={article} />
      </div>
    )
  }

});

module.exports = Detail;
