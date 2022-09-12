<template>
  <div class="pref-container">
    <h4>ההזדהות הושלמה!<br />עכשיו נגדיר את אופן החיסכון:</h4>
    <img src="../assets/imgs/card.png" alt="" />
    <form>
      <div>
        <div class="content-container">
          <div class="section-container">
            <input
              class="checkbox"
              type="checkbox"
              name="round-up"
              value="round-up"
              checked
            />

            <p for="round-up">עיגול כלפי מעלה בכל חיוב</p>
          </div>
          <div class="round-up">
            <input class="radio-btn" type="radio" name="amount" />
            <label for="2">2 ש"ח</label>
            <input class="radio-btn" type="radio" name="amount" checked />
            <label for="5">5 ש"ח</label>
            <input class="radio-btn" type="radio" name="amount" />
            <label for="10">10 ש"ח</label>
          </div>
        </div>
        <hr />
        <div class="content-container">
          <div class="section-container">
            <input type="checkbox" class="checkbox" checked />
            <p class="rtl">חיסכון חודשי קבוע של {{ monthlySavings }} ש"ח</p>
          </div>
          <input
            class="ltr"
            type="range"
            name=""
            id=""
            min="0"
            max="500"
            v-model="monthlySavings"
            value="0"
            step="1"
          />
        </div>
        <hr />
        <div class="content-container">
          <div class="section-container">
            <input type="checkbox" class="checkbox" checked />
            <p>הנחות במעמד החיוב. <a href="">קרא עוד +</a></p>
          </div>
        </div>
      </div>
    </form>
    <div class="btn" @click="getStarted()">המשך</div>
  </div>
</template>

<script>
export default {
  name: "pref",
  data() {
    return {
      monthlySavings: 0,
    };
  },
  methods: {
    getStarted() {
      this.$router.push(`/events`);
    },
  },

  destroyed() {
    this.monthlySavings = 0;
  },
};
</script>
