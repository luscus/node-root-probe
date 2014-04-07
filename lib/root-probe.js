/*
    Copyright (C) 2013  Luscus
    <https://github.com/luscus/node-root-probe>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program: see COPYING in the root directory.
    If not, see <http://www.gnu.org/licenses/>.
*/

// load modules
var Path = require('path'),
    root = require('root-finder'),
    Git = require(__dirname + '/utils/git'),
    Dependencies = require(__dirname + '/utils/dependencies');

var mainModuleInformation = null;


(function () {
    mainModuleInformation = {};
    mainModuleInformation.status = 'OK';
    mainModuleInformation.timestamp = new Date();
    mainModuleInformation.name = root.name;
    mainModuleInformation.directory = root.directory;
    mainModuleInformation.path = root.path;
    mainModuleInformation.version = root.package.version;

  try {
    var git_hash = Git.readHeadHash(root.path),
        dependencies = Dependencies.update(root);

    if(git_hash)
      mainModuleInformation.version_hash = git_hash;



    if (root.package.description)
      mainModuleInformation.description = root.package.description;
    if (root.package.keywords)
      mainModuleInformation.keywords = root.package.keywords;
    if (root.package.homepage)
      mainModuleInformation.homepage = root.package.homepage;
    if (root.package.repository)
      mainModuleInformation.repository_url = root.package.repository.url;
    if (root.package.engines)
      mainModuleInformation.engines_node = root.package.engines.node;


    mainModuleInformation.dependencies = dependencies;
  }
  catch (error) {
    mainModuleInformation.status = 'ERROR';


    mainModuleInformation.error = {
      name: error.name,
      message: error.message,
      stack: error.stack
    };
  }

  return mainModuleInformation;
})();


module.exports = mainModuleInformation;
