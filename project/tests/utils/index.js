const USER = {
  'name': 'yanzoka',
  'email': 'yan@gmail.com'
};

module.exports = {
  USER,
  RESPONSE: {
    json: function (data) {
      data;
    },
    serverError: function(data) {
      this.statusCode = 500
      return {"error": data}
    },
    status: function(code) {
      this.statusCode = code;
      return this;
    }
  }
};
