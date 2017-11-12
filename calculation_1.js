      var app = angular.module("myApp",[])
      app.controller("myCon",function($scope){
          $scope.num1 = 0;
          $scope.num2 = 0;
          $scope.myresult = 0;
          $scope.ico = "";
          $scope.string = "";
          $scope.result = function(){
              if ($scope.string == "=")
              {
                  $scope.$watch("ico", function (newV, oldV) {
                      switch (newV) {
                          case "+" :
                              $scope.myresult = $scope.num1 * 1 + $scope.num2 * 1;
                              break;
                          case "-" :
                              $scope.myresult = $scope.num1 * 1 - $scope.num2 * 1;
                              break;
                          case "*" :
                              $scope.myresult = $scope.num1 * 1 * $scope.num2 * 1;
                              break;
                          case "/" :
                              $scope.myresult = $scope.num1 * 1 / $scope.num2 * 1;
                              break;
                          default:
                      }
                  })
                  $scope.string = "";
              }
          }
      })
