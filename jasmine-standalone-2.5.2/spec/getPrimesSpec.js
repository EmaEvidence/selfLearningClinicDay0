describe("Get prime numbers", function() {
  it("should return [2,3] for 3", function() {
    expect(getPrimes(3)).toEqual([2,3]);
  });
  it("should return [2,3,5,7] for 8", function() {
    expect(getPrimes(8)).toEqual([2,3,5,7]);
  });
  it("should return [2,3,5,7,11] for 12", function() {
    expect(getPrimes(12)).toEqual([2,3,5,7,11]);
  });
  it("should return [1,2,3,5,7,11,13] for 15", function() {
    expect(getPrimes(15)).toEqual([2,3,5,7,11,13]);
  });
  it("should return [] for -8", function() {
    expect(getPrimes(-8)).toEqual([]);
  });
  it("should return [] for -1", function() {
    expect(getPrimes(-1)).toEqual([]);
  });
  it("should return [] for 0", function() {
    expect(getPrimes(0)).toEqual([]);
  });
  it("should return [] for 0.9", function() {
    expect(getPrimes(0.9)).toEqual([]);
  });
  it("should return [] for 2.5", function() {
    expect(getPrimes(2.5)).toEqual([]);
  });
  it("should return [] for 12.5", function() {
    expect(getPrimes(12.5)).toEqual([]);
  });
  it("should return [] for 1", function() {
    expect(getPrimes(1)).toEqual([]);
  });
});