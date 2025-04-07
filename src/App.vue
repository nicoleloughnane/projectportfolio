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
          space. I specialize in pioneering new frontend projects to improve user experiences by modernizing legacy UIs,
          applying user feedback, and more! My passion lies in
          learning user needs and translating them into user-centered experiences and well-rounded documentation.
        </p>
        <h2 class="text-2xl my-4">About Me</h2>
        <p class="text-base my-4">
          My journey in the realm of computer science started in college when I decided I wanted to combine
          my interests in art and computers into UX design. Currently, I reside in Phoenix, AZ where I spend my free
          time
          playing video games, drawing, and spending time with
          my family.
        </p>
      </div>
    </div>

    <!--projects-->
    <div class="mx-20 mt-8">
      <h2 class="text-3xl my-4">My Work</h2>
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
        create journal entries and record sermon notes taken a church through a
        convenient online platform. The app is designed to be accessible and responsive through
        the web browser on either a computer or a mobile device.
        <br/>
        <br/>
        In this class, I singlehandedly saw this project through its initial planning stages, proposal, wireframing,
        development, and
        deployment. The first semester of the course was spent planning and providing our professor with a mock proposal
        for the project. I defined the scope and requirements and how the app would address a user need and help resolve
        their problem. I planned tickets and sprints using Jira. The second semester of the course was spent completing
        those tickets by developing the project. I started with low fidelity wireframes in pencil and paper then
        translated them to high fidelity wireframes in Adobe XD (as displayed below) as well as a
        color palette to give my app and overall theme. I based the theme off of my university's colors (purple and
        white). Then, I implemented those wireframes using Vue.js and Tailwind CSS. I used a mock backend to start but
        then connected the project to a backend I built using Express and MongoDB for my database.
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
        Adobe XD. We also did user testing in Maze to determine if we needed to make changes to the user flow and/or
        design. We started off by conducting research and interviews, sketching the wireframes on paper,
        then
        implementing them in Adobe XD as low fidelity wireframes, and finally designing the color palette, typography,
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
        In my Human Computer Interaction and Communication Class (CST-320) my class of 11 students collaborated with
        a museum in Wilcox, AZ to make a VR game for them. They expressed their goal was to immerse their visitors in
        the experience of what Wilcox was like back
        in the 1880s. The initial phase of this project was completed in April 2023. My role was on the a small team
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
        In my C# III class we learned how to take an implementation of the game Minesweeper from a console with no user
        interface to a web based game in a group project. This was the first class where I worked a team to build an
        application.
        The requirements for the project were a user login/registration system, a minesweeper game, and a way to save
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
/*profile picture */
.profile {
  width: 220px;
  height: 220px;
}

.intro {
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
}

/* one image */
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

@media screen and (max-width:1800px) {
  .project-flex {
    flex-direction: column;
    align-items: center;
  }

  .project-flex-item {
    width: 80%;
    margin-bottom: 20px;
  }
}

/*group of snippets from minesweeper project */
.minesweeper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

/*one snippet */
.minesweeperSnippet {
  max-width: 90%;
  height: auto;
  object-fit: cover;
  image-rendering: pixelated;
}

/*for smaller screens */
@media screen and (max-width:650px) {
  .intro {
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    margin-inline: 50px;
    white-space: pre-line;
  }

  .profile {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 50%;
  }
}

.dfj-logo {
  max-width: 300px;
  max-height: 300px;
}

.ux-wireframe {
  max-width: 400px;
  max-height: 750px;

}
</style>
