angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 3000;
  var imgRoot = 'img/producao/';
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    
    slides.push({image: imgRoot + 'IMG_5185.JPG'});
    slides.push({image: imgRoot + 'IMG_5191.JPG'});
    slides.push({image: imgRoot + 'IMG_5230.JPG'});
    slides.push({image: imgRoot + 'IMG_5231.JPG'});
    slides.push({image: imgRoot + 'IMG_5239.JPG'});
    slides.push({image: imgRoot + 'IMG_5317.JPG'});
    slides.push({image: imgRoot + 'IMG_5329.JPG'});
  };
  
 
  //for (var i=0; i<4; i++) {
    $scope.addSlide();
  //}
});
