
def validate_password(pword):

    # has_digit = False
    # for c in pword:
    #     if c.isdigit():
    #         has_digit = True

    # DIGITS = "0123456789"
    # has_digit = False
    # for c in pword:
    #     if c in DIGITS:
    #         has_digit = True

    # has_uc = False
    # for c in pword:
    #     if ord(c) >= ord("A") and ord(c) <= ord("Z"):
    #         has_uc = True
            
    # UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"    
    # for c in pword:
    #     if c in UC_LETTERS:
    #         has_uc = True
    
    l = len(pword)
    if l < 6 or l > 8:
        return False

    UC_LETTERS  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"    
    LC_LETTERS  = "abcdefghijklmnopqrstuvwxyz"
    DIGITS      = "0123456789"

    has_uc     = len([1 for x in pword if x in UC_LETTERS])>0
    has_lc     = len([1 for x in pword if x in LC_LETTERS])>0
    has_digit  = len([1 for x in pword if x in DIGITS])>0

    return has_uc and has_lc and has_digit
    
