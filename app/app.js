const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'

const app = angular.module('mainApp', []);

let mainController = function($scope, $http){
  $scope.quote = {};

  function success(data){
    console.log(data);
    $scope.quote.title = data.data[0].title;
    $scope.quote.content = data.data[0].content.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#\d{1,4}\;/g, "");
  }
  function error(err){
    $scope.quote = err;
  }

  $scope.getQuote = function(){
    $http.get(url).then(success, error);
  }

}

app.controller('mainController', ['$scope', '$http', mainController]);

// $(document).css(backgroundColor: 'red');
