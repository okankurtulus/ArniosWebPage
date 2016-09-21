
module.exports = {

  /**
   * Send a customized welcome email to the specified email address.
   *
   * @required {String} emailAddress
   *   The email address of the recipient.
   * @required {String} firstName
   *   The first name of the recipient.
   */
  search: function (options, done) {

    var string = options.string;
    var regex = options.regex;

    var match,
      indexes = {};

    regex = new RegExp(regex);

    while (match = regex.exec(string)) {
      if (!indexes[match[0]]) indexes[match[0]] = [];
      indexes[match[0]].push(match.index);
    }

    return done(indexes);
  }

}



