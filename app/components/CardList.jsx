var React = require('react');

var Swiper = require('swiper');
var Constants = require('Constants');
var Redaction = require('Redaction');
var Divertissement = require('Divertissement');
var Publicite = require('Publicite');




var CardList = React.createClass({

  getInitialState:function(){
    return {
     resizeTimer:false
    };
  },
  componentDidMount:function(){
    console.log("CardList - componentDidMount has been mounted -> renderSwiper");
    this.renderSwiper();
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log("CardList - shouldComponentUpdate Start");
    // if(nextState.selectedMenuItem === 'NA' ){
    //   console.log("shouldComponentUpdate NA case - YES");
    //   return true;
    // }else if(nextState.selectedMenuItem){
    //    console.log("shouldComponentUpdate menu selection - YES");
    //    return nextState.selectedMenuItem!== this.state.selectedMenuItem;
    // }
    // return false ;

     if(nextState.resizeTimer !== this.state.resizeTimer){
         console.log("CardList - shouldComponentUpdate reload me ");
         location.reload();
     }
    return true;

  },
  componentWillReceiveProps: function(newProps){
    console.log("CardList - componentWillReceiveProps new props have been received ");
  },

  onToggle:function(flag,cardId){
    this.props.onToggle(flag,cardId);
  },

  renderSwiper:function(){
    
    console.log("CardList - Entring render Swiper renderSwiper ");
    console.log('CardList - >>>>>>>>>>>>> Resized finished. width['+$( window ).width()+'] height['+$( window ).height()+']');
    $('.swiper-container').height( $('footer.footer').offset().top -44);
    var swiperContainerWidth = $('.swiper-container').width();


    if(swiperContainerWidth >700 ){
      $('.swiper-container').addClass('cards-background-desktop');
      $('footer').css('display','none');
      $('.swiper-container').height( $(window).height() -44);
    }else{
      $('footer').css('visibility','visible');
      $('footer').css('display','');
      $('.swiper-container').addClass('cards-background');
    }


    console.log("CardList - swiperContainerWidth:"+swiperContainerWidth);
    if(swiperContainerWidth>500){

         var marginValue = Math.floor((swiperContainerWidth - Constants.CARD_WIDTH)/5.5);
         console.log("CardList - swiperContainerWidth (swiperContainerWidth - Constants.CARD_WIDTH) ="+(swiperContainerWidth - Constants.CARD_WIDTH));
         console.log("CardList -  swiperContainerWidth marginValue:"+marginValue);
         $(".swiper-slide").css("margin-left",marginValue);
         $(".swiper-slide").css("margin-right",marginValue);
    }
    console.log(".swiper-slide margin-right :"+  $(".swiper-slide").css("margin-right"));


    this.swiper = undefined;

    //slidesOffsetBefore is OffsetBefore the left edg of the swiper container
    this.swiper = new Swiper('#swiperId', {
      preloadImages: false,
      centeredSlides:false,
      keyboardControl:true,
      lazyLoading: true,
      centeredSlides:true,
      slidesOffsetBefore:0,
      slidesOffsetAfter:0,
      slidesPerView: 'auto',
      pagination: '.swiper-pagination',
      paginationType: 'progress',
      slidesPerColumn: (/Mobi/.test(navigator.userAgent)?1 :1)
    });
    // this.swiper.on('onTransitionEnd', function(_swiper){
    //   _swiper.translate += (_swiper.activeIndex -1)*30;
    //   _swiper.setWrapperTranslate(_swiper.translate);
    // });

    $('.card-share > a').on('click', function(e){
      e.preventDefault() // prevent default action - hash doesn't appear in url
      $(this).parent().find( 'div' ).toggleClass( 'card-social-active' );
      $(this).toggleClass('share-expanded');
    });

    console.log("CardList - swiper-container [width :"+swiperContainerWidth+", heigh:"+$('.swiper-container').height());
    var translateValue= ($('.swiper-container').height()-Constants.CARD_HEIGHT)/2;
    console.log("CardList - swiper-wrapper translateValue:"+translateValue);

    if(translateValue>0){
      $(".card-wrapper").css("transform", "translate(0px,"+translateValue+"px)");
    }

    console.log("CardList -  END  render Swiper renderSwiper ");
  },
  render:function(){
     var that = this;
     var backgroundStyles ="swiper-container ";


     $(window).resize(function() {
      clearTimeout(window.resizedFinished);
      window.resizedFinished = setTimeout(function(){
          that.setState({
            resizeTimer: !that.state.resizeTimer
          })
      }, 250);
     });

    var renderStartingCards = () =>{
    var {cards} =  this.props; //Using ES6 Object destructure Operator
      return cards.map((card) =>{
      switch (card.transient.type) {
       case Constants.REDACTION:
                return (
                      <Redaction key={card.id}  onToggle={this.onToggle} {...card}/>   //Using ES6 Object Spread Operator
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
