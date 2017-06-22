# @param {Integer[]} nums
# @return {Integer}
def array_pair_sum(nums)
  sorted = nums.sort
  sum = 0
  i = 0
  while i < sorted.length
    sum += sorted[i]
    i += 2
  end

  sum
end

a = [9,1,5,6,7,2]
# p a.sort
p array_pair_sum(a)
