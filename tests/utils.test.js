
const { numberToCron } = require('../src/utils/utils')
const Utils = require('../src/utils/utils')
describe('numberToCron Unit Test', () => {
    test('properly convert number to cron from datetime', () =>{
        expect(numberToCron('2021-11-30 6:25:00')).toBe('cron(25 6 30 11 ? 2021)')
        
    })
    
    test('properly convert number to cron from millisecond', () =>{
        expect(numberToCron(1638296700000)).toBe('cron(25 18 30 11 ? 2021)')
        
    })
    
    test('properly convert number to cron from date', () =>{

        expect(numberToCron('30 Nov 2021')).toBe('cron(0 0 30 11 ? 2021)')
        
    })
})

