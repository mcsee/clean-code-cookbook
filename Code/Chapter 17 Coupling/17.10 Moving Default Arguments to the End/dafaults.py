def functionWithLastOptional(a, b, c='foo'):
    print(a)
    print(b)
    print(c)
functionWithLastOptional(1, 2)

def functionWithMiddleOptional(a, b='foo', c):
    print(a)
    print(b)
    print(c)
functionWithMiddleOptional(1, 2)

# SyntaxError: non-default argument follows default argument