<template>
  <MyHeader />
  <!--profile picture and about me-->
  <div class="main">
    <div class="intro">
      <img class="profile" src="./assets/profile-picture-circle.png" />
      <div class="flex-col ml-6">
        <h2 class="text-3xl mb-3">Hello, I'm Nicole Buckley!</h2>
        <p class="text-base">
          I am a UX/UI engineer currently working in the defense and intelligence
          industry. I specialize in pioneering new frontend projects to improve user experiences by modernizing legacy
          UIs,
          applying user feedback, and more! My passion lies in
          learning user needs and translating them into user-centered experiences and well-rounded documentation.
        </p>
        <h2 class="text-2xl my-4">About Me</h2>
        <p class="text-base my-4">
          My journey in the realm of computer science started in college when I decided I wanted to combine
          my interests in art and computers into frontend development as well as UI design. Currently, I reside in
          Phoenix, AZ, where I spend my free
          time
          playing video games, drawing, and spending time with
          my family.
        </p>
      </div>
    </div>

    <!--projects-->
    <div class="my-work">
      <h2 class="text-3xl my-4">My Work</h2>
      <h3 class="text-xl my-4 font-bold">Prime Solutions Group, Inc.</h3>
      <h3 class="text-s my-4">Associate Software Engineer | Software/Cloud Intern</h3>
      <h3 class="text-base italic text-brand-lightblue mb-3">June 2023 - present</h3>
      <div class="ml-5">
        <ul class="list-disc">
          <li>Contracting with a Fortune 500 company as a UX Engineer to create a React frontend to interface with
            existing backend. </li>
          <li>Pioneered comprehensive documentation efforts for an existing product, enhancing developer setup and new
            user understanding.</li>
          <li>Resolved numerous critical and non-critical bugs in legacy system, thereby improving system stability and
            user experience.</li>
          <li>Designed scalable AWS ecosystem to demonstrate proposed accelerated delivery of internal project.</li>
          <li>Worked with team to develop a user friendly Vue.js frontend and Python middleware server to interface with
            internal tool.</li>
        </ul>
      </div>
      <!--dfj-->
      <h3 class="text-xl my-4 font-bold">Daily Faith Journal</h3>
      <h3 class="text-base italic text-brand-lightblue">September 2023 - April 2023</h3>
      <div class="intro">
        <img class="dfj-logo" src="./assets/dailyfaithjournal/dfj-logo.png" />
        <div class="flex-col ml-6">
          <p class="text-base mt-4 mb-8">
            My CST 452 Senior Capstone Project at Grand Canyon University, called Daily
            Faith Journal, was built with the MEVN stack (MongoDB, Express, Vue, and Node).
            In Daily Faith Journal,
            users have the ability to
            create journal entries and record sermon notes from a church service through a
            convenient online platform. The app is designed to be accessible and responsive through
            the web browser on either a computer or a mobile device.
            <br />
            <br />
            In this class, I singlehandedly saw this project through its initial planning stages, proposal, wireframing,
            development, and
            deployment. The first semester of the course was spent planning and providing our professor with a mock
            proposal
            for the project. I defined how the app would address user needs and help
            resolve
            their problems. I planned tickets and sprints using Jira. The second semester of the course was spent
            completing
            those tickets by developing the project. I started with low fidelity wireframes in pencil and paper then
            translated them to high fidelity wireframes in Adobe XD (as displayed below), as well as a
            color palette to give my app and overall theme. I based the theme off of my university's colors (purple and
            white). Then, I implemented those wireframes using Vue.js and Tailwind CSS. I used a mock backend to start
            and later connected the project to a backend I built using Express and MongoDB for my database.
          </p>
        </div>
      </div>
      <h3 class="text-xl my-4">Wireframes</h3>
      <div class="project-flex">
        <img class="project-flex-item" src="./assets/dailyfaithjournal/dfj-help-center.png" />
        <img class="project-flex-item max-w-md" src="./assets/dailyfaithjournal/dfj-color-palette.png" />
        <img class="project-flex-item" src="./assets/dailyfaithjournal/dfj-update-journal-entry.png" />
      </div>
      <div class="pt-10 pb-10">
        <a class="text-base my-4 text-brand-lightblue" href="https://github.com/nicoleloughnane/CST452Capstone"
          target="_blank" title="GitHub source code">
          Check out the source code on GitHub
        </a>
      </div>
      <hr />
      <!--Podcast Prototype project-->
      <!--description-->
      <h3 class="text-xl my-4 font-bold">Podcast Prototype Application</h3>
      <p class="text-base my-4">
        In my User Experience Design (DDN-240) class at Grand Canyon University,
        our task was to design a mobile application for podcast listening using
        Adobe XD. We also did user testing in Maze to determine if we needed to make changes to the user flow or
        design. We started off by conducting research and interviews, sketching the wireframes on paper,
        then
        implementing them in Adobe XD as low fidelity wireframes. Lastly, we designed the color palette, typography,
        and more to create the final high fidelity wireframes.
      </p>
      <div class="project-flex pb-10">
        <img class="project-flex-item ux-wireframe" src="./assets/uxclass/login-main.png" alt="Login wireframe" />
        <img class="project-flex-item ux-wireframe" src="./assets/uxclass/new-playlists.png"
          alt="my library wireframe" />
        <img class="project-flex-item ux-wireframe" src="./assets/uxclass/recovery.png"
          alt="Account Recovery wireframe" />
      </div>
      <hr />
      <!--Wilcox VR Project-->
      <h3 class="text-xl my-4 font-bold">Wilcox VR Project</h3>
      <h3 class="text-base italic text-brand-lightblue">April 2023</h3>

      <p class="text-base my-4 pb-10">
        In my Human Computer Interaction and Communication Class (CST-320), my class of 11 students collaborated with
        a museum in Wilcox, AZ to make a VR game for them. They expressed their goal was to immerse their visitors in
        the experience of what Wilcox was like back
        in the 1880s. The initial phase of this project was completed in April 2023. I was part of a small team
        where we
        worked to build a telegraph station.
        We used Unity and C# to develop the game, and Oculus Quest 2 headsets play it.
      </p>
      <hr />

      <!--C# Minesweeper-->
      <h3 class="text-xl mt-4 font-bold">Minesweeper Game in C#</h3>
      <h3 class="text-base italic text-brand-lightblue mt-2 mb-4">Grand Canyon University CLC (Group Project)</h3>
      <div class="minesweeper mb-4 flex justify-center">
        <img class="minesweeperSnippet" src="./assets/minesweeper/minesweeper.png" alt="Minesweeper Board" />
      </div>
      <p class="text-base my-4">
        In my C# III class, we learned how to take an implementation of the game Minesweeper from a console with no user
        interface to a web based game in a group project. This was the first class where I worked a team to build an
        application.
        The requirements for the project were to implement a user login/registration system, a minesweeper game, and a
        way to save
        game progress for the user to come back later.
      </p>
      <hr />

    </div>
  </div>
  <MyFooter />
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
export default {
  name: "App",
  components: {
    MyFooter,
    MyHeader
  },
  data() {
    return {};
  },
};
</script>

