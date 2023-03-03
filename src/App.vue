<template>
  <!--navigation-->
  <header class="bg-brand-darkblue-3 shadow-lg shadow-brand-darkblue-3">
    <nav>
      <ul class="flex justify-end p-6">
        <li class="mr-6">
          <a class="hover:text-brand-teal" href="/#about">About</a>
        </li>
        <li class="mr-6">
          <a class="hover:text-brand-teal" href="/#projects">Projects</a>
        </li>
        <li class="mr-6">
          <a class="hover:text-brand-teal" href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>

  <div class="flex mx-20 my-10">
    <img class="profile" src="./assets/nicoleprofilecircle.png" />
    <div class="flex-col ml-6">
      <h2 class="text-3xl mb-3">Hello!</h2>
      <p class="text-base">
        My name is Nicole Loughnane. I am a student at Grand Canyon University
        (GCU) and set to graduate in Summer of 2023 with a Bachelor of Science
        in Software Development.
      </p>
      <h2 class="text-2xl my-4">About Me</h2>
      <p class="text-base my-4">
        Both within and outside of my software development courses at Grand
        Canyon University, I enjoy exploring UI/UX development as I am
        interested in the design of programs and how users interact with them. I
        am currently building my senior capstone project which is using the MEVN
        technology stack (MongoDB, Express, Vue, and Node.js).
      </p>
    </div>
  </div>

  <!--
  <h2 class="text-3xl my-4">About Me</h2>
  <p class="text-base my-4">Both within and outside of my software development courses at Grand Canyon University, I enjoy exploring UI/UX development as I am interested in the design of programs and how users interact with them. 
I am currently building my senior capstone project which is using the MEVN technology stack (MongoDB, Express, Vue, and Node.js).</p> -->
  <div class="mx-20">
    <h3 class="text-xl my-4">Technologies I Use</h3>
    <div class="grid grid-cols-6 gap-6">
      <img class="logo" src="./assets/logos/js.png" alt="javascript logo" />
      <img class="logo" src="./assets/logos/java.png" alt="java logo" />
      <img class="logo" src="./assets/logos/c-sharp.png" alt="c# logo" />
      <img class="logo" src="./assets/logos/html.png" alt="html logo" />
      <img class="logo" src="./assets/logos/css-3.png" alt="css logo" />
      <img class="logo" src="./assets/logos/xd.png" alt="adobe xd logo" />
      <img class="logo" src="./assets/logos/mysql.png" alt="mysql logo" />
      <img
        class="h-20 w-12 ml-3"
        src="./assets/logos/mongodb.png"
        alt="mongodb logo"
      />
      <img class="logo" src="./assets/logos/node-js.png" alt="node js logo" />
      <img class="logo" src="./assets/logos/vuelogo.png" alt="vue logo" />
      <img class="logo" src="./assets/logos/angular.png" alt="angular logo" />
      <img class="logo" src="./assets/logos/react.png" alt="react logo" />
    </div>
  </div>

  <div class="mx-20 mt-4">
    <h2 class="text-3xl my-4">Projects</h2>
    <!--using vueper to display images in a slideshow-->
    <!--daily faith journal project-->
    <vueper-slides>
      <vueper-slide
        v-for="(slide, i) in dfjslides"
        :key="i"
        :title="slide.title"
        :image="slide.image"
      >
      </vueper-slide>
    </vueper-slides>

    <h3 class="text-xl my-4">Daily Faith Journal</h3>
    <a class="text-base my-4 text-brand-lightblue" href="https://github.com/nicoleloughnane/CST452Capstone" target="_blank" title="GitHub source code">
      Check out the project here
    </a>
    <p class="text-base my-4">
      My CST 452 Senior Capstone Project at Grand Canyon University called Daily
      Faith Journal built with the MEVN stack (MongoDB, Express, Vue, and Node)
      is set to be complete by the middle of April 2023. Users will be able to
      create journal entries and record sermon notes taken a church through a
      convenient online platform. It will be accessible and responsive through
      the web browser on either computer or mobile device.
    </p>

    <!--Podcast Prototype project-->
    <vueper-slides>
      <vueper-slide
        v-for="(slide, i) in uxslides"
        :key="i"
        :title="slide.title"
        :image="slide.image"
      >
      </vueper-slide>
    </vueper-slides>
    <h3 class="text-xl my-4">Podcast Prototype Application</h3>
    <a class="text-base my-4 text-brand-lightblue" href="https://xd.adobe.com/view/f22b02c0-dffd-4592-8f1e-891db0753ed1-a778/" target="_blank" title="AdobeXD Prototype">
      Check out the prototype here
    </a>
    <p class="text-base my-4">
      In my User Experience Design (DDN-240) class at Grand Canyon University,
      our task was to design a mobile application for podcast listening using Adobe XD.
      We also did user testing in Maze to determine how intuitive our designs were
    </p>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
//imports for images
import dfjlogo from "./assets/dailyfaithjournal/dailyfaithjournallogowhitetext.png";
import logicaldiagram from "./assets/dailyfaithjournal/logicaldiagram.png";
import login from "./assets/dailyfaithjournal/login-dfj.png";
export default {
  name: "App",
  components: {
    VueperSlide,
    VueperSlides,
  },
  data() {
    return {
      dfjslides: [
        {
          image: dfjlogo,
        },
        {
          image: logicaldiagram,
        },
        {
          image: login,
        },
      ],
      uxslides: [
        {
          image: dfjlogo,
        },
        {
          image: logicaldiagram,
        },
        {
          image: login,
        },
      ],
    };
  },
};
</script>

<style>
body {
  background-color: #0a2647;
  color: #fff;
}
.profile {
  width: 250px;
  height: 250px;
}
.logo {
  width: 70px;
  height: 70px;
}
</style>
