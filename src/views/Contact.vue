<template>
  <div class="contact-view">
    <main class="main">
      <header class="contact-us-header">
        <h4 class="title" ref="aboutMe">CONTACT ME</h4>
      </header>

      <section>
        <ul class="contact">
          <li
            class="contact-item"
            v-for="(contact, index) in contactInfo"
            :key="index"
          >
            <div class="contact-item-icon">
              <font-awesome-icon :icon="contact.icon" />
            </div>

            <div class="contact-item-text">{{ contact.text }}</div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      contactInfo: [
        {
          text: "thanhphunguyen1890@gmail.com",
          icon: "envelope"
        },
        {
          text: "+84 85 252 3575",
          icon: "mobile-alt"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-view {
  width: 100%;
  height: 100%;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 0px;
  margin-top: 90px;

  .contact-us-header {
    text-align: center;
    padding-bottom: 30px;

    .title {
      display: inline-block;
      letter-spacing: 2px;
      font-size: 1.8rem;
      position: relative;
      padding-bottom: 10px;
      border-bottom: 3px solid #1f1c1c;
    }
  }
}

.contact {
  font-family: "Arial", "sans-serif";
}

.contact-item {
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.contact-item-text {
  margin-left: 18px;
}

.contact-item-icon {
  flex-basis: 17px;
}

@media only screen and (max-width: 500px) {
  .contact-us-header {
    padding-bottom: 10px !important;
    margin-top: 50px !important;

    .title {
      font-size: 1.2rem !important;
      padding-bottom: 5px !important;
    }
  }
}
</style>