type Bit = 0 | 1;

export class Binary {
  bits: Bit[];

  constructor(bits: Bit[]) {
    this.bits = bits;
  }

  convertToDecimal(): number {
    let total = 0;
    this.bits.forEach((bit, i) => {
      let power = this.bits.length - 1 - i;
      total += bit * (2 ** power);
    });
    return total;
  }

  and(other: Binary): Binary {
    let emptySlotLength = Math.abs(this.bits.length - other.bits.length);
    for(let i = 0; i < emptySlotLength; i++) {
      if(this.bits.length > other.bits.length) {
        other.bits.unshift(0);
      } else if(other.bits.length > this.bits.length) {
        this.bits.unshift(0);
      }
    }

    let result: Bit[] = [];
    this.bits.forEach((bit, i) => {
      if(bit === 0 || other.bits[i] === 0) result.push(0);
      else result.push(1);
    });

    return new Binary(result);
  }

  or(other: Binary): Binary {
    let emptySlotLength = Math.abs(this.bits.length - other.bits.length);
    for(let i = 0; i < emptySlotLength; i++) {
      if(this.bits.length > other.bits.length) {
        other.bits.unshift(0);
      } else if(other.bits.length > this.bits.length) {
        this.bits.unshift(0);
      }
    }

    let result: Bit[] = [];
    this.bits.forEach((bit, i) => {
      if(bit === 1 || other.bits[i] === 1) result.push(1);
      else result.push(0);
    });

    return new Binary(result);
  }

  not(): Binary {
    let result: Bit[] = [];
    this.bits.forEach(bit => {
      if(bit === 0) result.push(1);
      else result.push(0);
    });
    return new Binary(result);
  };

  xor(other: Binary): Binary {
    let emptySlotLength = Math.abs(this.bits.length - other.bits.length);
    for(let i = 0; i < emptySlotLength; i++) {
      if(this.bits.length > other.bits.length) {
        other.bits.unshift(0);
      } else if(other.bits.length > this.bits.length) {
        this.bits.unshift(0);
      }
    }

    let result: Bit[] = [];
    this.bits.forEach((bit, i) => {
      if(bit !== other.bits[i]) result.push(1);
      else result.push(0);
    });

    return new Binary(result);
  };
};

