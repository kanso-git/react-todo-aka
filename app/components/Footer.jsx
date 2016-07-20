var React = require('react');
var {Link, IndexLink} = require('react-router');

var Footer = ()=>{
  var styleLogo =" logo-bottom";
      styleLogo+=  (/Mobi/.test(navigator.userAgent)?'' :'-desktop');
  return (
        <footer className="footer">
            <div className="row full-width" >
              <a herf="https://www.linkedin.com/in/abdallah-kanso-4789a68?trk=hp-identity-photo">
                <img className={styleLogo}
                  src="https://cdn.prezly.com/8b/d789107d6711e5affe6d612b5698d9/140306_NES_AssociatedLogos_ATELIER_White.png"></img>
              </a>
              </div>
        </footer>
    );
}
module.exports = Footer;
