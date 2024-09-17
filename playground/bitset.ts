class BitSet {
  private words: number[];
  private WORD_LEN: number;
  private WORD_LOG: number;

  constructor() {
    this.words = [];
    this.WORD_LEN = 32;
    this.WORD_LOG = Math.log2(this.WORD_LEN);
  }

  add(index: number) {
    const wordIndex = index >> this.WORD_LOG;
    const bitIndex = index & 0b11111;

    this.words[wordIndex] |= 1 << bitIndex;
  }

  remove(index: number) {
    const wordIndex = index >> this.WORD_LOG;
    const bitIndex = index & 0b11111;

    this.words[wordIndex] &= ~(1 << bitIndex);
  }

  has(index: number): boolean {
    const wordIndex = index >> this.WORD_LOG;
    const bitIndex = index & 0b11111;

    return (this.words[wordIndex] & (1 << bitIndex)) !== 0;
  }
};
