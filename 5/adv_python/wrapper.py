import random

def d1(x):
    r = x()
    return r+r


def doubler(func):
    def inner():
        result = func()
        return result + result
    return inner

# addding @doubler is like
# later on saying get_name = doubler(get_name)

@doubler
def get_name():
    names=['tom','sue','alan','scott','sarah','howie']
    return random.choice(names)
