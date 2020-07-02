const long = "this is a really long string";
const superlong = long
  .repeat(9999999)
  .repeat(9999999999999)
  .repeat(999999999999);
const humongous = superlong
  .repeat(999)
  .repeat(999)
  .repeat(999)
  .repeat(999)
  .repeat(999);
const gargantuan = humongous
  .repeat(9999999)
  .repeat(9999999)
  .repeat(9999999)
  .repeat(999999);
const tremendous = gargantuan
  .repeat(999999999)
  .repeat(9999999)
  .repeat(99999999)
  .repeat(9999999);
const unbelievable = tremendous
  .repeat(9999999)
  .repeat(99999999)
  .repeat(9999999)
  .repeat(999999);
const trulyAbsurd = unbelievable
  .repeat(99999)
  .repeat(99999)
  .repeat(999999)
  .repeat(99999);

const primeNumbers = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199,
];

const absurdArray = new TextEncoder().encode(trulyAbsurd);
const mindBoggling = primeNumbers
  .flatMap((val) => absurdArray.map((uint) => uint * val))
  .join(trulyAbsurd);

export default mindBoggling;
