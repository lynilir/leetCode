# @param {Integer[]} numbers
# @param {Integer} target
# @return {Integer[]}
# Input: numbers={2, 7, 11, 15}, target=9
# Output: index1=1, index2=2
require 'Set'

def two_sum(numbers, target)
  seen = Hash.new
  numbers.each_with_index do |num, idx|
    if seen[target - num]
      return [seen[target - num], idx]
    else
      seen[num] = idx
    end
  end
end

numbers = [2, 7, 11, 15]
p two_sum(numbers, 9)
