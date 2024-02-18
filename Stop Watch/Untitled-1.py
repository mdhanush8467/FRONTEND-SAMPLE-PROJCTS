# input="compuuter"
# vowels="aeiou"
# output=""
# for i in input:
#     for i in vowels:
#         if input[input.index(i)+1]==i:
#             output=output+i
#         else:
#             pass
#     else:
#         output=output+i
#         print(output)
input_str = "dhanush"
vowels = "aeiou"
output = ""

for x in input_str:
    if x in vowels:
        if x not in output:  # Check if the vowel is not already in the output string
            output += x

print(output)

    