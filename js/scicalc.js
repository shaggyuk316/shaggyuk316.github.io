class Calculator {
    constructor() {
        this.currentValue = 0;
        this.memory = 0;
        this.lastOperation = null;
        this.isRadians = true;
        this.algorithms = {};
        this.history = [];
        this.formulas = {};
        this.constants = {
            pi: Math.PI,
            planck: 6.62607015e-34,
            e: Math.E
        };
    }

    add(num) {
        this.currentValue += Number(num);
        this.addToHistory(`+ ${num}`, this.currentValue);
        return this.currentValue;
    }

    subtract(num) {
        this.currentValue -= Number(num);
        this.addToHistory(`- ${num}`, this.currentValue);
        return this.currentValue;
    }

    multiply(num) {
        this.currentValue *= Number(num);
        this.addToHistory(`× ${num}`, this.currentValue);
        return this.currentValue;
    }

    divide(num) {
        if (num === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.currentValue /= Number(num);
        this.addToHistory(`÷ ${num}`, this.currentValue);
        return this.currentValue;
    }

    sin() {
        this.currentValue = this.isRadians ? 
            Math.sin(this.currentValue) : 
            Math.sin(this.currentValue * Math.PI / 180);
        this.addToHistory(`sin(${this.isRadians ? 'rad' : 'deg'})`, this.currentValue);
        return this.currentValue;
    }

    cos() {
        this.currentValue = this.isRadians ? 
            Math.cos(this.currentValue) : 
            Math.cos(this.currentValue * Math.PI / 180);
        this.addToHistory(`cos(${this.isRadians ? 'rad' : 'deg'})`, this.currentValue);
        return this.currentValue;
    }

    tan() {
        const value = this.isRadians ? 
            this.currentValue : 
            this.currentValue * Math.PI / 180;
        if (Math.cos(value) === 0) {
            throw new Error("Tangent undefined at this angle");
        }
        this.currentValue = Math.tan(value);
        this.addToHistory(`tan(${this.isRadians ? 'rad' : 'deg'})`, this.currentValue);
        return this.currentValue;
    }

    createFormula(name, expression) {
        this.formulas[name] = expression;
        return `Formula '${name}' created: ${expression}`;
    }

    evaluateFormula(name, x) {
        if (!this.formulas[name]) {
            throw new Error(`Formula '${name}' not found`);
        }
        let expr = this.formulas[name]
            .replace(/x/g, x)
            .replace(/pi/g, this.constants.pi)
            .replace(/planck/g, this.constants.planck)
            .replace(/e/g, this.constants.e);
        try {
            this.currentValue = eval(expr);
            this.addToHistory(`Formula ${name}(${x})`, this.currentValue);
            return this.currentValue;
        } catch (error) {
            throw new Error(`Error evaluating formula: ${error.message}`);
        }
    }

    listFormulas() {
        return Object.entries(this.formulas).map(([name, expr]) => `${name}: ${expr}`);
    }

    createAlgorithm(name, steps) {
        this.algorithms[name] = steps;
        return `Algorithm '${name}' created with ${steps.length} steps`;
    }

    runAlgorithm(name) {
        if (!this.algorithms[name]) {
            throw new Error(`Algorithm '${name}' not found`);
        }
        const steps = this.algorithms[name];
        this.addToHistory(`Run ${name}`, this.currentValue);
        steps.forEach(step => {
            const { operation, value } = step;
            this[operation](value);
        });
        return this.currentValue;
    }

    listAlgorithms() {
        return Object.keys(this.algorithms);
    }

    addToHistory(operation, result) {
        this.history.push({
            operation: `${this.currentValue - result} ${operation} = ${result}`,
            timestamp: new Date().toLocaleTimeString()
        });
        if (this.history.length > 20) {
            this.history.shift();
        }
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
        return "History cleared";
    }

    toggleAngleMode() {
        this.isRadians = !this.isRadians;
        return this.isRadians ? "radians" : "degrees";
    }

    memoryStore() {
        this.memory = this.currentValue;
        this.addToHistory("Memory Store", this.memory);
        return this.memory;
    }

    memoryRecall() {
        this.addToHistory("Memory Recall", this.memory);
        return this.memory;
    }

    memoryClear() {
        this.memory = 0;
        this.addToHistory("Memory Clear", this.memory);
        return this.memory;
    }

    clear() {
        this.currentValue = 0;
        this.lastOperation = null;
        this.addToHistory("Clear", this.currentValue);
        return this.currentValue;
    }

    getResult() {
        return this.currentValue;
    }

    setValue(num) {
        this.currentValue = Number(num);
        this.addToHistory(`Set ${num}`, this.currentValue);
        return this.currentValue;
    }

    scientificExtend(methodName, callback) {
        this[methodName] = callback;
    }

