import random

def dbl(f):
    r = f()
    return r+r

def doubler(f):
    def inner():
        r = f()
        return r+r
    return inner


def capit(f):
    def inner():
        r = f()
        return r.capitalize()
    return inner

# using the decorator is the same as writing
# get_name = doubler(get_name) after the get_name definition
@capit
@doubler
def get_name():
    names=['tom','harry','sue','dana','horatio','pablo']
    return random.choice(names)


def lnames():
    s=[get_name() for x in range(10)]
    return s
    

def argexample(*args,**kwargs):
    print len(args)
    print args
    print kwargs

def argprint1(f):
    def inner(*args,**kwargs):
        print args
        print kwargs
        print f.__name__
        # we could do more stuff before the call here
        r = f(*args,**kwargs)
        # We could do stuff like logging or more stuff here
        return r
    return inner

from functools import wraps

def argprintfinal(f):
    @wraps(f)
    def inner(*args,**kwargs):
        print args
        print kwargs
        print f.__name__
        # we could do more stuff before the call here
        r = f(*args,**kwargs)
        # We could do stuff like logging or more stuff here
        return r
    return inner



@argprintfinal
def f1(a,b):
    print a,b

@argprintfinal
def f2(a,b,**name):
    print a,b,name
