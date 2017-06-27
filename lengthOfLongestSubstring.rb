# @param {String} s
# @return {Integer}


def length_of_longest_substring(s)
  last_seen = Hash.new { |h, key| h[key] = 0 }
  longest = 0
  start = 0
  s.chars.each_with_index do |char, i|
    if last_seen[char] && start <= last_seen[char]
      start = last_seen[char] + 1
    else
      longest = [longest, i - start + 1].max
    end

    last_seen[char] = i
  end

  return longest
end


puts length_of_longest_substring('dvdf')
puts length_of_longest_substring('abcabcbb') == 3
puts length_of_longest_substring('bbbbb') == 1
puts length_of_longest_substring('pwwkew') == 3
