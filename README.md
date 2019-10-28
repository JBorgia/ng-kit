# ng-kit
A shared collection of themes and angular components designed by and for the ngk web-application team

**How To build**
1. To set new version, modify projects/ng-kit/package.json
2. In ng-kit root run `ng build ng-kit`

**How To deploy**
1. `cd projects/ng-kit/dist` 
2. `npm publish`

**How To link ng-kit to test changes in another project**
1. First, build the project (see how to build above).
2. In ng-kit root run `npm link projects/ng-kit/dist`
3. In the root of the project that has ng-kit as a dependency run `npm link ng-kit`
* Note the npm link provides a symlink in your global node_modules, so you can now use this link in
 other projects that depend on ng-kit.  This allows you to see changes made to ng-kit 
 without the need to publish every change to a remote repo.
