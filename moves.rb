def moves(array)
  left_idx, right_idx = 0, array.length - 1
  move_count = 0
  while left_idx < right_idx
    if array[left_idx].odd? && array[right_idx].even?
      move_count += 1
      left_idx += 1
      right_idx -= 1
      next
    end

    if array[left_idx].even?
      left_idx += 1
    end

    if array[right_idx].odd?
      right_idx -= 1
    end
  end

  move_count
end

p moves(a)
