export const getBalance = {
  data () {
    return {
      balance: null,
      contributed: null
    }
  },

  computed: {
    currentlyAvailable: function() {
     return (this.tokensAvailable - this.tokensSold - (this.balance / Math.pow(10, 18)).toFixed(0))
    },
    currentPercent: function() {
      return (100 - (this.currentlyAvailable * 100 / this.tokensAvailable ).toFixed(0))
    },
    currentContribution: function() {
      return (this.contributed / Math.pow(10, 18)).toFixed(2)
    }
  },
  
  methods: {
    getBalanceZXC: function () {
      this.$axios.get('https://api.0xcert.org/balance')
      .then((response) => {
        this.$data.balance = response.data.data.balance
      })
      .catch((error) => {
        console.log(error)
      })
      if (this.currentlyAvailable < 1000) {
        this.$store.dispatch('gotoCrowdsaleSoldout')
      } 
      setTimeout(() => {
        this.getBalanceZXC();
      }, 5000);
    },

    getBalanceETH: function () {
      this.$axios.get('https://api.etherscan.io/api?module=account&action=balance&address=0xC1678c7d5f4D01D30aD72BC5848bb7DFB248B5B9&tag=latest&apikey=5T3I3XZ4E89V6S1T2K9PAFVSYPQUDINNV5')
      .then((response) => {
        this.$data.contributed = response.data.result
      })
      .catch((error) => {
        console.log(error)
      })
      setTimeout(() => {
        this.getBalanceETH();
      }, 5000);
    },
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
}