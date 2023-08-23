def calculate_average(numbers):
    total = 0
    count = 0
        for number in numbers:
    total += number
            count += 1
        average = total / count
    return average

numbers = [1, 2, 3, 4, 5]
print("The average is:", calculate_average(numbers))
