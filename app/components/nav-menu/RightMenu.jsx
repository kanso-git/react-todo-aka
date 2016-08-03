var React = require('react');
var {Link, IndexLink} = require('react-router');

var RightMenu = React.createClass({

  render:function(){
    var {isVisible} = this.props;
    var className = isVisible ? 'navigationshowright' : 'navigationhide';

    return (
        <div className={className}>
        	<table className="tablec">
            <tbody>
            <tr>
               <td className="tabletd">
                 <Link to="/login">  <p className="text_right">Login</p></Link>
              </td>
            </tr>
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
            </tbody>
        	</table>
        </div>
    );
  }
});

module.exports = RightMenu;
