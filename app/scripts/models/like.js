var $ = require('jquery');
var Backbone = require('backbone');



var LikeButton = Backbone.Model.extend({
  defaults: {
    'likes': 0,
    'label': ' like'
  },
  initialize: function() {
    console.log('just for fun, initialize it');
  },
  like : function() {
    var likings = this.get('likes');
    this.set('likes', likings +1);
    //  console.log('i\'ve been liked');
    // this.toJSON();
  },
  toJSON : function() {
    if (this.get('likes') != 1) {
      this.set('label', ' likes');
    }
    return Backbone.Model.prototype.toJSON.call(this);
  }

});



module.exports = {
  'LikeButton': LikeButton
};
