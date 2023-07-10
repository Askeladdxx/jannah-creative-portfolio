<template>
  <div class="creative-portfolio">
    <div class="navbar row justify-between q-mx-xl">
      <q-img
        class="navbar-logo q-my-lg q-mx-md"
        src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/358489236_811763850318304_625678229363180827_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeErTXsAZrZhkwpI2zbWNtDGybaws-Jjcw_JtrCz4mNzDwxxbAbm8EIAjpEzKgn7rR5-o-_O6NLyXeFmuP3-9qz-&_nc_ohc=5RcYNKXmgEIAX_8Sle-&_nc_ht=scontent.fmnl9-2.fna&oh=03_AdR84ZLyRuhauAldb2HAPHT_JaKkBxLxPdRhwLNC9l5cUA&oe=64CE3AE1"
      />

      <div class="flex flex-center">
        <div v-for="(button, index) in navbtns" :key="index" class="q-mx-sm">
          <q-btn
            dense
            no-caps
            flat
            class="btn-navbar bg-teal q-pa-xs"
            @click="handleNavButtonClick(button)"
          >
            {{ button }}
          </q-btn>
        </div>
      </div>
    </div>
    <div class="body column items-center q-mt-xl">
      <div class="q-pt-lg">
        <h1 class="intro-header text-center q-mb-xl text-bold">Jannah Gail</h1>
      </div>
      <div class="flex flex-center">
        <div v-for="(button, index) in buttons" :key="index">
          <q-btn
            dense
            no-caps
            flat
            class="btn-category q-mx-sm bg-teal q-pa-xs"
            @click="handleButtonClick(button)"
          >
            {{ button }}
          </q-btn>
        </div>
      </div>
      <div class="home-image q-pa-lg q-mt-lg">
        <q-img
          class="image"
          src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/306952828_3220139231580514_5908725760674104367_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFZ5MJqVkVJO2BiavxJUlbA8rM2acimACbyszZpyKYAJleZS6uT-YFV3j_ynopnJx_6SET5KbMgBbWgKGY-21N1&_nc_ohc=OErg2pLfEFcAX-yqWqe&_nc_ht=scontent.fmnl9-1.fna&oh=00_AfBfZnF07gGYwQfumf9MnYTiG_eP-T8XPG_SWtr8me8FJQ&oe=64AFC461"
        />
      </div>
    </div>
  </div>
</template>
<script src="./scripts/homepage"></script>

<style lang="scss">
@import "./styles/portfolio.scss";
</style>
