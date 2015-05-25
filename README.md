Ramda for Meteor
=============

Use Ramda full stack with Meteor! Ramda is a functional programming
library for javascript, less mutation and purer style.

Documentation
-------------
* Find out more about the [ramda
project (source code)](https://github.com/ramda/ramda/).
* [API documentation](http://ramdajs.com/docs/).

Installation
-------------
* From your meteor project clone into your /packages/ directory.
```bash
  $ git clone https://github.com/tabruhn/meteor-ramda
```
* Import the package into your project
```bash
  $ meteor add tyson:ramda
```

Usage
-------------
From front or backend code just use 'R.' prefix to call Ramda library
functions.

```javascript
  var quarter = R.divide(R._,4);
  quarter(100); /* => 25*/
  var half = R.divide(R._,2);
  half(100); /* => 50 */
```

