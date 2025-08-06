let A = [100, 112, 256, 349, 770];
let B = [72, 86, 113, 119, 265, 445, 892];
let k = 7;



function findKthElement(A, B, k) {
  let i = 0
  let j = 0
  let count = 0
  let current = null

  while (count < k) {
    if (i >= A.length) {
      current = B[j]
      j++
    } else if (j >= B.length) {
      current = A[i]
      i++
    } else if (A[i] < B[j]) {
      current = A[i]
      i++
    } else {
      current = B[j]
      j++
    }

    count++
  }

  return current
}

let result = findKthElement(A, B, k);
console.log("k-й элемент:", result); 


// Рекурсивный подход

function findKth(A, B, k) {
    if (A.length === 0) return B[k-1];
    if(B.length === 0) return A[k-1];
    if(k ===1) return Math.min(A[0]), B[0];

    let i = Math.min(Math.floor(k/2), A.length);
    let j = k - i;

    if(A[i-1] < B[j-1]) {
        return findKth(A.slice(i), B, k-i);
    }else {
        return findKth(A,B.slice(j), k-j);
    }

    }



