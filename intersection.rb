require 'set'

def intersection(nums1, nums2)
    nums1_set = Set.new
    intersects = Set.new
    nums1.each do |el|
        nums1_set << el
    end

    nums2.each do |el|
        intersects << el if nums1_set.include?(el)
    end

    return intersects.to_a
end

nums1 = [1, 2, 2, 1]
nums2 = [2, 2]

p intersection(nums1, nums2)
