virus = ['MERS', 'SARS']
vaccines = []
 
if vaccines:
	print ("let's get vaccinated")
else:
	print ("We have no vaccines yet. Keep researching")
    
if virus:
	print ("There are some virus around. Take extra care")
else:
	print ("We are free to get out. Not masks are necessary")

# equivalent
    
if not vaccines:
	print ("We have no vaccines yet. Keep researching")
else:
	print ("let's get vaccinated")
    
if not virus:
	print ("We are free to get out. Not masks are necessary")
else:
	print ("There are some virus around. Take extra care")