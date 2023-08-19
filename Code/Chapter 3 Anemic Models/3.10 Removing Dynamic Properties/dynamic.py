class Dream:
    pass

nightmare = Dream()

nightmare.presentation = "I am the Sandman"
# presentation is not defined
# it is a dynamic property

print(nightmare.presentation) 
# Output: "I am the Sandman"