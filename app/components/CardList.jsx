var React = require('react');

var Swiper = require('swiper');
var Constants = require('Constants');
var Redaction = require('Redaction');
var Divertissement = require('Divertissement');
var Publicite = require('Publicite');
var Constants = require('Constants');


var CardList = React.createClass({
  getDefaultProps: function() {
    return {
      cards: []
    };
  },
  getInitialState:function(){
    return {
     resizeTimer:false
    };
  },
  componentDidMount:function(){
    console.log(" componentDidMount has been mounted");
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log(" shouldComponentUpdate Start");
    // if(nextState.selectedMenuItem === 'NA' ){
    //   console.log("shouldComponentUpdate NA case - YES");
    //   return true;
    // }else if(nextState.selectedMenuItem){
    //    console.log("shouldComponentUpdate menu selection - YES");
    //    return nextState.selectedMenuItem!== this.state.selectedMenuItem;
    // }
    // return false ;

     if(nextState.resizeTimer !== this.state.resizeTimer){
         console.log(" shouldComponentUpdate reload me ");
         location.reload();
     }
    return true;

  },
  componentWillReceiveProps: function(newProps){
    console.log(" componentWillReceiveProps new props have been received ");

    this.swiper? console.log("componentWillReceiveProps don't renderSwiper"):this.renderSwiper();
    $('.card-share > a').unbind( "click" );
    $('.card-share > a').on('click', function(e){
      e.preventDefault() // prevent default action - hash doesn't appear in url
      $(this).parent().find( 'div' ).toggleClass( 'card-social-active' );
      $(this).toggleClass('share-expanded');
    });
  },

  onToggle:function(flag,cardId){
    this.props.onToggle(flag,cardId);
  },
  renderSwiper:function(){

    console.log(" renderSwiper ::::: we are in renderSwiper function ...")
    // var swiperWidth= $("#swiperId").width();
    // var slidesPerView = Math.floor(swiperWidth/320);
    //     slidesPerView =(slidesPerView === 0 ?1:(slidesPerView >4?4:slidesPerView));
    //$('.swiper-container').width($("#swiperId").width());
    // this.setState({
    //   slidesPerView:slidesPerView
    // })
    //
    this.swiper = undefined;
     var slidesPerColumn = 2;
     Constants.IS_MOBILE() ?slidesPerColumn =1 :slidesPerColumn=2;
    //
    this.swiper = new Swiper('#swiperId', {
      preloadImages: false,
      centeredSlides:true,
      keyboardControl:true,
      lazyLoading: true,
      centeredSlides:true,
      slidesOffsetBefore:10,
      slidesOffsetBefore:10,
      slidesPerView:'auto',
      pagination: '.swiper-pagination',
      paginationType: 'progress',
      slidesPerColumn:slidesPerColumn
    });
    this.swiper.on('onTransitionEnd', function(_swiper){
      // _swiper.translate += (_swiper.activeIndex -1)*30;
      // _swiper.setWrapperTranslate(_swiper.translate);
    });

    $('.card-share > a').on('click', function(e){
      e.preventDefault() // prevent default action - hash doesn't appear in url
      $(this).parent().find( 'div' ).toggleClass( 'card-social-active' );
      $(this).toggleClass('share-expanded');
    });
    console.log(" renderSwiper ::::: we are done..")
  },
  render:function(){
   var that = this;
   var backgroundStyles ="swiper-container ";
       backgroundStyles +=  (/Mobi/.test(navigator.userAgent)?' cards-background' :' cards-background-desktop');

    $(window).resize(function() {
    clearTimeout($.data(this, 'resizeTimer'));
    $.data(this, 'resizeTimer', setTimeout(function() {
        that.setState({
          resizeTimer:!that.state.resizeTimer
        })
    }, 200));
    });

    var renderStartingCards = () =>{
    var {cards} =  this.props; /* Using ES6 Object destructure Operator */
      return cards.map((card) =>{
      switch (card.transient.type) {
       case Constants.REDACTION:
                return (
                      <Redaction key={card.id}  onToggle={this.onToggle} {...card}/>   /* Using ES6 Object Spread Operator */
                )
       break;
      }
     });
    };

    return(
          <div className={backgroundStyles} id="swiperId">
                <div className="swiper-wrapper ">
                    {renderStartingCards()}
               </div>
               <div className="swiper-pagination"></div>
           </div>
        )
  }

});

module.exports = CardList;
