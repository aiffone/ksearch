const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  age: {
    type: Number    
  },
  department: {
    type: String
  },
  buzzWord: {
    type: String
  }
});

module.exports = mongoose.model('user', UserSchema);
