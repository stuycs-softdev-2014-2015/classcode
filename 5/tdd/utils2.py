import unittest
def validate_password(pword):
    if len(pword)<6:
        return False
    return None


def add2(a,b):
    """
    add a and bsssssss

    >>> add2(5,8)
    13
    >>> add2(1,2)
    3
    """
    return a+b



class cdemo():
    def __init__(self,x):
        print "You sent "+str(x)
    def m1(self):
        self.x = self.x + 1

    def m2(self,x):
        self.x = x
        
class UtilsTest(unittest.TestCase):
    def setUp(self):
        pass
    def tearDown(self):
        pass
    def test_short(self):
        r = validate_password("aaa")
        self.assertEqual(r,False)
        
    def test_long(self):
        r = validate_password("1234567890")
        self.assertEqual(r,False)

    def test_goodLength(self):
        r = validate_password("1234567")
        self.assertEqual(r,True)

if __name__ == "__main__":
    #unittest.main()
    suite = unittest.TestLoader().loadTestsFromTestCase(UtilsTest)
    unittest.TextTestRunner(verbosity=2).run(suite)
