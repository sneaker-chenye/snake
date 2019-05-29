(function () {
  var elements = [];

  function Snake(map, options) {
    //一节身体的宽度
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.direction = 'right';
    this.map = map;

    this.body = [
      { x: 4, y: 2, color: 'gold' },
      { x: 3, y: 2, color: 'hotpink' },
      { x: 2, y: 2, color: 'hotpink' },
    ];
  };

  function remove() {
    for (var i = elements.length - 1; i >= 0; i--) {
      this.map.removeChild(elements[i]);
      elements.splice(i, 1);
    };
  };

  Snake.prototype.render = function () {
    remove();
    for (var i = 0, len = this.body.length; i < len; i++) {
      var div = document.createElement('div');

      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.position = 'absolute';
      div.style.backgroundColor = this.body[i].color;
      div.style.left = this.body[i].x * this.width + 'px';
      div.style.top = this.body[i].y * this.height + 'px';

      this.map.appendChild(div);
      elements.push(div);
    }
  }

  //让蛇动起来
  Snake.prototype.move = function (food) {
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    };
    var head = this.body[0];
    switch (this.direction) {
      case 'right':
        head.x += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'top':
        head.y -= 1;
        break;
      case 'bottom':
        head.y += 1;
        break;
    };

    var foodX = food.x,
      foodY = food.y,
      headX = this.body[0].x * this.width,
      headY = this.body[0].y * this.height;

    if (headX === foodX && headY === foodY) {
      this.body.push({
        x: this.body[this.body.length - 1].x,
        y: this.body[this.body.length - 1].y,
        color: this.body[this.body.length - 1].color,
      });
      food.render();

    };
  };
  window.Snake = Snake;
})()

//测试
// var map = document.getElementById('map');
// var snake = new Snake();
// snake.render(map);