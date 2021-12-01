
const { numberToCron } = require('./utils')
const Utils = require('./utils')

test('properly convert number to cron from datetime', () =>{
    // if (numberToCron('2001-12-01 12:00:00')===1007229600000){

    // }
    expect(numberToCron('2021-11-30 6:25:00')).toBe('cron(25 12 30 11 ? 2021)')
    
})

test('properly convert number to cron from millisecond', () =>{
    // if (numberToCron('2001-12-01 12:00:00')===1007229600000){

    // }
    expect(numberToCron(1638296700000)).toBe('cron(25 18 30 11 ? 2021)')
    
})

test('properly convert number to cron from date', () =>{
    // if (numberToCron('2001-12-01 12:00:00')===1007229600000){

    // }
    expect(numberToCron('30 Nov 2021')).toBe('cron(0 6 30 11 ? 2021)')
    
})