/**
 * Limiting the function calls to be one call over a set amount of time (milliseconds).
 * @param {number} limit - The duration between function calls in Milliseconds.
 * @param {takeFirst} limit - Excute the first call immediately then debound.
 */
export function Debounce(interval: number, takeFirst?: boolean) {
    if(interval < 0) {
        console.warn('Limit should be zero or greater');
    }
    let timeout;
    return (targetClass, functionName: string, descriptor: PropertyDescriptor) => {
        const source = descriptor.value;
        let inProgress = false;

        descriptor.value = function (...args) {
            if (takeFirst && !inProgress) {
                inProgress = true;
                timeout = setTimeout(() => {
                    inProgress = false;
                }, interval)
                return source.call(this, ...args);
            }
            clearTimeout(timeout);
            inProgress = true;
            timeout = setTimeout(() => {
                inProgress = false;
                return source.call(this, ...args)
            }, interval)
        }
    }
}