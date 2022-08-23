<template>
  <div class="get-started">
    <img class="saveme-logo" alt="SaveMe" src="../assets/imgs/logo.png" />

    <div v-if="gotCode" class="get-container">
      <div class="code-container">
        <p>נא להזין את הקוד שהתקבל</p>
        <input class="partitioned" type="text" maxlength="6" autofocus />
      </div>
    </div>

    <div v-else class="get-container">
      <img src="../assets/imgs/hand-icon.png" alt="" />
      <h3 class="title">שמחים לפגוש אותך!</h3>
      <p class="content">
        תהליך הזדהות קצר ואפשר להתחיל לחסוך באשראי, בקלות בהנאה ובמגוון אפשרויות
        השקעה.
      </p>
      <form class="auth-form">
        <p class="txt-lable">ת.ז /דרכון</p>
        <input class="txt-input" type="number" name="" />
        <p class="txt-lable">6 ספרות אחרונות של כרטיס ישראכרט</p>
        <input class="txt-input" type="number" name="" />

        <h4>איך לשלוח לך קוד הזדהות?</h4>
        <div class="radio">
          <div>
            <input class="radio-btn" type="radio" name="" value="sms" />
            <label for="">SMS</label>
          </div>
          <div>
            <input class="radio-btn" type="radio" name="" value="email" />
            <label for="">אימייל</label>
          </div>
          <div>
            <input class="radio-btn" type="radio" name="" value="voicemsg" />
            <label for="">מענה קולי</label>
          </div>
        </div>
      </form>
      <div class="btn" @click="getCode()">שלחו לי קוד</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "get-started",
  data() {
    return {
      gotCode: false,
    };
  },
  methods: {
    getCode() {
      this.gotCode = !this.gotCode;
    },
  },
};
</script>
