import unittest

def validate_password(pword):
    l = len(pword)
    if l < 6 or l >8:
        return False
    return True

def test_password_number():
    pass

def test_password_case():
    pass

def test_password_length():
    r = validate_password("123")
    if r==False:
        print "short password passed"
    else:
        print "short password failed"

    r = validate_password("0123456789")
    if r==False:
        print "long password passed"
    else:
        print "long password failed"

    r = validate_password("012345")
    if r==True:
        print "correct length password passed"
    else:
        print "correct length password failed"

def run_tests():
    test_password_case()
    test_password_number()
    test_password_length()


class TestValidate(unittest.TestCase):
    def __init__(self):
        pass
    def m1(self):
        pass
    def m2(self):
        pass


if __name__=="__main__":
    run_tests()
    
