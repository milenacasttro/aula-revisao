const USER = {
  'name': 'yanzoka',
  'email': 'yan@gmail.com'
};

module.exports = {
  USER,
  RESPONSE: {
    status: function(code) {
      this.statusCode = code;
      return this;
    },
    json: function(data) {
      this.body = data;
    },
  },
};
