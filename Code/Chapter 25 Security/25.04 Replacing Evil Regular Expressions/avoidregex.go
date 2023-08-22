func main() {
    var candidateString = "aaaaaaaaaaaaaaaaaaaaaaaa!"

    words := strings.Fields(candidateString)

    for index, word := range words {
        if len(word) >= 2 && word[0] >= ’a’ && 
            word[0] <= ’z’ && word[len(word)-1] >= ’A’
            && word[len(word)-1] <= ’Z’ {
                fmt.Println(word, "found at index", index)
        }
    }
}