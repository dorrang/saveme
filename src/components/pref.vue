<template>
  <div class="pref-container">
    <h4>ההזדהות הושלמה!<br />עכשיו נגדיר את אופן החיסכון:</h4>
    <img src="../assets/imgs/card.png" alt="" />
    <form>
      <div>
        <div>
          <input
            class="checkbox"
            type="checkbox"
            name="round-up"
            value="round-up"
            checked
          />
          <p for="round-up">עיגול כלפי מעלה בכל חיוב</p>
          <div>
            <input class="radio-btn" type="radio" name="2" />
            <label for="2">2 ש"ח</label>
            <input class="radio-btn" type="radio" name="5" />
            <label for="5">5 ש"ח</label>
            <input class="radio-btn" type="radio" name="10" />
            <label for="10">10 ש"ח</label>
          </div>
        </div>
        <hr />
        <input type="checkbox" class="checkbox" checked />
        <p class="rtl">חיסכון חודשי קבוע של {{ monthlySavings }} ש"ח</p>
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
        <hr />

        <input type="checkbox" class="checkbox" checked />
        <label>הנחות במעמד החיוב. <a href="">קרא עוד +</a></label>
      </div>
    </form>
    <div class="btn">המשך</div>
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
      this.$router.push(`/get-started`);
    },
  },

  destroyed() {
    this.monthlySavings = 0;
  },
};
</script>
