from functools import wraps

def memoize(f):
    t={}
    @wraps(f)
    def inner(*args):
        if args in t:
            return t[args]
        else:
            t[args] = f(*args)
            return t[args]
    return inner
        
@memoize
def fib(n):
    if n<2:
        return 1
   else:
        return fib(n-2)+fib(n-1)


def fib2(n,t={}):
    if n in t:
        return t[n]
    elif n < 2:
        return 1
    else: 
        t[n] = fib2(n-2,t)+fib2(n-1,t)
        return t[n]
