/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({code: 'LBW' }, function(err, data) {
    if(err) throw err;

    console.log('-----FINDING-----');
    console.log(data);
    console.log('\n');
  })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({code: 'CBL'}, function(err, data) {
    if(err) throw err;

      console.log('-----REMOVING-----');
      console.log(data);
      console.log('\n');
  })
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
  */
  Listing.findOneAndUpdate({code: 'PHL'}, 
  {$set: {address: 'Phelps Lab, Gainesville, FL 32603'}}, function(err, data) {
    if (err) throw err;

    console.log('-----UPDATED PHELPS-----');
    console.log(data);
    console.log('\n');
  })
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, data) {
    if(err) throw err;

    console.log('-----RETRIEVING ALL-----');
    console.log(data);
    console.log('\n');
  })
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();