<style>
/* profile picture */
.profile {
  width: 220px;
  height: 220px;
  aspect-ratio: 1 / 1;
  max-width: 220px;
  min-width: 220px;
  display: block;
}

.intro {
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
}

.my-work {
  margin-left: 5rem
    /* 80px */
  ;
  margin-right: 5rem
    /* 80px */
  ;
  margin-top: 2rem
    /* 32px */
  ;
}

/* project image styles */
.project-flex-item {
  width: 100%;
  height: auto;
  max-width: 700px;
  max-height: 700px;
}

.project-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

/* minesweeper layout */
.minesweeper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

.minesweeperSnippet {
  max-width: 90%;
  height: auto;
  object-fit: cover;
  image-rendering: pixelated;
}

.dfj-logo {
  max-width: 300px;
  max-height: 300px;
}

.ux-wireframe {
  max-width: 400px;
  max-height: 750px;
}

/* mobile */
@media screen and (max-width: 1800px) {
  .project-flex {
    flex-direction: column;
    align-items: center;
  }

  .project-flex-item {
    width: 80%;
    margin-bottom: 20px;
  }
}

/* med sized screens */
@media screen and (max-width: 1024px) {
  .main {
    padding: 0 16px;
  }

  .mx-20 {
    margin-left: 16px;
    margin-right: 16px;
  }
}

/* tablet */
@media screen and (max-width: 768px) {
  .intro {
    margin-inline: 24px;
  }

  .dfj-logo {
    max-width: 250px;
    max-height: 250px;
  }

  .profile {
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
    min-width: 150px;
  }

  .project-flex-item {
    width: 90%;
  }
}

/* mobile */
@media screen and (max-width: 650px) {
  .intro {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: 24px 16px;
    text-align: center;
    white-space: pre-line;
  }

  .profile {
    height: 150px;
    width: 150px;

  }

  .my-work {
    margin-left: 0rem;
    margin-right: 0rem;
    margin-top: 0rem;
  }

  .flex-col.ml-6 {
    margin-left: 0;
  }

  h2.text-3xl {
    font-size: 1.5rem;
  }

  h2.text-2xl {
    font-size: 1.25rem;
  }

  .mx-20 {
    margin-left: 12px;
    margin-right: 12px;
  }

  .dfj-logo {
    max-width: 200px;
    max-height: 200px;
  }

  /* project descriptions */
  .project-flex-item {
    width: 100%;
  }

  hr {
    margin: 24px 0;
  }
}

/* extra small */
@media screen and (max-width: 480px) {
  .profile {
    width: 120px;
    height: 120px;
  }

  .text-base {
    font-size: 0.9rem;
  }

  .minesweeper {
    grid-template-columns: 1fr;
  }

  .project-flex-item.ux-wireframe {
    max-width: 280px;
  }
}
</style>
