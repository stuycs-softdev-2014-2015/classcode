import random
def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc

functions = [inc,dec]

flist = [random.choice(functions) for x in range(10)]
fd = {'a':inc, 'b':dec }


def wrapper():
    print "Before declaring inner"
    def inner():
        return "in inner"
    print "After declaring inner"
    return inner

def make_adder(n):
    def inner(x,y):
        return x + y + n
    return inner

add3 = make_adder(3)
add5 = make_adder(5)

def make_counter():
    a = [0]
    def inner():
        a[0] = a[0] + 1
        return a[0]
    return inner

def make_counter_class():
    a =[0]
    def inc():
        a[0] = a[0]+1
    def dec():
        a[0] = a[0]-1
    def reset():
        a[0] = 0
    def get():
        return a[0]
    return {'inc': inc, 'dec': dec, 'reset': reset, 'get': get}

