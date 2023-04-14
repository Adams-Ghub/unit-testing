


const stringLength = (string) => {
    if (string.length >= 1 && string.length <= 10) {
        return string.length;
    }
    else {
        return "Error"
    }

}

const reverseString = (string) => {
    let text = ''
    for (let i = string.length; i >= 0; i--) {
        text += string.charAt(i)
    }
    return text
}

class calculator {

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        return a / b;
    }

    multiply(a, b) {
        return a * b
    }
}

const capitalize = (string) => {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1);

    return capitalized
}

module.exports = { stringLength, reverseString, calculator, capitalize }