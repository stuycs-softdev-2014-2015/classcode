import random

def d0(s):
    return s+s

def d1(f):
    r = f()
    return r+r

def doubler(f):
    def inner():
        r = f()
        return r+r
    return inner

def capit(func):
    def inner():
        r = func();
        return r.capitalize()
    return inner

@capit
@doubler
def get_name():
    names =['tom','harry','dana','sue','sarah','horatio','bob','ralph']
    return random.choice(names)


def argexample(*args,**kwargs):
    print len(args)
    print args
    print kwargs

def argprint1(func):
    def inner(*args,**kwargs):
        print args
        print kwargs
        print func.__name__
        result = func(*args,**kwargs)
        # We could do something like logging here if we wanted to
        return result
    return inner

from functools import wraps
def argprintfinal(func):
    @wraps(func)
    def inner(*args,**kwargs):
        print args
        print kwargs
        print func.__name__
        result = func(*args,**kwargs)
        # We could do something like logging here if we wanted to
        return result
    return inner



@argprintfinal
def f1(a,b,c):
    print a,b,c

@argprintfinal
def f2(a,b,**c):
    print a,b,c
