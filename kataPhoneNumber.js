

    function createPhoneNumber(numbers){
        let one = numbers.toString().replace(/[\s.,%]/g, '').slice(0,3)
        let twoo = numbers.toString().replace(/[\s.,%]/g, '').slice(3,6)
        let three = numbers.toString().replace(/[\s.,%]/g, '').slice(6,10)
        console.log(`(${one}) `)
        console.log(three)
        let res = `(${one}) ${twoo}-${three}`
        console.log(res)
    }
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //"(123) 456-7890"  (123) 456-7890

