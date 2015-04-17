/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var spawn = require("child_process").spawn;

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Project = require('../api/project/project.model');
var Commit = require('../api/commit/commit.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Feed',
    info : 'View the feed from all project blogs posts and commits',
    link : '/Feed',
  // }, {
  //   name : 'Projects',
  //   info : 'Look at current and past Projects',
  //   link : '/Projects' 
  }, {
    name : 'Developers',
    info : 'View current and past RCOS developers',
    link : '/Developers'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    type : 'homepage'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    type : 'homepage'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    type : 'homepage'
  },{
    name : '',
    info : '',
    type : 'daycode'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  },
  {
    provider: 'local',
    role: 'admin',
    name: 'Aaron',
    email: 'aaron@admin.com',
    password: 'admin',
    github:{
      login: 'agundy'
    }

  }, function() {
      console.log('finished populating users');
    }
  );
});

Project.find({}).remove(function(){
  Project.create({
    name: 'Observatory',
    description: 'Open source project tracking.',
    repositoryUrl: 'https://github.com/rcos/Observatory3',
    repositoryType: 'github',
    githubUsername: 'RCOS',
    githubProjectName: 'Observatory3',
  }, function() {
    console.log('finished populating projects')
  })
});
