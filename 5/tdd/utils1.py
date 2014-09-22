
def validate_password(pword):
    if len(pword)<6 or len(pword)>8:
        return False
    return True

def test_password_length():
    r1 = validate_password("aaa")
    if r1 != False:
        print "short password test failed"
    else:
        print "short password test passed"
    
    r2 = validate_password("aaaaaaaaa")
    if r2 != False:
        print "long password test failed"
    else:
        print "long password test passed"
        
    r3 = validate_password("aaaaaaa")
    if r3 != True:
        print "correct length test failed"
    else:
        print "correct length password test passed"

def test_password_numbers():
    pass

def test_password_case():
    pass

def run_tests():
    test_password_length()
    test_password_numbers()
    test_password_case()

if __name__=="__main__":
        run_tests();
