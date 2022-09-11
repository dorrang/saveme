<template>
  <div class="get-started">
    <img class="saveme-logo" alt="SaveMe" src="../assets/imgs/logo.png" />

    <div v-if="gotCode" class="get-container">
      <div class="code-container">
        <p class="title">נא להזין את הקוד שהתקבל</p>
        <input class="partitioned" type="text" maxlength="6" autofocus />
        <p class="txt">הקוד נשלח למספר:</p>
        <p class="ltr txt">
          {{ phoneNum }}
        </p>

        <p class="err-code" @click="getCode()">לא קיבלתי קוד</p>
        <div class="btn" @click="next()">המשך</div>
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
        <input
          class="txt-input"
          type="text"
          name=""
          maxlength="8"
          inputmode="numeric"
          v-model="passportLength"
          :style="{ 'border-color': passColor }"
          placeholder=""
          @change="colorErr('pass')"
        />
        <p class="txt-lable">6 ספרות אחרונות של כרטיס ישראכרט</p>
        <input
          class="txt-input"
          type="text"
          maxlength="6"
          placeholder=""
          pattern="[0-9]{6}"
          inputmode="numeric"
          v-model="cardLength"
          :style="{ 'border-color': cardColor }"
          @change="colorErr('card')"
        />

        <h4>איך לשלוח לך קוד הזדהות?</h4>
        <div class="radio">
          <div>
            <input
              class="radio-btn"
              type="radio"
              name="method"
              value="sms"
              checked
            />
            <label for="">SMS</label>
          </div>
          <div>
            <input class="radio-btn" type="radio" name="method" value="email" />
            <label for="">אימייל</label>
          </div>
          <div>
            <input
              class="radio-btn"
              type="radio"
              name="method"
              value="voicemsg"
            />
            <label for="">מענה קולי</label>
          </div>
        </div>
      </form>
      <div class="btn" @click="getCode()">שלחו לי קוד</div>
    </div>

    <pref v-if="showPref" />
  </div>
</template>

<script>
import pref from "@/components/pref.vue";

export default {
  components: { pref },
  name: "get-started",
  data() {
    return {
      gotCode: false,
      phoneNum: "058-****908",
      showPref: false,
      passColor: "#DBD5E0",
      cardColor: "#DBD5E0",
      passportLength: "",
      cardLength: "",
      isErr: false,
    };
  },
  methods: {
    getCode() {
      if (this.isErr) {
        return;
      } else {
        if (this.showPref) {
          this.next();
        }
      }
      this.gotCode = !this.gotCode;
      console.log(this.isErr);
    },
    next() {
      this.showPref = !this.showPref;
    },
    colorErr(val) {
      switch (val) {
        case "card":
          if (this.cardLength.length <= 5) {
            this.borderColor = "red";
            this.isErr = true;
          } else {
            this.borderColor = "#DBD5E0";
            this.isErr = false;
          }
          this.cardColor = this.borderColor;
          break;

        case "pass":
          if (this.passportLength.length <= 7) {
            this.borderColor = "red";
            this.isErr = true;
          } else {
            this.borderColor = "#DBD5E0";
            this.isErr = false;
          }
          this.passColor = this.borderColor;
          break;
      }
    },
  },
};
</script>
