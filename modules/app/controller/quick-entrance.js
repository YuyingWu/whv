var quickEntranceModule = angular.module('quickEntranceModule', []);

quickEntranceModule.controller('QuickEntranceController', ['$scope',
    function($scope) {
        $scope.appId = '';

        $scope.openLink = function(){
            var linkAry = [];

            linkAry.push(document.getElementById('link-id').href);
            linkAry.push(document.getElementById('link-health').href);
            linkAry.push(document.getElementById('link-character').href);


            for(var i=0; i<linkAry.length; i++){
                (function(index){
                    setTimeout(function(){
                        window.open(linkAry[index], '_blank');
                    }, 500);
                })(i);
            }
        }
        
        $scope.$watch('appId', function(){
            if($scope.appId == ''){
                $scope.activeLink = false;
            }else{
                $scope.activeLink = true;
            }
        });
    }
]);
