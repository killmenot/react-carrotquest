[![Build Status](https://img.shields.io/travis/killmenot/react-carrotquest/master.svg?style=flat-square)](https://travis-ci.org/killmenot/react-carrotquest)
[![npm version](https://img.shields.io/npm/v/killmenot/react-carrotquest.svg?style=flat-square)](https://www.npmjs.com/package/react-carrotquest-module)
[![npm downloads](https://img.shields.io/npm/dm/react-carrotquest-module.svg?style=flat-square)](https://www.npmjs.com/package/react-carrotquest-module)

# react-carrotquest
### React CarrotQuest Manager Module


## Installation

[npm](https://www.npmjs.com/):

```bash
npm install react-carrotquest-module --save
```

## Usage

Initializing CarrotQuest Module:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './routes'

...
import CarrotQuestManager from 'react-carrotquest-module'

const carrotQuestManagerArgs = {
  carrotQuestId: '12345-b52c96bea30646abf8170f333b'
}

CarrotQuestManager.initialize(carrotQuestManagerArgs)
...

const app = document.getElementById('app')
ReactDOM.render(<Router routes={routes} />, app)

```


|Value|Type|Required|Notes|
|------|-----|-----|-----|
|gtmId| `String`| Yes | GTM id, must be something like `12345-b52c96bea30646abf8170f333b`.|


### Note:

- Disabling javascript in the browser can prevent the correct operation of this library if React is only being rendered on the client side.
