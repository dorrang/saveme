<template>
  <div class="account-container">
    <!-- <img class="saveme-logo" alt="SaveMe" src="../assets/imgs/logo.png" /> -->

    <div class="account-total">
      <p>סה"כ בחשבון</p>
      <h1>{{ accountTotal }}</h1>
    </div>
    <table class="trans-list">
      <tr v-for="trans in account.transList" :key="trans.transId">
        <td>{{ trans.date }}</td>
        <td>{{ trans.amount }}</td>
        <td class="edit-section">
          <!-- <button><router-link :toy="toy" :to="'/toy/details/'+toy._id">Details</router-link></button>
            <button><router-link :to="'/toy/edit/'+toy._id">Edit</router-link></button>
            <button @click="removeToy(toy._id)">Remove</button> -->
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
      accountTotal: "₪23,567",
      account: {
        total: "₪23,567",
        transList: [
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
            date: "14/08/21",
            amount: "24",
          },
          {
            transId: 5,
            date: "17/08/21",
            amount: "8",
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
        ],
      },
    };
  },
};
</script>
