Port server = Port.parse(this, "www.example.org:8080");
// Port is a smallobject with responsibilities and protocol

Port in = server.open(this); // returns a port, not a number
URI uri = server.asUri(this); // returns an URI
InetSocketAddress address = server.asInetSocketAddress();
// returns an Address
Path path = server.path(this, "/index.html"); // returns a Path
// all of them are validated small bijection objects
// with very few and precise
// responsibilities