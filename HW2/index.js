Итерационная реализация.

function fibIterative(n) {
    if (n <=1) return n;

    let a = 0, b = 1;
    for(let i = 2; i <= n; i++) {
        let temp = a+b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(fibIterative(6));

Рекурсивная реализация.

function fibIterative(n) {
    if(n<=1) return n;
    return fibRecursive(n-1) + fibRecursive(n-2);
}

console.log(fibRecursive(6))

Ханойская башня

function hanoi(n, source, helper, target) {
  if (n === 1) {
    console.log(`Переместить диск ${n} с ${source} на ${target}`)
    return
  }
  hanoi(n - 1, helper, source, target)
  console.log(`Переместить диск ${n} с ${source} на ${target}`)
  hanoi(n - 1, helper, source, target)
}

hanoi(7, 'Левый', 'Средний', 'Правый')
