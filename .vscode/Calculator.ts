export default class Calculator {
    private modules: { [key: string]: { [key: string]: Function } };

    constructor() {
        this.modules = {};
    }

    registerModule(name: string, module: { [key: string]: Function }) {
        this.modules[name] = module;
    }

    execute(moduleName: string, functionName: string, ...args: any[]) {
        const module = this.modules[moduleName];
        if (!module) {
            throw new Error(`Module "${moduleName}" not found.`);
        }

        const func = module[functionName];
        if (typeof func !== 'function') {
            throw new Error(`Function "${functionName}" not found in module "${moduleName}".`);
        }

        return func(...args);
    }
}
