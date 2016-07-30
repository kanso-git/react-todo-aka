var React = require('react');
var {Link, IndexLink} = require('react-router');

var RightMenu = React.createClass({
  render:function(){
    var className = this.props.toggleMenu ? 'navigationshowright' : 'navigationhide';
    console.log("class name left menu " + className);
    return (
        <div className={className}>
        	<table className="tablec">
        		<tr>
        			<td className="tabletd">
        				<p className="text_right">Mon Compte</p>
        			</td>
        		</tr>
        		<tr>
        			<td className="tabletd">
        				<p className="text_right">Gerer mon abonnement</p>
        			</td>
        		</tr>
        		<tr>
        			<td className="tabletd">
        				<p className="text_right">Prise-en-main</p>
        			</td>
        		</tr>
        		<tr>
        			<td className="tabletd">
        				<p className="text_right">Decouvrir</p>
        			</td>
        		</tr>
        		<tr>
        			<td className="tabletd">
        				<p className="text_right">Deconnexion</p>
        			</td>
        		</tr>
        	</table>
        </div>
    );
  }
});

module.exports = RightMenu;
