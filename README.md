# es6-multimix

Mix [classes][es6-classes-mixin] and [methods][es6-class-mixin] for an ES6 class to extend from.

[es6-classes-mixin]: https://github.com/lenville/es6-classes-mixin
[es6-class-mixin]: https://github.com/A/es6-class-mixin

## Install

```
npm i es6-multimix
```

## Usage

```js
import Base from '../base-class'
import * as methods from './methods'

class MyClass extends multimix(methods, Base) { ... }
```
