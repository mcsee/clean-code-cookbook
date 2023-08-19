package main

import (
    "regexp"
    "fmt"
)

func main() {
    var re = regexp.MustCompile(`^(([a-z])+.)+[A-Z]([a-z])+$`)
    var str = `aaaaaaaaaaaaaaaaaaaaaaaa!`
    
    for i, match := range re.FindAllString(str, -1) {
        fmt.Println(match, "found at index", i)
    }
}