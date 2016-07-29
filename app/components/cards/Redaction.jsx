var React = require('react');
var moment = require('moment');

// LMP is the abbreviation of 'le matin premium'
var Constants = require('Constants');
var Redaction = React.createClass({
  onToggle:function(flag){
     //ES6 arrow function
     var {id} = this.props;
     return ()=> this.props.onToggle(flag,id);
  },

  render:function(){
    moment.locale('fr');
    var { title,isLocked,isDiscovery,published_date,tag,card,withSameTag,numberOfLike,card,transient} = this.props;

    var currentElapsedTime = moment( moment(published_date)).from();

    var heartClass  = "fa fa-heart";
        heartClass += (transient.liked === true ? "":"-o");
        heartClass +="  LMPOrnage heart-icon";

    var cardRibbon  = "card-ribbon"
        cardRibbon += (isDiscovery ? " ":" hide");


    var viewedClass  = "fa fa-history history-badge LMPOrnage "
        viewedClass  += (transient.viewed === true ? " " : " hide");

    var favoritedClass  = "fa favorite-badge fa-bookmark "
        favoritedClass += "  LMPOrnage"
        favoritedClass += (transient.favorited === true  ? " ":" hide");


        return(
            <div className="card-wrapper swiper-slide "   >
                <span className={cardRibbon} > {Constants.SUJET_ACTUEL} <span className="arrow"></span> </span>
                  <i className={viewedClass} aria-hidden="true"  onClick={this.onToggle(Constants.TOGGLE_HISTORY)}></i>
                  <i className={favoritedClass} aria-hidden="true" onClick={this.onToggle(Constants.TOGGLE_FAVORITE)}></i>
                <div className="card cadre shadowDepth1">
                    <div className="card-meta-top">
                        <div className="text-left"><i className="fa fa-circle fa-lg LMPOrnage"></i>&nbsp;{title}</div>
                    </div>
                    <div className="card-image">
                        <i className="card-timestamp"> {currentElapsedTime}</i>
                        <img src={card.image} alt="image" />
                        <div className="caption-container">
                          <p className="caption-content">
                              {tag}
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
                                {card.text}
                            </p>
                        </article>
                        <i className="fa fa-files-o article-nbr LMPOrnage" aria-hidden="true">&nbsp;{withSameTag}</i>
                        <i className={heartClass} aria-hidden="false" onClick={this.onToggle(Constants.TOGGLE_LIKE)}>
                              <span className="fa-xxs LMPOrnage">&nbsp;{numberOfLike}</span>
                        </i>
                    </div>
                </div>
            </div>
          )

  }

});

module.exports = Redaction;
