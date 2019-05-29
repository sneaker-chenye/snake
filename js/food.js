(function () {
  var elements = [];
  function Food(map,options) {
    options = options || {};
    
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.color = options.color || 'skyblue';
    this.radius = options.radius || '50%';

    this.map = map;
  };
  Food.prototype.render = function() {
    var div = document.createElement('div');

    for (var i = elements.length - 1;i >= 0; i--) {
      this.map.removeChild(elements[i]);
      elements.splice(i,1);
    };

    this.x = Tools.getRandom(0, this.map.offsetWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, this.map.offsetHeight / this.height - 1) * this.height;

    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
    div.style.position = 'absolute';
    div.style.borderRadius = this.radius;

    this.map.appendChild(div);
    elements.push(div);
  }
  window.Food = Food;
})()

// 测试
// var map = document.getElementById('map');
// var food = new Food();
// food.render(map);
