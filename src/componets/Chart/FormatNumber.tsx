 export function FormatNumber(num: number) {
    if (num >= 1000000) {
        // Для чисел в миллионах
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'м';
    } else if (num >= 1000) {
        // Для чисел в тысячах
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'к';
    }
    return num.toString(); // Возврат исходного числа, если оно меньше 1000
  }