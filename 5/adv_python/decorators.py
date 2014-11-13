from functools import wraps
 
def memoize(func):
    t={}
    @wraps(func)
    def inner(*args):
        if args in t:
            return t[args]
        else:
            t[args] = func(*args)
            return t[args]
    return inner
@memoize
def fib(n):
    if n < 2:
        return 1
    else:
        return fib(n-2)+fib(n-1)


def fib2(n,t={}):
    if n in t.keys():
        return t[n]
    elif n < 2:
        return 1
    else:
        r = fib2(n-2,t)+fib2(n-1,t)
        t[n]=r
        return r
    
