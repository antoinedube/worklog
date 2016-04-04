// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by user-settings.js.
import { name as packageName } from "meteor/user-settings";

// Write your tests here!
// Here is an example.
Tinytest.add('user-settings - example', function (test) {
  test.equal(packageName, "user-settings");
});
