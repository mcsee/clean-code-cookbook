func main() {
    var regularExpression = 
        regexp.MustCompile(`^(([a-z])+.)+[A-Z]([a-z])+$`)
    var candidateString = "aaaaaaaaaaaaaaaaaaaaaaaa!"
    for index, match := 
        range regularExpression.FindAllString(candidateString, -1) {
            fmt.Println(match, "found at index", index)
    }
}