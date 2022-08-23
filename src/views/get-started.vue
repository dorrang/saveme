<template>
  <div class="get-started">
    <img class="saveme-logo" alt="SaveMe" src="../assets/imgs/logo.png" />

    <div class="get-container">
      <img src="../assets/imgs/hand-icon.png" alt="" />
      <h3 class="title">שמחים לפגוש אותך!</h3>
      <p>
        תהליך הזדהות קצר ואפשר להתחיל לחסוך באשראי, בקלות בהנאה ובמגוון אפשרויות
        השקעה.
      </p>
      <form class="auth-form">
        <input class="txt-input" type="number" name="" />
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

      <div class="btn">שלחו לי קוד</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "get-started",
};
</script>
