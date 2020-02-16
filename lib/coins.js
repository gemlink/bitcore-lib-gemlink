// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
const coinNames = {
  BCH: 'bch',
  BSV: 'bsv',
  BTC: 'btc',
  BTG: 'btg',
  LTC: 'ltc',
  ZEC: 'zec',
  DASH: 'dash',
  XSG: 'xsg',
  TXSG: 'txsg'
}

const coinList = [{
    messagePrefix: '\x18ZCash Signed Message:\n',
    bech32: 'bc',
    name: 'zcash livenet',
    alias: 'mainnet',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x2bb40e60
    },
    coin: coins.ZEC
  },
  {
    messagePrefix: '\x18Snowgem Signed Message:\n',
    bech32: 'bc',
    name: 'snowgem livenet',
    alias: 'mainnet',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1c28,
    scriptHash: 0x1c2D,
    wif: 0x80,
    zaddr: 0x169a,
    zkey: 0xab36,
    networkMagic: 0x24c82764,
    port: 16113,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    dnsSeeds: [
      'dnsseed1.snowgem.org',
      'dnsseed2.snowgem.org',
      'dnsseed3.snowgem.org',
    ],
    coin: coins.XSG
  },
  {
    messagePrefix: '\x18Snowgem Signed Message:\n',
    bech32: 'bc',
    name: 'snowgem testnet',
    alias: 'testnet',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1c28,
    scriptHash: 0x1c2D,
    wif: 0x80,
    zaddr: 0x169a,
    zkey: 0xab36,
    networkMagic: 0x24c82764,
    port: 16113,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    dnsSeeds: [
      'dnsseed1.snowgem.org',
      'dnsseed2.snowgem.org',
      'dnsseed3.snowgem.org',
    ],
    coin: coins.TXSG
  }
]

module.exports = {
  coinNames,
  coinList
}