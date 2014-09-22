import unittest

def valid_password(pword):
    l = len(pword)
    if l < 6 or l >8:
        return False
    else:
        return True



def test_password_case():
    pass

def test_password_number():
    pass

def test_password_length():
    r = valid_password("123")
    if r == False:
        print "short password passed"
    else:
        print "short password failed"

    r = valid_password("1234567890")
    if r == False:
        print "long password passed"
    else:
        print "long password failed"

    r = valid_password("1234567")
    if r == True:
        print "correct length passed"
    else:
        print "correct length failed"

def run_tests():
    test_password_case()
    test_password_number()
    test_password_length()


class TestPasswords(unittest.TestCase):
    def __init__(self):
        pass
    
    def m1(self,x):
        pass

    def m2(self):
        pass
    

if __name__=="__main__":
    run_tests()
    
