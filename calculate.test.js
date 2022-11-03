const calculate = require('./calculate')

it('should add two numbers',()=>{

    const expected = 30;
    
    const received = calculate.sum(10,20);

    expect(received).toBe(expected)


})


it('should be null if any num is null',() => {

    const expected = null;
    const received = calculate.sum(null,20);
    expect(received).toBe(expected);

})

it('should be null if any num is null',() => {

    const expected = null;
    const received = calculate.sum(20,null);
    expect(received).toBe(expected);
    
})

it('should be null if any num is null',() => {

    const expected = null;
    const received = calculate.sum('20','10');
    expect(received).toBe(expected);
    
})
 
it('negative number',() => {
    expect(() => {
        calculate.sum(-10, -20);
    }).toThrowError('Cannot add negative numbers');
})