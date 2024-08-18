type Bit = 0 | 1;

export class Binary {
  bits: Bit[];

  constructor(bits: Bit[]) {
    this.bits = bits;
  }

  toDecimal(): number {
    let total = 0;
    this.bits.forEach((bit, i) => {
      let power = this.bits.length - 1 - i;
      total += bit * (2 ** power);
    });
    return total;
  }

  static fromUnsigned(num: number): Binary {
    let result: Bit[] = [];
    while(num > 0) {
      let bit = num % 2 as Bit;
      result.unshift(bit);
      num = Math.floor(num / 2);
    }
    return new Binary(result);
  };

  zeroExtend(other: Binary): [Binary, Binary] {
    let emptySlotLength = Math.abs(this.bits.length - other.bits.length);
    for(let i = 0; i < emptySlotLength; i++) {
      if(this.bits.length > other.bits.length) {
        other.bits.unshift(0);
      } else if(other.bits.length > this.bits.length) {
        this.bits.unshift(0);
      }
    }
    return [new Binary(this.bits), new Binary(other.bits)];
  };

  // Opearators
  and(other: Binary): Binary {
    let [bit01, bit02] = this.zeroExtend(other);

    let result: Bit[] = [];
    bit01.bits.forEach((bit, i) => {
      if(bit === 0 || bit02.bits[i] === 0) result.push(0);
      else result.push(1);
    });

    return new Binary(result);
  }

  or(other: Binary): Binary {
    let [bit01, bit02] = this.zeroExtend(other);

    let result: Bit[] = [];
    bit01.bits.forEach((bit, i) => {
      if(bit === 1 || bit02.bits[i] === 1) result.push(1);
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
    let [bit01, bit02] = this.zeroExtend(other);

    let result: Bit[] = [];
    bit01.bits.forEach((bit, i) => {
      if(bit !== bit02.bits[i]) result.push(1);
      else result.push(0);
    });

    return new Binary(result);
  };

  add(other: Binary): Binary {
    let num01 = this.toDecimal();
    let num02 = other.toDecimal();
    let result = Binary.fromUnsigned(num01 + num02);
    return result;
  }
};

