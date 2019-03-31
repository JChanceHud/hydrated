# hydrated

Keeps your data-stores hydrated with fresh data easily.

## Usage

### Install

```sh
npm install --save hydrated
```

### In Code

Hydrated is a class that has a single instance method, `hydrate`. This method should return a promise, during which data is reloaded.

Specific stores can be referenced by key to only hydrate specific stores.

At application initialization:

```ts
import Hydrated from 'hydrated'
import RaceStore from './stores/race'

const stores = {
  race: new RaceStore()
}

Hydrated.stores = stores
```

In a store:

```ts
import axios from 'axios'
import Hydrated from 'hydrated'

export default class RaceStore implements Hydrated {
  races: any[] = []
  async hydrate() {
    const { data } = await axios.get('/races')
    this.races = races
  }
}
```

In a component:

```ts
import React from 'react'
import Hydrated from 'hydrated'

export default class RaceList extends React.Component {
  async componentDidMount() {
    await Hydrated.hydrate('race')
  }
}
```
