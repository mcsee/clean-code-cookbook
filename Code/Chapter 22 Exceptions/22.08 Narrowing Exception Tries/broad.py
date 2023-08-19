import calendar, datetime
try: 
    birthYear= input('Birth year:')
    birthMonth= input('Birth month:')
    birthDay= input('Birth day:')
    # we don't expect the above to fail
    print(datetime.date(int(birthYear), int(birthMonth), int(birthDay)))
except ValueError as e:
    if str(e) == 'month must be in 1..12': 
        print('Month ' + str(birthMonth) + ' is out of range. The month must be a number in 1...12')
    elif str(e) == 'year {0} is out of range'.format(birthYear): 
        print('Year ' + str(birthYear) + ' is out of range. The year must be a number in ' + str(datetime.MINYEAR) + '...' + str(datetime.MAXYEAR))
    elif str(e) == 'day is out of range for month': 
        print('Day ' + str(birthDay) + ' is out of range. The day must be a number in 1...' + str(calendar.monthrange(birthYear, birthMonth)))
