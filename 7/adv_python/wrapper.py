import random

def dbl(f):
    r = f()
    return r+r

def doubler(f):
    def inner():
        r = f()
        return r+r
    return inner


# using the decorator is the same as writing
# get_name = doubler(get_name) after the get_name definition

@doubler
def get_name():
    names=['tom','harry','sue','dana','horatio','pablo']
    return random.choice(names)


def lnames():
    s=[get_name() for x in range(10)]
    return s
    

