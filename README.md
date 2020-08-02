# verdaccio-badger-test
Minimal test Badge for verdaccio-badger middleware plugin.

[![Test badge](/-/badger/@paddek/verdaccio-badger-test/test.svg)]()

## Requirements

* verdaccio@4.x or higher
* verdaccio-badger@1.x or higher middleware plugin

```
 npm install --global @paddek/verdaccio-badger-test
```

## Usage

Next lines show the minimal configuration for verdaccio and verdaccio-badger to use the test badge.  
```
middlewares:
  badger:
    enabled: true
    badges:
      '@paddek/verdaccio-badger-test':
        name: test.svg
        useCache: false
        options:
          prefix: v
```

If you publish the test badge to your verdaccio you should be able to see the resulting badge.