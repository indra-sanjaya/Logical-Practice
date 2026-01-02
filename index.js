function filterDown() {
    let num = [1, 2, 2, 3, 4, 4, 5]

    let ones = {}

    let arr = []

    num.forEach (n => {

        if (!ones[n]) {
            
            ones[n] = 1

        } else {

            ones[n]++

        }
    })

    for (const key in ones) {

        if (ones[key] === 1) {

            arr.push(Number(key))

        }

    }

    return arr

}

console.log(filterDown());


function stringUp(text) {

  let seen = new Set()

  let left = 0

  let maxCount = 0

  for (let right = 0; right < text.length; right++) {

    while (seen.has(text[right])) {
        
        seen.delete(text[left])

        left++

    }

    seen.add(text[right])

    maxCount = Math.max(maxCount, right - left + 1)

  }

  return maxCount

}

console.log(stringUp('abcabcabbb'));

function overlapCheck(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i][1] > arr[i + 1][0]) {
            
            return true

        }
        
    }

    return false
    
}

console.log(overlapCheck([[1, 4], [5, 6], [4, 6]]));

function stringUp2(arr) {
    
    let maxCount = 1
    
    let current = 1
    
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] > arr[i - 1]) {
  
            current++
  
        } else {
  
            current = 1
  
        }
  
        maxCount = Math.max(maxCount, current)

    }

    return maxCount

}

console.log(stringUp2([1, 2, 2, 3, 4, 1, 2, 3]));

function firstUniqueChar(s) {
    
    const count = {}
    
    for (let i = 0; i < s.length; i++) {
        
        count[s[i]] = (count[s[i]] || 0) + 1
    
    }
    
    for (let i = 0; i < s.length; i++) {
        
        if (count[s[i]] === 1) {
            
            return i
        
        }
    
    }
    
    return -1

}

console.log(firstUniqueChar("aabbccdeff"));

function canBeNonOverlapping(intervals) {
    
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length - 1; i++) {

        if (intervals[i][1] > intervals[i + 1][0]) {
        
            return false;
        
        }
    
    }

    return true;

}

console.log(canBeNonOverlapping([[1,2], [3,4], [2,3]]));

