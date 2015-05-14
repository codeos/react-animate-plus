"use strict";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var AnimateList = React.createClass({
  getInitialState: function() {
    return {
    	items: ['hello', 'world', 'click', 'me'],
    	transitionName : 'toggle' ,
    	animates : ['toggle','slide-top','slide-right','slide-left','slide-down','rotate-in','flip-in','bouncy-scale-in','scale-fade-in','spin-toggle','bouncy-slide-top','bouncy-slide-right','bouncy-slide-left','scale-fade','bouncy-slide-down']
    };
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  handleChangeAnimate : function(e){
  	var animateName = e.target.value;
  	this.setState({transitionName:  animateName});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={i} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));

    var radios = this.state.animates.map(function(item,i){
      	return  (<label htmlFor={ item } key={i}>
      				<input type="radio" name="animate" value={ item } id={ item } onChange={ this.handleChangeAnimate }  defaultChecked={ this.state.transitionName == item }/> 
      				{ item }
      			</label>);
	}.bind(this));

    return (
      <div>
      	<div className="os-box">
      		<h3>toggle</h3>
      		<hr />
      		<div>
      			{ radios }
      		</div>
      		<hr />
	        <button onClick={this.handleAdd}>Add Item</button>
	        <ReactCSSTransitionGroup transitionName={ this.state.transitionName }>
	          {items}
	        </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
});

React.render(<AnimateList />,document.getElementById('examples'));