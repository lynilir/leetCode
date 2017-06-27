def delete_node(node)
    next_node = node.next
    next_next_node = next_node.next
    node.val = next_node.val
    node.next = next_next_node
end
