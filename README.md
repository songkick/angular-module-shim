## angular-module-shim

An alternative angular.module() method that allows module dependencies to be declared at any point

- Overrides angular.module() method

####Install

```
bower https://github.com/DveMac/angular-module-shim.git --save
```

####Usage

```

// module can be specified without dependencies
angular.module('myModule');

// dependencies can be added at any point
angular.module('myModule', ['dep1']);
// ... other code
angular.module('myModule', ['dep2']);

```

####Build

```
make build      # build lib
make test       # run unit tests
```