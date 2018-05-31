import { LinkedList } from '../index'
import { Node } from '../Node'

/*
   linkedListNode Tests
*/
test('Jest is working, LinkedList is imported', () => {
  expect(typeof LinkedList).toBe('function')
})

// test LinkedListNode init
test('LinkedListNode init', function testNodeInit () {
  const node = new Node('foo')
  expect(typeof node).toEqual('object')
  expect(node.getNodeValue()).toEqual('foo')
  expect(node.nextNode).toEqual(null)
})

// test Node .getNodeValue()
test('Node getNodeValue', function testNodeGetValue () {
  const node = new Node('foo')
  expect(node.getNodeValue()).toEqual('foo')
})

// test Node .setNodeValue()
test('Node setNodeValue', function testNodeSetValue () {
  const node = new Node('foo')
  node.setNodeValue('bar')
  expect(node.getNodeValue()).toEqual('bar')
})

// test LinkedListNode .setNodeValue()
test('LinkedListNode setNextNode', function testNextNode () {
  const node = new Node('foo')
  const otherNode = new Node('bar')
  node.setNextNode(otherNode)
  const nextNode = node.getNextNode()
  expect(typeof node.getNextNode()).toBe('object')
  expect(nextNode.getNodeValue()).toEqual('bar')
})

// test LinkedListNode .setNodeValue()
test('LinkedList setNextNode', function testLinkedList () {
  const node = new Node('foo')
  const otherNode = new Node('bar')
  const list = new LinkedList(1, node)
  expect(list.headNode.value).toBe('foo')
})
