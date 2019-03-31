export default class Hydrated {
  static stores = {}
  static __hydrating = false

  static async hydrate(...args: string[]) {
    if (this.__hydrating) return
    try {
      const promises = []
      for (const key in this.stores) {
        if (args.length && args.indexOf(key) !== -1) continue
        promises.push(this.stores[key].hydrate())
      }
      await Promise.all(promises)
    } catch (err) {
      console.log('Error hydrating stores')
    }
  }

  hydrate() {
    throw new Error('Override hydrate() in hydrated subclasses')
  }
}
