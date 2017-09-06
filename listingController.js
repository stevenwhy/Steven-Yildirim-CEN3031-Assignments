angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(newListing) {
      
      for(var i = 0; i < $scope.listings.length; i++) {
        if(newListing.code == Listings[i].code)
          return;
      }
      // Clone the new listing object so that changes to the model in the form
      // do not affect previously-submitted instances.
      var clonedListing = Object.assign({}, newListing);

      $scope.listings.push(clonedListing); 
        //push lets me send the information found in clonedListing object into the listings 
      
    };
    $scope.deleteListing = function(listing) {
      for(var i = 0; i < $scope.listings.length; i++) {
        if(listing.code == $scope.listings[i].code) {
          $scope.listings.splice(i, 1);
          return;
        }
      }
    };
    $scope.showDetails = function(listing) {
      $scope.detailedInfo = listing;
    };
  }
]);