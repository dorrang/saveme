<template>
  <div class="new-ev-container">
    <img
      class="event-img"
      :src="require(`../assets/imgs/${ev.imgUrl}.png`)"
      alt=""
    />
    <h3 class="title">{{ ev.eventName }}</h3>

    <form class="event-form">
      <p class="txt-lable">תיאור היעד</p>
      <input class="txt-input" type="text" name="" />
      <p class="txt-lable">כמה היעד יעלה</p>
      <input class="txt-input" type="number" />
      <p class="txt-lable">למתי צריך את הכסף</p>
      <input class="txt-input" type="month" placeholder="חודש / שנה" name="" />
    </form>
    <div class="btn" @click="getStarted()">שמור יעד</div>
  </div>
</template>

<script>
export default {
  name: "create-event",
  props: { ev: Object },
  data() {
    return {
      newEv: {},
    };
  },
  methods: {
    getStarted() {
      this.$router.push(`/account`);
    },
  },
  mounted() {
    console.log(this.ev);
  },
};
</script>
