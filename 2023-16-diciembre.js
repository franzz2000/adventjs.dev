function transformTree(tree) {
    let index = arguments[1]??=0
    if (index >= tree.length || tree[index] === null) {
            return null;
    }

    const node = {
      value: tree[index],
      left: transformTree(tree,2*index+1),
      right: transformTree(tree, 2*index+2)
    };

    return node;
}
