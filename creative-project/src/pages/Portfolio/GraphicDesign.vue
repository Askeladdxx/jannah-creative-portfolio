<template>
  <div class="creative-portfolio">
    <div class="navbar row justify-between q-mx-xl">
      <q-img
        class="navbar-logo q-my-lg q-mx-md"
        src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/358489236_811763850318304_625678229363180827_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeErTXsAZrZhkwpI2zbWNtDGybaws-Jjcw_JtrCz4mNzDwxxbAbm8EIAjpEzKgn7rR5-o-_O6NLyXeFmuP3-9qz-&_nc_ohc=5RcYNKXmgEIAX_8Sle-&_nc_ht=scontent.fmnl9-2.fna&oh=03_AdR84ZLyRuhauAldb2HAPHT_JaKkBxLxPdRhwLNC9l5cUA&oe=64CE3AE1"
      />

      <div class="flex flex-center">
        <div v-for="(navbtns, index) in navbtns" :key="index" class="q-mx-sm">
          <q-btn
            dense
            no-caps
            flat
            class="btn-navbar bg-teal q-pa-xs text-white"
          >
            {{ navbtns }}
          </q-btn>
        </div>
      </div>
    </div>
    <div class="body column items-center q-mt-xl">
      <div class="q-pt-lg">
        <h1 class="intro-header text-center q-mb-xl text-bold">
          Graphic Design
        </h1>
      </div>
    </div>
  </div>
</template>
<script src="./scripts/homepage"></script>

<style lang="scss">
@import "./styles/portfolio.scss";
</style>
