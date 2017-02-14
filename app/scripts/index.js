
var Backbone = require('backbone');
var $ = require('jquery');
var likes = require('./models/like.js');

console.log("like", likes.LikeButton);

var imaButton = new likes.LikeButton();


imaButton.on('change', function(){
  $('.like-button').text(imaButton.get('likes') + imaButton.get('label'));

});

$('.like-button').on('click', function(event){
  event.preventDefault();
  $('.like-button').animate({
    width: '198px',
    height: '75px'
  }, 100);
  $('.like-button').animate({
    width: '200px',
    height: '77px'
  }, 100);
  imaButton.like();
  imaButton.toJSON();
  //console.log('imabutton.like()',imaButton.like());
  //console.log('clicked');
  //console.log('imabutton.get', imaButton.get('likes'));
});
