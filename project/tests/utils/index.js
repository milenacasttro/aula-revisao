const USER = {
  'name': 'yanzoka',
  'email': 'yan@gmail.com'
};

const RESPONSE = {
  json: function (data) {
    data;
  },
  serverError: function(data) {
    return {"error": data}
  }
};

module.exports = {
  USER,
  RESPONSE
};
