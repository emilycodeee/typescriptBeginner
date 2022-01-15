import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter {
  // readonly client: string
  // private details: string
  // amount: number
  //  預設為public amount: number

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}
