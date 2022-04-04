/*
* This program test stack class.
*
* @author  Abdul Basit Butt
* @version 1.0
* @since   2022-02-03
*/

'use strict'

export class MrCoxallStack {
  // this is a stack class.
  private stack: unknown[] = []

  push (pushValue: unknown) {
    // this method adds a value to the stack.
    this.stack.push(pushValue)
  }

  showStack () {
    // this prints out the stack.
    for (let counter = this.stack.length - 1; counter >= 0; counter--) {
      console.log(this.stack[counter])
    }
  }

  pop () {
    // this method removes the last part of the stack.
    let returnValue: unknown
    if (this.stack.length !== 0) {
      returnValue = this.stack.pop()
    } else {
      returnValue = null
    }
    return returnValue
  }
}
