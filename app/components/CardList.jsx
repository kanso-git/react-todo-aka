var React = require('react');
var Card = require('Card');
var Swiper = require('swiper');

var CardList = React.createClass({

  getInitialState:function(){
    return {
     slidesPerView:1
    };
  },
  componentDidMount:function(){

      $('.card-share > a').on('click', function(e){
        e.preventDefault() // prevent default action - hash doesn't appear in url
        $(this).parent().find( 'div' ).toggleClass( 'card-social-active' );
        $(this).toggleClass('share-expanded');
      });

     this.renderSwiper();
  },
  renderSwiper:function(){
    var swiperWidth= $("#swiperId").width();
    var slidesPerView = Math.floor(swiperWidth/320);
        slidesPerView =(slidesPerView === 0 ?1:(slidesPerView >4?4:slidesPerView));

    $('.swiper-container').width($("#swiperId").width());

    // this.setState({
    //   slidesPerView:slidesPerView
    // })
    //
    this.swiper = undefined;

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
      slidesPerColumn: (/Mobi/.test(navigator.userAgent)?1 :2)
    });
    this.swiper.on('onTransitionEnd', function(_swiper){
      // _swiper.translate += (_swiper.activeIndex -1)*30;
      // _swiper.setWrapperTranslate(_swiper.translate);
    });
  },
  render:function(){
   var that = this;
   $(window).resize(function() {
     that.renderSwiper();
   });
    var {cards} =  this.props; /* Using ES6 Object destructure Operator */
    var renderStartingCards = () =>{
      return cards.map((card) =>{
        return (
          <Card key={card.id} {...card}/>   /* Using ES6 Object Spread Operator */
        )
      });
    };
    return(

  <div className="swiper-container cards-background" id="swiperId">
        <div className="swiper-wrapper ">
            {renderStartingCards()}
       </div>
       <div className="swiper-pagination"></div>
   </div>
    )
  }

});

module.exports = CardList;
