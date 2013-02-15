  
var updates = [{"id": "0", "title": "Hello World"}];
module.exports = function(socket){
  setTimeout(function(){
    socket.emit('new:article', {title: 'Title of the Article', href: 'http://google.com', image: 'http://dummyimage.com/150/150/000/fff', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis fugiat ea reiciendis tempora assumenda dolore quasi esse et soluta ad quibusdam consequatur. Rerum animi facilis sequi asperiores soluta eius.'})
  }, 2000);

  setInterval(function(){
    socket.emit('new:article', {title: 'Title of the Article', href: 'http://google.com', image: 'http://dummyimage.com/150/150/000/fff', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis fugiat ea reiciendis tempora assumenda dolore quasi esse et soluta ad quibusdam consequatur. Rerum animi facilis sequi asperiores soluta eius.'})
  }, 10000);
}