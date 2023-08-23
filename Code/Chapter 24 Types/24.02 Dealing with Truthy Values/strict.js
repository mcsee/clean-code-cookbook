!true // returns false
!false // returns true

isActive = true 
!isActive // returns false

age = 54
!age // should return type mismatch (or 54 factorial!)
array = []
!array // should return type mismatch
obj = new Object;
!obj // should return type mismatch (what is an obejct negated in a real domain?)

!!true // returns true - it is idempotent
!!false // returns false - it is idempotent

!!isActive // returns true - it is idempotent
!!age // nonsense
!!array // nonsense
!!obj // nonsense