# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end
# @param {TreeNode} t1
# @param {TreeNode} t2
# @return {TreeNode}
def merge_trees(t1, t2)
    return nil if t1.nil? && t2.nil?
    if t1
      v1, l1, r1 = t1.val, t1.left, t1.right
    else
      v1, l1, r1 = 0, nil, nil
    end

    if t2
      v2, l2, r2 = t2.val, t2.left, t2.right
    else
      v2, l2, r2 = 0, nil, nil
    end

    node = TreeNode(v1+v2)
    node.left = self.mergeTrees(l1, l2)
    node.right = self.mergeTrees(r1, r2)
    return node
end


# if not t1 and not t2: return None
#         if t1:
#         else:
#         if t2:
#             v2, L2, R2 = t2.val, t2.left, t2.right
#         else:
#             v2, L2, R2 = 0, None, None
#         node = TreeNode(v1+v2)
#         node.left = self.mergeTrees(L1, L2)
#         node.right = self.mergeTrees(R1, R2)
#         return node
