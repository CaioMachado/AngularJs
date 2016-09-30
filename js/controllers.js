angular.module('F1FeederApp.controllers', []).controller('WidgetsListController', ['$scope', function ($scope) {
		$.getJSON("http://spa.tglrw.com:4000/widgets", function(data) {
			$scope.$apply(function(){				
				$.each( data, function( key, val ) {								
					$scope.widgets = data;						
				});		
			});
		});		
		
		$scope.GoToDetailedPage = function(obj) {	
			$location.path('./widget.html?id' + obj.widget.id);		
		};
	}]);