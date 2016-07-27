var React = require('react');
var Article = require('Article');

var ArticleList = React.createClass({
  componentDidMount:function(){

  },
  render:function(){
    var {articles} =  this.props; /* Using ES6 Object destructure Operator */
    var renderCardArticles = () =>{
      return articles.map((article) =>{
        return (
          <Article key={article.id} {...article}/> /* Using ES6 Object Spread Operator */
        )
      });
    };
    return(
      <div className="article-wrap">
        {renderCardArticles()}
      </div>
    )
  }

});

module.exports = ArticleList;
