Package.describe({
  name: 'thereactivestack:blazetoreact',
  version: '0.1.6',
  summary: 'Transform a Blaze template into a React.js component while keeping the reactivity',
  git: 'https://github.com/teknologist/meteor-blazetoreact.git',
  documentation: 'README.md'
});


Npm.depends({
  "react": "0.14.7",
  "react-dom": "0.14.7"
});

Package.onUse(function(api) {
  api.use(['react@0.14.1']);
  api.use(['blaze@2.1.0'], 'client');

  api.add_files(['lib/BlazeToReact-client.jsx'], ['client']);
  api.add_files(['lib/BlazeToReact-server.jsx'], ['server']);

  api.export('BlazeToReact');
});
