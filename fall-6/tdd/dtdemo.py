

def add2(a,b):
    """
    params: a, b numbers
    returns: sum a + b

    >>> add2(3,5)
    8

    >>> add2(10,0)
    10
    """
    return a+b

if __name__=="__main__":
    import doctest
    doctest.testmod()
    
