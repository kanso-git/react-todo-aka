var React = require('react');
// LMP is the abbreviation of 'le matin premium'
var Card = React.createClass({
  toggleLike:function(){
   alert('toggleLike');
  },
  render:function(){
    var { theme,title,imageUrl,shortDesc,isLiked,likeNbr} = this.props;
    var heartClass  = "fa fa-heart";
        heartClass += (parseInt(isLiked) === 1 ?"":"-o");
        heartClass +=" fa-lg LMPOrnage";

    return(
        <div className="wrapper swiper-slide">
            <div className="card radius shadowDepth1">
                <div className="card-meta-top">
                    <div className="text-left"><i className="fa fa-circle LMPOrnage"></i>&nbsp;{theme}</div>
                </div>
                <div className="card-image border-tlr-radius">
                    <img src={imageUrl} alt="image" className="border-tlr-radius"/>
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
                        <a id="share" className="share-toggle share-icon" href="#"></a>
                    </div>
                    <i className={heartClass} aria-hidden="true" onClick={this.toggleLike}></i>
                    <i className="fa fa-heart fa-xxs LMPOrnage" aria-hidden="false">&nbsp;{likeNbr} j'aime</i>
                    <hr>
                    </hr>
                    <article className="card-article">
                        <p>
                            {shortDesc}
                        </p>
                    </article>
                </div>
            </div>
        </div>
      )
  }

});

module.exports = Card;
