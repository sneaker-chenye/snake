(function () {
  function Game(map) {
    this.food = new Food(map);
    this.snake = new Snake(map);
    this.map = map;
  };

  Game.prototype.start = function () {
    var that = this;

    var flag = setInterval(function () {

      var MaxX = that.map.offsetWidth / that.snake.width,
        MaxY = that.map.offsetHeight / that.snake.height,
        SnakeX = that.snake.body[0].x,
        SnakeY = that.snake.body[0].y;

      if (SnakeX >= MaxX || SnakeX < 0) {
        alert('Game over!');
        clearInterval(flag);
      };
      if (SnakeY >= MaxY || SnakeY < 0) {
        alert('Game over!');
        clearInterval(flag);
      };

      that.snake.render();
      that.snake.move(that.food);

    }, 150);

    this.snake.render();
    this.food.render();

    document.addEventListener('keydown', function (e) {
      switch (e.keyCode) {
        case 37:
          that.snake.direction = 'left';
          break;
        case 38:
          that.snake.direction = 'top';
          break;
        case 39:
          that.snake.direction = 'right';
          break;
        case 40:
          that.snake.direction = 'bottom';
          break;
      }
    })
  }
  window.Game = Game;
})()

var map = document.getElementById('map');
var game = new Game(map);
game.start();
