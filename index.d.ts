declare module 'hydrated' {
  export default class Hydrated {
    static stores: {
      [key: string]: Hydrated
    }
    static hydrate(...args: string[]): Promise<any>
    hydrate(...args: string[]): Promise<any>
  }
}
