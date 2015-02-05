import random

def d1(x):
    r = x()
    return r+r


def doubler(func):
    def inner():
        result = func()
        return result + result
    return inner

def capit(func):
    def inner():
        result = func()
        return result.capitalize()
    return inner
# addding @doubler is like
# later on saying get_name = doubler(get_name)
@capit
@doubler
def get_name():
    names=['tom','sue','alan','scott','sarah','howie']
    return random.choice(names)

def sample(*args,**kwargs):
    print args
    print kwargs
    

def argprinter1(func):
    def inner(*args, **kwargs):
        print args
        print kwargs
        print func.__name__
        result =  func(*args,**kwargs)
        # we could do logging or something here
        return result
    return inner

@argprinter1
def f1(a,b,**name):
    print a,b
    
from functools import wraps
def argprinterfinal(func):
    @wraps(func)
    def inner(*args, **kwargs):
        print args
        print kwargs
        print func.__name__
        result =  func(*args,**kwargs)
        # we could do logging or something here
        return result
    return inner
    
@argprinterfinal
def f2(a,b,c):
    print a,b,c
