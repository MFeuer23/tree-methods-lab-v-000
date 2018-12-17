function inOrder(node) {
  let order = []
  if(node.left) {
    inOrder(node.left)
  }
  order.push(node.data)
  console.log(node.data)
  if(node.right) {
    inOrder(node.right)
  }
  return order
}

function findOrAdd(rootNode, newNode){
  let currentNode = rootNode
  if(newNode.data < rootNode.data){
      currentNode = rootNode.left
      if(currentNode){
        findOrAdd(currentNode, newNode)
      } else {
        rootNode.left = newNode
      }
  } else if(newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if(currentNode){
      findOrAdd(currentNode, newNode)
    } else {
      rootNode.right = newNode
    }
  }
  return true
}


function max(node) {
 return inOrder(node)
}