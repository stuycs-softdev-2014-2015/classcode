from functools import wraps

def memoize(f):
    t={}
    @wraps(f)
    def inner(*args):
        #print args
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

@memoize
def lcslength(s1,s2,i,j):
    if i>=len(s1) or j>=len(s2):
        return 0
    elif s1[i]==s2[j]:
        return 1+lcslength(s1,s2,i+1,j+1)
    else:
        return max(lcslength(s1,s2,i+1,j),lcslength(s1,s2,i,j+1))

import string,random
def make_string(n):
    return "".join(random.choice(string.ascii_uppercase+string.digits) for x in range(n))


def dec_with_param_and_the_funk(message):
    print "In the outer decorator with a parameter: "+message
    def decorate(f):
        print "In the decorator - message is: "+message
        def inner(*args,**kwargs):
            print "In inner - message is: "+message
            result = f(*args,**kwargs)
            return result
        return inner
    return decorate

@dec_with_param_and_the_funk("We want the funk")
def greet(name):
    return "hello "+name
