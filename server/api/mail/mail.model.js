'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MailSchema = new Schema({
  from: String,
  date: String,
  subject: String,
  body: String,
  star: Boolean,
  attachment: String,
  folder: String
});

module.exports = mongoose.model('Mail', MailSchema);
