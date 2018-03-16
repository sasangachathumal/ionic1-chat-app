angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    time:'10.20 PM',
    face: 'https://www.shareicon.net/data/128x128/2015/09/24/106419_man_512x512.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    time:'11.00 PM',
    face: 'http://trennungsschmerzen.org/wp-content/uploads/2016/01/M%C3%A4nner_1454166961-300x247.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    time:'08.20 AM',
    face: 'https://www.shareicon.net/data/128x128/2015/09/24/106425_man_512x512.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    time:'02.30 AM',
    face: 'http://www.iconninja.com/files/473/667/778/headset-person-man-avatar-support-male-young-icon.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
