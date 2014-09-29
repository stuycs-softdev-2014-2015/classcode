

def validate_password(pword):
    l = len(pword)
    if l<6 or l>8:
        return False

    # has_digit = False
    # for c in pword:
    #     if c.isdigit():
    #         has_digit = True
    #         break

    # has_uc = False
    # for c in pword:
    #     if ord(c)>=ord('A') and ord(c)<=ord("Z"):
    #         has_uc = True
    
    # has_uc = False
    # UC_letters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    # for c in pword:
    #     if c in UC_letters:
    #         has_uc = True

    LC_letters  = "abcdefghijklmnopqrstuvwxyz"
    UC_letters  =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    DIGITS      = "0123456789"
    has_uc = len([1  if c in UC_letters for c in pword])>0
    has_lc = len([1  if c in LC_letters for c in pword])>0
    has_digit =  len([1  if c in DIGITS for c in pword])>0
    
    return has_digit and has_uc and has_lc
