import random

def inc(x):
    return x+1

f = inc

def dec(x):
    return x-1

fl=[inc,dec]

flist = [random.choice(fl) for x in range(10)]

fd = {'a':inc,'b':dec}


def outer():
    print "in outer before inner declaration"
    def inner():
        print "in inner"

    print "in outer after declaration"
    return inner

def make_adder(n):
    def inner(x):
        return x+n
    return inner

add3 = make_adder(3)
add5 = make_adder(5)


def make_counter():
    count = [0]
    def inc():
        count[0] = count[0] + 1
        return count[0]
    return inc

def make_counter_class():
    count = [0]
    def inc():
        count[0] = count[0] + 1
    def dec():
        count[0] = count[0] - 1
    def get():
        return count[0]
    def reset():
        count[0] = 0
    return {'inc': inc, 'dec': dec, 'reset': reset, 'get': get}
    

