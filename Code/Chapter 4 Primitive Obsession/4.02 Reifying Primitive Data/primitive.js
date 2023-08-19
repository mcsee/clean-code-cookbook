// Samples borrowed with permission from
// https://towardsdev.com/why-a-host-is-not-a-string-and-a-port-is-not-an-integer-595c182d817c

var port = 8080;

var in = open("example.org", port);
var uri = urifromPort("example.org", port);
var address = addressFromPort("example.org", port);
var path = pathFromPort("example.org", port);