Package.describe({
  name: 'tyson:ramda',
  summary: 'Ramda for Meteor',
  version: '0.2.0'
});

Package.onUse(function(api){
  api.versionsFrom("METEOR@0.9.1.1");
  api.add_files(['lib/ramda.js'],['client','server']);
    //api.export('ramda',['client','server']);
    api.export('R',['client','server']);
});
