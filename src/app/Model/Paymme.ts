export class Paymme{
  vendor: number;
  amount: number;
  note: string;
  constructor( vendor, amount, note) {
    this.vendor = vendor;
    this.amount = amount;
    this.note = note;
  }
}
