var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = ()=>{
  return (
    <div className="navigation">
        <div className="navigation-left">
            <ul className="menu" >
                <li>
                    <i className="fa fa-bars fa-lg" aria-hidden="true" title="Toggle navigation"></i>
                </li>
            </ul>
        </div>
        <div className="navigation-title">
            <p><b>Le matin </b> du soir</p>
        </div>
        <div className="navigation-right">
            <ul className="menu" >
                <li>
                    <i className="fa fa-cog fa-lg" aria-hidden="true" title="Toggle navigation"></i>
                </li>
            </ul>
        </div>
    </div>
  );

}

module.exports = Nav;
