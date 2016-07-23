var React = require('react');
var moment = require('moment');



var UserInfoAPI = require('UserInfoAPI');
// LMP is the abbreviation of 'le matin premium'
var Card = React.createClass({
  onToggle:function(flag){
     //ES6 arrow function
     return ()=> this.props.onToggle(flag);
  },
  renderPublicityCards:function(){
    return (
      <div> am a publicity card</div>
    )
  },
  renderMarketingOrServicesCards:function(){
    return (
      <div> am a Marketing or Service card</div>
    )
  },
  renderContentCards:function(){
    var { theme,title,timestamp,imageUrl,shortDesc,isLiked,likeNbr,articleNbr,category} = this.props;
    var heartClass  = "fa fa-heart";
        heartClass += (parseInt(isLiked) === 1 ?"":"-o");
        heartClass +="  LMPOrnage";
        return(
            <div className="wrapper swiper-slide">
                <div className="card cadre shadowDepth1">
                    <i className="fa fa-history history-badge LMPOrnage " aria-hidden="true"  onClick={this.onToggle('history')}></i>
                    <i className="fa fa-bookmark favorite-badge LMPOrnage" aria-hidden="true" onClick={this.onToggle('favorite')}></i>
                    <div className="card-meta-top">
                        <div className="text-left"><i className="fa fa-circle fa-lg LMPOrnage"></i>&nbsp;{category}</div>
                    </div>
                    <div className="card-image">
                        <i className="card-timestamp"> {moment({timestamp}).from()}</i>
                        <img src={imageUrl} alt="image" />
                        <div className="caption-container">
                          <p className="caption-content">
                              {title}
                          </p>
                        </div>
                    </div>
                    <div className="card-content card-padding">
                        <div className="card-share">
                            <div className="card-social">
                                <a className="share-icon facebook" href="#">
                                <span className="fa fa-facebook"></span>
                                </a>
                                <a className="share-icon twitter" href="#">
                                <span className="fa fa-twitter"></span>
                                </a>
                                <a className="share-icon googleplus" href="#">
                                <span className="fa fa-google-plus"></span>
                                </a>
                            </div>
                            <a id="share" className="share-toggle  share-icon-main" href="#"></a>
                        </div>
                        <hr>
                        </hr>
                        <article className="card-article">
                            <p>
                                {shortDesc}
                            </p>
                        </article>
                        <i className={heartClass} aria-hidden="false" onClick={this.onToggle('like')}>
                            <span className="fa-xxs LMPOrnage">&nbsp;{likeNbr}</span>
                        </i>
                        <i className="fa fa-files-o article-nbr LMPOrnage" aria-hidden="true">&nbsp;{articleNbr}</i>
                    </div>
                </div>
            </div>
          )
  },
  render:function(){
    moment.locale('fr');
    var { theme,title,imageUrl,shortDesc,isLiked,likeNbr,articleNbr,category} = this.props;
    var cardType = UserInfoAPI.getCardTpyeFromCategory(category);
    switch (cardType) {
       case 'content':
         console.log('renderContentCards');
         return(
           this.renderContentCards()
         );
        break;
       case 'publicity':
        console.log('renderPublicityCards');
        return(
          this.renderPublicityCards()
        );
       break;
       case 'marketingOrServices':
        console.log('renderMarketingOrServicesCards');
        return(
          this.renderMarketingOrServicesCards()
        );
       break;
    }
  }

});

module.exports = Card;
