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
    <div class="row justify-center">
      <div class="carousel-container col-4 q-pa-md q-mr-md">
        <q-carousel
          class="carousel-graphic"
          animated
          v-model="slide"
          navigation
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.15752-9/358911790_964530114751922_1216060958009602603_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGvKmKEtYreRKBpZkjjXUgVQbduP6Nq9UJBt24_o2r1QhgWLY5dTUoeBxozI9rNow1RH_bwjrFxZQq0I4B7-wE7&_nc_ohc=3X7TZY8HM6sAX9hm4pi&_nc_ht=scontent.fmnl9-4.fna&oh=03_AdSKKgvdYV3QFrg_BaYPLo0r3ZmZKed1yuOw8kB0ZvAzGA&oe=64D0DA8A"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358861734_1062043038514839_2781219056881981687_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHJ3g-h1NtpiO8kJG4KpZ693ik0CF5MbfXeKTQIXkxt9XsnxtXw0db-4G7K34Wa3AJWwZf1tYEo8Oih8BA_isor&_nc_ohc=rw3OndEQMrYAX-3GYMf&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdSY18g4LTJfKetaltPOCmU6P7SOZLBVOelZOG6-lIWB3w&oe=64D0FAC5"
          />
        </q-carousel>
      </div>

      <div class="text-container col-4 q-ml-xl">
        <div>
          <h4 class="carousel-header text-center">graphic design highlights</h4>
        </div>
        <div class="q-mx-sm">
          <p class="text-justify">{{ getSlideText() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./scripts/graphicDesign"></script>

<style lang="scss">
@import "./styles/portfolio.scss";
</style>
