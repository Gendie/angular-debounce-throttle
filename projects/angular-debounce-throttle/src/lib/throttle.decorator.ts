/**
 * Limiting the function calls to be one call over a set amount of time (milliseconds).
 * @param {number} delay - The duration between function calls in Milliseconds.
 */
export function Throttle(delay: number) {
    if(delay < 0) {
        console.warn('Limit should be zero or greater');
    }
    let lastFunc;
    let lastTrigger;
    return (targetClass, functionName: string, descriptor: PropertyDescriptor) => {
        const source = descriptor.value;
        
        descriptor.value = function(...args) {
            if(!lastTrigger || delay - (Date.now() - lastTrigger) <= 0) {
                source.call(this, ...args);
                lastTrigger = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    source.call(this, ...args);
                    lastTrigger = Date.now();
                }, delay - (Date.now() - lastTrigger));
            }
        }
    }
}