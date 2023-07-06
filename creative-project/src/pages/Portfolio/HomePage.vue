<template>
  <div class="creative-portfolio">
    <div class="navbar flex flex-start">
      <q-img
        class="navbar-logo q-my-lg q-mx-md"
        src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/358489236_811763850318304_625678229363180827_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeErTXsAZrZhkwpI2zbWNtDGybaws-Jjcw_JtrCz4mNzDwxxbAbm8EIAjpEzKgn7rR5-o-_O6NLyXeFmuP3-9qz-&_nc_ohc=5RcYNKXmgEIAX_8Sle-&_nc_ht=scontent.fmnl9-2.fna&oh=03_AdR84ZLyRuhauAldb2HAPHT_JaKkBxLxPdRhwLNC9l5cUA&oe=64CE3AE1"
      />
      <h6 class="text-bold">Jannah Gail</h6>
    </div>
    <div class="body">
      <div class="intro-header q-pt-lg">
        <h1 class="text-center">Jannah Gail <br />Creative Portfolio</h1>
      </div>
      <div class="row justify-center">
        <q-btn
          flat
          class="q-mx-md"
          color="primary"
          label="Game Character"
          @click="onClick"
          no-caps
        />
        <q-btn
          flat
          class="q-mx-md"
          color="primary"
          label="Icons"
          no-caps
          @click="onClick"
        />
        <q-btn
          flat
          class="q-mx-md"
          color="primary"
          label="Product Designs"
          no-caps
          @click="onClick"
        />
      </div>
    </div>
  </div>
</template>
<script src="./scripts/homepage.js"></script>

<style lang="scss">
@import "./styles/portfolio.scss";
</style>
