# AngularDebounceThrottle

This package provides you with easy to use Throttling and Debouncing functionalities using decorators.

## Install

```bash
npm install angular-debounce-throttle --save
```

## Usage

### Throttle

```javascript
import { Throttle } from 'angular-debounce-throttle';

@Throttle(250)
public onScroll() {
    // Do scroll logic here
}
```

However the number of times you call the `onScroll` function it will excute only **maximum one time each 250 milliseconds**.

### Debounce

```javascript
import { Debounce } from 'angular-debounce-throttle';

@Debounce(500)
public search() {
    // Do search logic here
}
```

However the number of times you call the `search` function it will excute only **after you stop calling it by 500 milliseconds**.

```javascript
import { Debounce } from 'angular-debounce-throttle';

@Debounce(500, true)
public search() {
    // Do search logic here
}
```

For this example the first time you call the `search` function it will excute then debounce the rest of calls.

## API

### @Throttle(delay)

Throttle execution of a function. Especially useful for rate limiting execution of handlers on events like resize and scroll.

#### delay

Type: `Number`

A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.

### @Debounce(delay, takeFirst)

Debounce execution of a function. Debouncing, unlike throttling, guarantees that a function is only executed a single time, either at the very beginning of a series of calls, or at the very end.

#### delay

Type: `Number`

A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.

#### takeFirst

Type: `Number`

Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed delay milliseconds after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call. (After the throttled-function has not been called for delay milliseconds, the internal counter is reset).
