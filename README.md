# [node-root-probe](https://github.com/luscus/node-root-probe)

The 'root-probe' returns information (such as dependecies) about the first parent module in the path hierarchy.


Take a look to the [TODO](https://github.com/luscus/node-root-probe/blob/master/TODO.md) if you want to help towards the next steps.



## Installation

### Node Dependencies

Add following line to your project dependencies

    "root-probe": "0.1.x",

then hit

    npm install

### Require module

    var probe = require('root-probe');


## Usage

*[property] means the property is only set it a value was found*

### Probe Object

root-probe return an Object with following properties:

* `status`: 'OK' if the probe was processed without problems, 'ERROR' otherwise
* `timestamp`: the time at which the probe was generated
* `name`: the name of the parent module
* `directory`: the directory of the parent module
* `version`: the parent module's version
* `[version_hash]`: the parsed content of .git/HEAD
* `[description]`: the parent module's description
* `[keywords]`: the parent module's keywords
* `[homepage]`: the parent module's homepage
* `[repository_url]`: the parent module's repository_url
* `[engines_node]`: the parent module's supported version of node
* `dependencies`: the parent module's dependencies as array of objects formated as follows

### Dependecy Object

* `type`: string - specifies it is a Node ('node') or Bower ('bower') dependency
* `production`: boolean - specifies it is a production dependency
* `path`: string - path to the dependency
* `name`: string - the name dependency module
* `version`: string - the dependency module's version
* `[description]`: string - the dependency module's description
* `[keywords]`: array of strings - the dependency module's keywords
* `[homepage]`: string - the dependency module's homepage
* `[repository_url]`: string - the dependency module's repository_url
* `[engines_node]`: string - the dependency module's supported version of node


### Access Values

Access the values with the point notation:

    var probe = require('root-probe');

    // get parent module's name
    probe.name

    // get root path
    probe.path

    // get list of dependencies
    probe.dependencies