const routes = [
  {
    path: "/",
    component: () => import("pages/Portfolio/HomePage.vue"),
  },
  {
    path: "/2d-art",
    name: "2d-art",
    component: () => import("pages/Portfolio/2DArt.vue"),
  },
  {
    path: "/3d-art",
    name: "3d-art",
    component: () => import("pages/Portfolio/3DArt.vue"),
  },
  {
    path: "/graphic-design",
    name: "graphic-design",
    component: () => import("pages/Portfolio/GraphicDesign.vue"),
  },
  {
    path: "/logo-and-mockup",
    name: "logo-and-mockup",
    component: () => import("pages/Portfolio/LogoAndMockup.vue"),
  },
  {
    path: "/pixel-art",
    name: "pixel-art",
    component: () => import("pages/Portfolio/PixelArt.vue"),
  },
  {
    path: "/about-me",
    name: "about-me",
    component: () => import("pages/Portfolio/AboutMe.vue"),
  },
  {
    path: "/social-media",
    name: "social-media",
    component: () => import("pages/Portfolio/SocialsPage.vue"),
  },
  {
    path: "/experience",
    name: "experience",
    component: () => import("pages/Portfolio/ExperiencePage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
