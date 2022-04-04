/*
* This program is Stack Program 
*
* @author Abdul Basit 
* @version 1.0
* @since   2022-02-03
*/

import { MrCoxallStack } from "./index"
import promptSync from "prompt-sync"
const prompt = promptSync()

const aStack = new MrCoxallStack()

let input: string = prompt('Insert input:')
try {
  if (isNaN(Number(input))) {
    throw new Error('not a number')
  } else {
    aStack.push(Number(input))
    aStack.showStack()
  }
} catch (Expetion) {
  console.log('Not a number.')
}

input = prompt('Another input:')

console.log('If put the input raw in the stack:')

aStack.push(input)
aStack.showStack()

console.log('If we pop it once:')
aStack.pop()
aStack.showStack()

console.log('If we pop it again:')
aStack.pop()
aStack.showStack()

console.log('If we pop it empty:')
const temp: unknown = aStack.pop()

console.log('The output would be :\n' + temp)

console.log('\nDone.')
