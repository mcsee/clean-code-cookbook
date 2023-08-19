// Samples borrowed with permission from
// https://towardsdev.com/why-a-host-is-not-a-string-and-a-port-is-not-an-integer-595c182d817c

const server = Port.parse(this, "www.kivakit.org:8080");
// Port is a smallobject with responsibilities and protocol

let in = port.open(this);
const uri = port.asUri(this);
const address = port.asInetSocketAddress();
const path = port.path(this, "/index.html");