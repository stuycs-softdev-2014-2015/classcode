import random

def d1(f):
    r = f()
    return r+r

def doubler(f):
    def inner():
        r = f()
        return r+r
    return inner

def get_name():
    names =['tom','harry','dana','sue','sarah','horatio','bob','ralph']
    return random.choice(names)
