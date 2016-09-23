/**
 * GpslocationController
 *
 * @description :: Server-side logic for managing gpslocations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	active: function(req, res){
		var lastActive = 1000 * 60; //5 minutes
    //lastActive = lastActive * 20; // 100 minutes
    var minutes = req.param('id');
    minutes = minutes ? minutes : 1;

    var now = new Date().getTime()
    var refDate = new Date( now - (lastActive * minutes) )

		Gpslocation
		.find({ where: { updatedAt: {">": refDate}, sort: 'updatedAt DESC' }})
		.exec(function(err, gpslocations) {
	        if (err) {return res.serverError(err);}

	        var processedUsers = [];
	        var locations = [];
          for(var i=0; i<gpslocations.length; i++) {
            var location = gpslocations[i];

            if(location.auth && processedUsers.indexOf(location.auth.id) < 0) {
              locations.push(location);
              processedUsers.push(location.auth.id);
            }
          }
	        return res.send(locations);
	    });



    },
};

