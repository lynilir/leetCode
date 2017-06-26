def is_anagram(s, t)
  return false unless s.length == t.length
  s_hash = Hash.new(0)
  s.chars { |char| s_hash[char] += 1 }
  t.chars do |char|
    s_hash[char] -= 1
    return false if s_hash[char] < 0
  end
  true
end

puts is_anagram('abcd', 'dcba')
