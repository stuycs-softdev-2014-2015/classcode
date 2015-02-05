import unittest

def validate_password(pword):
    if len(pword)<6 or len(pword)>8:
        return False
    else:
        return True

class TestDemo(unittest.TestCase):
    def test_short(self):
        r = validate_password("123")
        self.assertEqual(r,False)
        
    def test_long(self):
        r = validate_password("1234567890")
        self.assertEqual(r,False)
        
    def test_goodlength(self):
        r = validate_password("1234567")
        self.assertEqual(r,True)

class cdemo():
    def __init__(self):
        print "In the constructor"
    def m1(self):
        self.x = self.x + 1
        print "self.x is now %d"%(self.x)
    def set_x(self,x):
        self.x = x

if __name__=="__main__":
    #unittest.main()
    suite = unittest.TestLoader().loadTestsFromTestCase(TestDemo)
    unittest.TextTestRunner(verbosity=2).run(suite)
        
