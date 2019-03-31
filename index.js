export default class Hydrated {
  hydrate() {
    throw new Error('Override hydrate() in hydrated subclasses')
  }
}

Hydrated.stores = {}
Hydrated.__hydrating = false

Hydrated.hydrate = async (...args) => {
  if (Hydrated.__hydrating) return
  try {
    const promises = []
    for (const key in Hydrated.stores) {
      if (args.length && args.indexOf(key) !== -1) continue
      promises.push(Hydrated.stores[key].hydrate())
    }
    await Promise.all(promises)
  } catch (err) {
    console.log('Error hydrating stores')
  }
}
