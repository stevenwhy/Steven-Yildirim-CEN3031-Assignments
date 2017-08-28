angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(newListing) {
      // Clone the new listing object so that changes to the model in the form
      // do not affect previously-submitted instances.
      var clonedListing = Object.assign({}, newListing);

      $scope.listings.push(clonedListing); 
      //push lets me send the information found in clonedListing object into the listings 
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);