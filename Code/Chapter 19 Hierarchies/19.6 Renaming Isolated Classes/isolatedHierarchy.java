abstract class PerserveranceDirection { 
}

class North extends PerserveranceDirection {}
class East extends PerserveranceDirection {}
class West extends PerserveranceDirection {}
class South extends PerserveranceDirection {}

// Subclasses have short names and meaningless outside the hierarchy
// If we reference East we might mistake it for the Cardinal Point