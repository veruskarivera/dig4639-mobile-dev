import { Sum, AddList } from './MyMath.js'

describe('Testing AddList', ()=>{
  it('Returns the sum of a list of numbers', ()=>
  {
     let list = [1,2,3,4];
     let result = AddList(list);
     expect(result).toBe(10);
     list=[1,2,3,4,100,10000];
     result=AddList(list);
     expect(result).toBe(10110);
  })
  it('Member of list is undefined',() =>{
    let list= [1, undefined, 3, 4];
    let result= AddList(list);
    expect(result).toBeUndefined()
  })
});



describe('Testing Sum',() => {
it("Adds a string and a number",()=>{
   var result= Sum("Test", 5);
   expect(result).toBeUndefined();
});

test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3) })
test('Border cases', ()=>{
  expect(Sum(-10, 5)).toBe(-5)
  //expect(Sum(.1, .2)).toBe(.3)
  expect(Sum(1000000, 1000000)).toBe(2000000)
})
});
// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
