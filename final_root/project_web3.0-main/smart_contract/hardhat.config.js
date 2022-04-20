//https://eth-ropsten.alchemyapi.io/v2/ysVhBFt4OeDWB6B3KomidfdT7TUcYFcq

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ysVhBFt4OeDWB6B3KomidfdT7TUcYFcq',
      accounts: ['1c2a23f8fa73e0000a25a3226594d7c3a11f461fd7a4e38dabc552e4d5187fcd'],
    },
  },
};