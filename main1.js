const { createApp } = Vue;

let app = createApp({
  data() {
    return {
      title: "Áo Polo dành cho nam CoolMate",
      url: "https://shopee.vn/%C3%81o-Polo-Nam-AMES-5S-Ch%E1%BA%A5t-Li%E1%BB%87u-Coolmax-Ch%E1%BB%91ng-Nh%C4%83n-B%E1%BB%81n-M%C3%A0u-Thi%E1%BA%BFt-K%E1%BA%BF-Tr%E1%BA%BB-Trung-L%E1%BB%8Bch-S%E1%BB%B1-(APC22135)-i.127217331.17300501627",
      target: "_blank",
      prime: "250000",
    };
  },
  methods: {
    formatPrime() {
      var number = this.prime;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
  },
  component: {},
});

app.mount("#app");
