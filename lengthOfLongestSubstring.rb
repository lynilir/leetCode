# @param {String} s
# @return {Integer}

require 'Set'

def length_of_longest_substring(s)
  seen = Set.new
  longest = 0
  curLength = 0
  s.each_char do |char|
    if seen.include?(char)
      curLength = 1
    else
      seen << char
      curLength += 1
      longest = curLength if curLength > longest
    end
  end

  return longest
end


puts length_of_longest_substring('cat') == 3
puts length_of_longest_substring('abcabcbb') == 3
puts length_of_longest_substring('bbbbb') == 1
puts length_of_longest_substring('pwwkew') == 3
