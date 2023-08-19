package main

import (
    "fmt"
    "strings"
)

func main() {
    var str = `aaaaaaaaaaaaaaaaaaaaaaaa!`
    
    words := strings.Fields(str)
    
    for i, word := range words {
        if len(word) >= 2 && word[0] >= 'a' && word[0] <= 'z' && word[len(word)-1] >= 'A' 
            && word[len(word)-1] <= 'Z' {
                fmt.Println(word, "found at index", i)
        }
    }
}