/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  active: function(req, res){
    var lastActive = 1000 * 60; //5 minutes
    var minutes = req.param('id');
    minutes = minutes ? minutes : 1;

    var now = new Date().getTime()
    var refDate = new Date( now - (lastActive * minutes) )

    Message
      .find({ where: { updatedAt: {">": refDate}, sort: 'updatedAt ASC' }})
      .exec(function(err, messages) {
        if (err) {return res.serverError(err);}
        return res.send(messages);
      });



  },
};

