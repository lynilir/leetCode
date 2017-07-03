# Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
# determine if the input string is valid.
#
# The brackets must close in the correct order, "()" and "()[]{}" are all
# valid but "(]" and "([)]" are not.

def is_valid(s)
  second_half = []
  s.chars.each do |char|
    if char == '('
      second_half.push(')')
    elsif char == '['
      second_half.push(']')
    elsif char == '{'
      second_half.push('}')
    else
      return false unless second_half.pop == char
    end
  end
  second_half.empty?
end

p is_valid('[')
