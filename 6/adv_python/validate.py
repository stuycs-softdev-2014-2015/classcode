
def validate_pword(pword):
    
    l = len(pword)
    if l<6 or l>8:
        return False

    # has_dig = False
    # for c in pword:
    #     if c.isdigit():
    #         has_dig = True
    #         break
        
    # DIGITS = "0123456789"
    # has_dig = False
    # for c in pword:
    #     if c in DIGITS:
    #         has_dig = True
    #         break

    # UC_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    # has_uc = False
    # for c in pword:
    #     if c in UC_letters:
    #         has_uc = True
    #         break

    UC_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_letters = "abcdefghijklmnopqrstuvwxyz"
    DIGITS = "0123456789"
    has_uc     = len([1 for c in pword if c in UC_letters] )>0
    has_lc     = len([1 for c in pword if c in LC_letters] )>0 
    has_digit  = len([1 for c in pword if c in DIGITS] )>0
    return has_uc and has_lc and has_digit


p = "ThisisaTestPword123"
UC_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
