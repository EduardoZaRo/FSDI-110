def variables():
    status = "found"
    price = 12.00
    print(status)
    
    if price > 90:
        print("Expensive")
def say_hi(name):
    print("Hi " + name)
def sum(a,b):
    print(a+b)
    
def divide(a,b):
    if(b == 0):
        raise Exception("Division by 0")
    else:
        return a/b
    
def sum_all_numbers():
    numbers = [3123,509,-23,45,1405,44,-2456,45,1234,778,1124,70,2956,82]
    result = 0
    counter = 0
    for num in numbers:
        result += num
        if num < 100:
            print(num)
            counter += 1
    print("Numbers array have " + str(counter) + " numbers less than 100")
    
    print("Sum of all numbers: " + str(result))
    
variables()
say_hi("Irvin")
sum(21,21)
# print(divide(2,0))
sum_all_numbers()
# Search about linux