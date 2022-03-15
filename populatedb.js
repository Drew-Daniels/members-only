#! /usr/bin/env node

console.log('This script populates some test users and messages to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
const userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
const async = require('async');
const User = require('./models/user');
const Message = require('./models/message');
const Avatar = require('./models/avatar');

const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const users = []
const messages = []
const avatars = []

function userCreate(first_name, last_name, password, is_member, is_admin, avatar_id, cb) {
  userDetail = {
    password,
    first_name,
    last_name,
    is_member,
    is_admin,
    avatar_id,
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
  }  );
};

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
  }  );
};

function avatarCreate(fileName) {
  const avatarDetail = {
    fileName: fileName,
  };

  const avatar = new Avatar(avatarDetail);
  avatars.push(avatar);

}

function createUsers(cb) {
    async.series([
        function(callback) {
          userCreate('Patrick', 'Rothfuss', '1973-06-06', false, callback);
        },
        function(callback) {
          userCreate('Ben', 'Bova', '1932-11-8', false, callback);
        },
        function(callback) {
          userCreate('Isaac', 'Asimov', '1920-01-02', '1992-04-06', callback);
        },
        function(callback) {
          userCreate('Bob', 'Billings', false, false, callback);
        },
        function(callback) {
          userCreate('Jim', 'Jones', '1971-12-16', false, callback);
        },
        ],
        // optional callback
        cb);
}


function createMessages(cb) {
    async.parallel([
        function(callback) {
          messageCreate('The Name of the Wind (The Kingkiller Chronicle, #1)', 'I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.', '9781473211896', authors[0], [genres[0],], callback);
        },
        function(callback) {
          messageCreate("The Wise Man's Fear (The Kingkiller Chronicle, #2)", 'Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.', '9788401352836', authors[0], [genres[0],], callback);
        },
        function(callback) {
          messageCreate("The Slow Regard of Silent Things (Kingkiller Chronicle)", 'Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.', '9780756411336', authors[0], [genres[0],], callback);
        },
        function(callback) {
          messageCreate("Apes and Angels", "Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...", '9780765379528', authors[1], [genres[1],], callback);
        },
        function(callback) {
          messageCreate("Death Wave","In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...", '9780765379504', authors[1], [genres[1],], callback);
        },
        function(callback) {
          messageCreate('Test Book 1', 'Summary of test book 1', 'ISBN111111', authors[4], [genres[0],genres[1]], callback);
        },
        function(callback) {
          messageCreate('Test Book 2', 'Summary of test book 2', 'ISBN222222', authors[4], false, callback)
        }
        ],
        // optional callback
        cb);
}

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