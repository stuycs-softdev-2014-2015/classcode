from functools import wraps
 
def memoize(func):
    t={}
    @wraps(func)
    def inner(*args):
        #print args
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

@memoize
def lcslength(s1,s2,i,j):
    if i>=len(s1) or j >=len(s2):
        return 0
    elif s1[i]==s2[j]:
        return 1+ lcslength(s1,s2,i+1,j+1)
    else:
        return max(lcslength(s1,s2,i+1,j),lcslength(s1,s2,i,j+1))
import random
import string
def rstring(n):
    return "".join(random.choice(string.ascii_uppercase+string.digits) for x in range(n))

def dec_with_param(decargument):
    print "declaring the dec_with_param"+decargument
    def decorate(f):
        def inner(*args,**kwargs):
            print "in inner w/ decargument: "+decargument
            result = f(*args,**kwargs)
            return result
        return inner
    return decorate

@dec_with_param("message")
def hello():
    return "hello world"

