<template>
  <div class="account-container">
    <!-- <img class="saveme-logo" alt="SaveMe" src="../assets/imgs/logo.png" /> -->

    <div class="account-total">
      <p>סה"כ בחשבון</p>
      <h1>{{ accountTotal }}</h1>
    </div>
    <table class="trans-list">
      <tr v-for="trans in account.transList" :key="trans.transId">
        <td class="date">{{ trans.date }}</td>
        <td class="amount">
          {{ trans.amount }}
          <span style="font-size: small">₪</span>
        </td>
        <td class="pointer edit-section">
          <img src="../assets/imgs/v-arrow.png" alt="" />
        </td>
      </tr>
    </table>
    <nav-bar />
  </div>
</template>

<script>
import navBar from "../components/nav-bar.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { navBar },
  name: "account",
  data() {
    return {
      accountTotal: "23,567",
      account: {
        total: "23,567",
        transList: [
          {
            transId: 0,
            date: "אוגוסט 2021",
            amount: "135",
          },

          {
            transId: 1,
            date: "06/08/21",
            amount: "10",
          },
          {
            transId: 2,
            date: "09/08/21",
            amount: "15",
          },
          {
            transId: 3,
            date: "14/08/21",
            amount: "12",
          },

          {
            transId: 4,
            date: "יולי 2021",
            amount: "223",
          },
          {
            transId: 5,
            date: "14/08/21",
            amount: "24",
          },
          {
            transId: 6,
            date: "18/08/21",
            amount: "12",
          },
          {
            transId: 7,
            date: "21/08/21",
            amount: "24",
          },
          {
            transId: 8,
            date: "17/08/21",
            amount: "12",
          },
        ],
      },
    };
  },
};
</script>
