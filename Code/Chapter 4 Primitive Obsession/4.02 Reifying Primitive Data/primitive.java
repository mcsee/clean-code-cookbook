int port = 8080;
InetSocketAddress in = open("example.org", port);
String uri = urifromPort("example.org", port);
String address = addressFromPort("example.org", port);
String path = pathFromPort("example.org", port);