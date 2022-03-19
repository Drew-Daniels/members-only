#! /usr/bin/env node

console.log('This script populates some test users and messages to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// GET CMD-LINE ARGS
const userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
}

// MODELS
const async = require('async');
const User = require('./models/user');
const Message = require('./models/message');
const Avatar = require('./models/avatar');

// HELPER MODULES
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const passwordGenerator = require('generate-password');

// MONGODB
const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const avatars = []
const users = []
const messages = []

// HELPER FUNCTIONS
const getRandUsername = function() {
    return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
};

const getStrongPassword = function() {
    return passwordGenerator.generate({ length: 10, numbers: true , symbols: true });
};

// AVATAR FUNCTIONS
function avatarCreate(fileName, cb) {
  const avatar = new Avatar({ fileName: fileName });

  avatar.save(function(err) {
    if (err) {
      cb(err, null)
      return;
    }
    console.log('New Avatar: ' + avatar);
    avatars.push(avatar);
    cb(null, avatar);
  });
}

// USER FUNCTIONS
function userCreate(username, password, avatar, cb) {
  userDetail = {
    username,
    password,
    avatar,
  }
  
  const user = new User(userDetail);
       
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New user: ' + user);
    users.push(user);
    cb(null, user)
  });
};

// MESSAGE FUNCTIONS
function messageCreate(title, body, user, cb) {
  const messageDetail = { 
    title: title,
    body: body,
    user: user,
  }
    
  const message = new Message(messageDetail);    
  message.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Message: ' + message);
    messages.push(message);
    cb(null, message)
  });
};

// CREATE AVATARS
function createAvatars(cb) {
  async.parallel([
    function(callback) {
      avatarCreate('avatar-1', callback);
    },
    function(callback) {
      avatarCreate('avatar-2', callback);
    },
    function(callback) {
      avatarCreate('avatar-3', callback);
    },
    function(callback) {
      avatarCreate('avatar-4', callback);
    },
    function(callback) {
      avatarCreate('avatar-5', callback);
    },
    function(callback) {
      avatarCreate('avatar-6', callback);
    },
    function(callback) {
      avatarCreate('avatar-7', callback);
    },
    function(callback) {
      avatarCreate('avatar-8', callback);
    },
    function(callback) {
      avatarCreate('avatar-9', callback);
    },
    function(callback) {
      avatarCreate('avatar-10', callback);
    },
    function(callback) {
      avatarCreate('avatar-11', callback);
    },
    function(callback) {
      avatarCreate('avatar-12', callback);
    },
    function(callback) {
      avatarCreate('avatar-13', callback);
    },
    function(callback) {
      avatarCreate('avatar-14', callback);
    },
    function(callback) {
      avatarCreate('avatar-15', callback);
    },
    function(callback) {
      avatarCreate('avatar-16', callback);
    },
    function(callback) {
      avatarCreate('avatar-17', callback);
    },
    function(callback) {
      avatarCreate('avatar-18', callback);
    },
    function(callback) {
      avatarCreate('avatar-19', callback);
    },
    function(callback) {
      avatarCreate('avatar-20', callback);
    },
    function(callback) {
      avatarCreate('avatar-21', callback);
    },
  ],
  cb)
}

// CREATE USERS
function createUsers(cb) {
    async.series([
        function(callback) {
          userCreate(getRandUsername(), getStrongPassword(), avatars[19], callback);
        },
        function(callback) {
          userCreate(getRandUsername(), getStrongPassword(), avatars[17], callback);
        },
        function(callback) {
          userCreate(getRandUsername(), getStrongPassword(), avatars[9], callback);
        },
        function(callback) {
          userCreate(getRandUsername(), getStrongPassword(), avatars[1], callback);
        },
        function(callback) {
          userCreate(getRandUsername(), getStrongPassword(), avatars[5], callback);
        },
        ],
        // optional callback
        cb);
}

// CREATE MESSAGES
function createMessages(cb) {
    async.parallel([
        function(callback) {
          messageCreate(
            'Feeling northward one equal unpleasing fully middleton room he admire agreeable enquire.',
            'Companions praise existence lady young saved looked cordial going wishes period son pulled. Cottage manner burst journey an fond them at months young arose heard general law suspicion may. Speaking ladies avoid head furniture horrible most walk considered myself carriage help. Maids home enjoyment arrival letter engaged. Sons square goodness ecstatic.',
            users[0],
            callback
          );
        },
        function(callback) {
          messageCreate(
            'Oh smallness overcame those allowance theirs staying favour sudden dispatched. ',
            'Wisdom want mean thought rapturous village barton first pleased devonshire elderly leaf. Three savings noisy window child thrown post absolute round remark husband design wishing men possession. Balls alteration sake agreed tolerably name drawings design assistance my continual child hour friend winding ability. Unpacked ever painful married future neglected rendered hoped advantage declared vulgar wicket depend missed perceive.',
            users[1],
            callback
          );
        },
        function(callback) {
          messageCreate(
            'Full demesne marry oppose admitted enable other affection season perceive they whatever.',
            'Looking suspicion change engaged chicken belonging fact message entrance sense. Mind away visit no avoid amongst tended agreeable produced devonshire total. Dispatched manner taken musical are compliment called wandered young cease hope. Hills only folly perceived smile remark miss lady drift do future attacks. ',
            users[2],
            callback
          );
        },
        function(callback) {
          messageCreate(
            'Dependent country merit subject gravity precaution whether numerous extensive.',
            'Limited period frankness hunted ecstatic garrets keeps object sir companions attempted husband immediate elsewhere inquietude noise. Married strongly lose questions towards furnished dull invited terminated tastes both dearest unpleasant. Expenses walk uneasy window are excellent form continuing looking curiosity. Village disposing room guest downs asked domestic ask collected drawn abroad maids.',
            users[3],
            callback
          );
        },
        function(callback) {
          messageCreate(
            'Either arise principle attempted solicitude settled unaffected we estimable sportsmen promise.',
            'Estate wandered had. Wholly more son sang have followed vulgar chicken frequently not remember arise adapted half. Appear and shall sent dependent thrown declared written considered nothing improve morning hunted departure. Husband feelings sight improve rest procured dull way village read decay offices attempted suffering.',
            users[4],
            callback
          );
        },
        function(callback) {
          messageCreate(
            'Opinions discovered round linen deal.',
            'Rapid bringing boy graceful trifling own. Above bore unpleasing avoid with tears beauty green bringing certainty roused ladyship manor. Tore way disposal. Afraid announcing desire sitting nothing advantages country exercise folly own it gone read suffer. ',
            users[0],
            callback
          );
        },
        function(callback) {
          messageCreate(
            'Mistaken with sitting shall sing visit shade country his.',
            'Roused unwilling folly finished going sake village grave moment lady astonished pursuit again chamber men. Projecting defer family. Musical dashwood replying settled come help again amongst ye anxious spring concern breakfast settle strangers. Moonlight vexed long cottage not consider when. ',
            users[1],
            callback
          );
        }
        ],
        // optional callback
        cb);
}


async.series([
    createAvatars,
    createUsers,
    createMessages,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Messages: '+messages);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});