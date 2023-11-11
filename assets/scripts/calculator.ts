function add(num1: number, num2: number): number {
    return num1 + num2;
}

function sum(numbers: number[]): number {
    return numbers.reduce((a,b) => a+b)
}

window.addEventListener('load', () => {
    
    let addBtn = document.getElementById('addBtn');

    addBtn.addEventListener('click', (e) => {
        let num1 = document.getElementById('num1') as HTMLInputElement;
        let num2 = document.getElementById('num2') as HTMLInputElement;
        let value1 = parseInt(num1.value);
        let value2 = parseInt(num2.value);
        let result = document.getElementById('result');
    
        result.textContent = `${value1} + ${value2} = ${add(value1, value2)}`
    });
})