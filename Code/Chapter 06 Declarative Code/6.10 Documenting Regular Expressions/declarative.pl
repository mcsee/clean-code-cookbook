
val prefix = "\\+"
val digit = "[0-9a-zA-Z]"
val space = "[– -]"
val phoneRegex = Regex("^$prefix(?:$digit$space?){6,14}$digit$")