declare function test(msg: string, test: Function)
declare function expect (result: any)

import { LinkedList } from '..'
import { Node } from '../Node'

// test LinkedListNode(node)
test('LinkedList init', function testLinkedList () {
  const node = new Node('foo')
  const otherNode = new Node('bar')
  const list = new LinkedList(node)
  expect(list.headNode.value).toEqual('foo')
})

// test LinkedListNode .appendNode(value)
test('LinkedList appendNode', function appendNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  expect(list.length()).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
})

// test LinkedListNode .findNode(value)
test('LinkedList addLastNode', function addLastNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  expect(list.length()).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
  list.appendNode('bar')
  expect(list.length()).toEqual(2)
  const lastNode = list.findNode('bar')
  expect(lastNode.value).toEqual('bar')
})

// // test LinkedListNode .addAfterNode()
// test('LinkedList addAfterNode', function addAfterNode () {
//   const list = new LinkedList()
//   list.addFirstNode('foo')
//   expect(list.nodeCount).toEqual(1)
//   expect(list.headNode.value).toEqual('foo')
//   list.addLastNode('bar')
//   list.addAfterNode('foo', 'biz')
//   expect(list.nodeCount).toEqual(3)
// })

// // test LinkedListNode .addBeforeNode()
// test('LinkedList addBeforeNode', function addBeforeNode () {
//   const list = new LinkedList()
//   list.addFirstNode('foo')
//   expect(list.nodeCount).toEqual(1)
//   list.addBeforeNode('foo', 'bar')
//   expect(list.nodeCount).toEqual(2)
// })
