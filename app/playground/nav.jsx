var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = ()=>{
  return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu" >
              <li>
                <button type="button">
                  <i className="fa fa-bars fa-lg" aria-hidden="true" title="Toggle navigation"></i>
                </button>
                </li>
            </ul>

          </div>

          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <button type="button">
                   <i className="fa fa-cog fa-lg" aria-hidden="true" title="Toggle navigation"></i>
                </button>
                </li>
            </ul>
          </div>
        </div>
  );

}

module.exports = Nav;
