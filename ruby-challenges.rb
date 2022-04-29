# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# Create a method called even_or_odd.
# Use conditional statement to iterate.
# Expected output: 7 is odd.
# Expected output: 42 is even.
# Expected output: 221 is odd.

def even_or_odd num
  if num % 2 == 0
    "#{num} is even"
  elsif num % 2 != 0
    "#{num} is odd"
  end
end

p even_or_odd (num1)
p even_or_odd (num2)
p even_or_odd (num3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Create a method called vowel_removal.
# Use built in method to iterate and remove vowels from string.
# Expected output: 'Rbbr Sl'
# Expected output: 'Sgt Pppr'
# Expected output: 'bby Rd'

def vowel_removal (string)
  string.delete('aeiouAEIOU')
end

p vowel_removal (album1)
p vowel_removal (album2)
p vowel_removal (album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Create a method called palindrome.
# Use a conditional to iterate elements in each string.
# Use built in methods reverse and capitalize to check if string is a palindrome.
# Expected output: 'Racecar is a palindrome'
# Expected output: 'LEARN is not a palindrome'
# Expected output: 'Rotator is a palindrome'

def palindrome (string)
  if string === string.reverse.capitalize
    "#{string} is a palindrome"
  else
    "#{string} is not a palindrome"
  end
end

p palindrome (palindrome_tester1)
p palindrome (palindrome_tester2)
p palindrome (palindrome_tester3)
