(function() {
  'use strict';
  var $message = $('#message');
    
  $message.on('mouseenter', function(){
    
    setTimeout(function(){
      $message.find('.outside').html('Kastour');
    },200);
  });
  
  $message.on('mouseleave', function(){
    
    setTimeout(function(){
      $message.find('.outside').html('WELCOME');
    },250);
  });
}());