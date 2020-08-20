/**
 * Limiting the function calls to be one call over a set amount of time (milliseconds).
 * @param {number} delay - The duration between function calls in Milliseconds.
 * @param {boolean} atBegin - Excute the first call immediately then debounce. Default is false.
 */
export function Debounce(delay: number, atBegin: boolean = false) {
    if(delay < 0) {
        console.warn('Limit should be zero or greater');
    }
    let timeout;
    return (targetClass, functionName: string, descriptor: PropertyDescriptor) => {
        const source = descriptor.value;
        let inProgress = false;

        descriptor.value = function (...args) {
            if (atBegin && !inProgress) {
                inProgress = true;
                timeout = setTimeout(() => {
                    inProgress = false;
                }, delay)
                return source.call(this, ...args);
            }
            clearTimeout(timeout);
            inProgress = true;
            timeout = setTimeout(() => {
                inProgress = false;
                return source.call(this, ...args)
            }, delay)
        }
    }
}