import unittest

def validate_password(pword):
    l = len(pword)
    if l<6 or l>8:
        return False
    else:
        return True

class TestDemo(unittest.TestCase):
    def setUp(self):
        pass
    def tearDown(self):
        pass
    def test_short(self):
        r = validate_password("123")
        self.assertEqual(r,False)
    def test_long(self):
        r = validate_password("1234567890")
        self.assertEqual(r,False)
    def test_goodlength(self):
        r = validate_password("123456")
        self.assertEqual(r,True)
        



class cdemo():
    def __init__(self,x=20):
        print x
        print "in the constructor"
        
    def add1(self):
        self.x = self.x + 1

    def get_x(self):
        return self.x

    def init_x(self,x):
        self.x = x
    def m2(self,x):
        print "Hello from methodman - x - %d"%(x)

    
if __name__=="__main__":
    #unittest.main()
    suite = unittest.TestLoader().loadTestsFromTestCase(TestDemo)
    unittest.TextTestRunner(verbosity=2).run(suite)
    
