<template>
  <div>
    <div class="events-container">
      <create-event v-if="chosenEv" :ev="chosenEv" />
      <div v-else>
        <h3>אלו יעדים ברצונך להגשים?</h3>
        <div class="events-grid">
          <div class="grid-item" @click="newEv('טיסה', 'plane-icon')">
            <img src="../assets/imgs/plane-icon.png" alt="" />
            <p class="grid-item-desc">טיסה</p>
          </div>
          <div class="grid-item" @click="newEv('טיול', 'tree-icon')">
            <img src="../assets/imgs/tree-icon.png" alt="" />
            <p class="grid-item-desc">טיול</p>
          </div>
          <div class="grid-item" @click="newEv('לימודים', 'student-icon')">
            <img src="../assets/imgs/student-icon.png" alt="" />
            <p class="grid-item-desc">לימודים</p>
          </div>
          <div class="grid-item" @click="newEv('רכב', 'car-icon')">
            <img src="../assets/imgs/car-icon.png" alt="" />
            <p class="grid-item-desc">רכב</p>
          </div>
          <div class="grid-item" @click="newEv('אירוע', 'cake-icon')">
            <img src="../assets/imgs/cake-icon.png" alt="" />
            <p class="grid-item-desc">אירוע</p>
          </div>
          <div
            class="grid-item"
            @click="newEv('חיסכון לילד', 'wheelcart-icon')"
          >
            <img src="../assets/imgs/wheelcart-icon.png" alt="" />
            <p class="grid-item-desc">חיסכון לילד</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import createEvent from "../components/create-event.vue";

export default {
  components: { createEvent },
  name: "events",
  data() {
    return {
      chosenEv: null,
    };
  },
  methods: {
    newEv(evName, evImg) {
      this.chosenEv = {
        eventName: evName,
        imgUrl: evImg,
      };
      //   console.log(evName);
    },
  },
};
</script>
