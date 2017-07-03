def intersect(nums1, nums2)
  hash1 = Hash.new { |h, v| h[v] = 0 }
  common_hash = {}
  result = []
  nums1.each do |num|
    hash1[num] += 1
  end

  nums2.each do |num|
    if hash1[num] > 0
      result.push(num)
      hash1[num] -= 1
    end
  end

  result
end
