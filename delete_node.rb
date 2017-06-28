def delete_node(node)
  #given only access to the node to delete 
  next_node = node.next
  next_next_node = next_node.next
  node.val = next_node.val
  node.next = next_next_node
end
