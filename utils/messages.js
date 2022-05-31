const moment = require('moment');

function formatMessage(username, text) {
  //var str = username + text + " " + moment.format('h:mm a');
  return {
    username,
    text,
    time: moment().format(' h:mm a')
  };
}

module.exports = formatMessage;
