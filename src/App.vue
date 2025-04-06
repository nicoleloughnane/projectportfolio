<template>

  <!--profile picture and about me-->
  <div class="main">
    <div class="intro">
      <!-- <img class="profile" src="./assets/nicoleprofilecircle.png" /> -->
      <img class="profile" src="./assets/profile-picture-circle.png" />
      <div class="flex-col ml-6">
        <h2 class="text-3xl mb-3">Hello I'm Nicole Buckley!</h2>
        <p class="text-base">
          I am a UX/UI engineer currently working in the defense and intelligence
          space. I specialize in pioneering new frontend projects to improve user experiences by modernizing legacy UIs,
          applying user feedback, and more! My passion lies in
          learning user needs and translating them into user-centered experiences and well-rounded documentation.
        </p>
        <h2 class="text-2xl my-4">About Me</h2>
        <p class="text-base my-4">
          My journey in the realm of computer science started in college when I decided I wanted to combine
          my interests in art and computers into UX design. Currently, I reside in Phoenix, AZ where I spend my days
          playing video games, drawing, and spending time with
          my family.
        </p>
      </div>
    </div>

    <!--projects-->
    <div class="mx-20 mt-8">
      <h2 class="text-3xl my-4">My Work</h2>
      <!--dfj-->
      <!--description-->
      <h3 class="text-xl my-4 font-bold">Daily Faith Journal</h3>
      <h3 class="text-base italic text-brand-lightblue">September 2023 - April 2023</h3>
      <div class="flex justify-center">
        <img src="./assets/dailyfaithjournal/dfj-logo.png" />
      </div>
      <p class="text-base mt-4 mb-8">
        My CST 452 Senior Capstone Project at Grand Canyon University, called Daily
        Faith Journal, was built with the MEVN stack (MongoDB, Express, Vue, and Node).
        In Daily Faith Journal,
        users have the ability to
        create journal entries and record sermon notes taken a church through a
        convenient online platform. The app is designed to be accessible and responsive through
        the web browser on either a computer or a mobile device.
      </p>
      <div class="project-grid">
        <img class="project-grid-item" src="./assets/dailyfaithjournal/dfj-help-center.png" />
        <img class="project-grid-item pl-28" src="./assets/dailyfaithjournal/dfj-color-palette.png" />
        <!-- <img class="project-grid-item" src="./assets/dailyfaithjournal/dfj-login-web.png" /> -->
        <img class="project-grid-item pl-20" src="./assets/dailyfaithjournal/dfj-update-journal-entry.png" />
      </div>
      <div class="pt-10 pb-10">
        <a class="text-base my-4 text-brand-lightblue" href="https://github.com/nicoleloughnane/CST452Capstone"
          target="_blank" title="GitHub source code">
          Check out the project on GitHub
        </a>
      </div>
      <hr />
      <!--Podcast Prototype project-->
      <!--description-->
      <h3 class="text-xl my-4 font-bold">Podcast Prototype Application</h3>
      <p class="text-base my-4">
        In my User Experience Design (DDN-240) class at Grand Canyon University,
        our task was to design a mobile application for podcast listening using
        Adobe XD. We also did user testing in Maze to determine how intuitive our
        designs were
      </p>
      <div class="project-grid pb-10">
        <img class="project-grid-item" src="./assets/uxclass/LoginMain.png" alt="Login wireframe" />
        <!-- <img class="wireframe" src="./assets/uxclass/recovery.png" alt="Account Recovery wireframe" /> -->
        <img class="project-grid-item" src="./assets/uxclass/OneGenre.png" alt="one genre wireframe" />
        <img class="project-grid-item" src="./assets/uxclass/Search.png" alt="Search wireframe" />
      </div>
      <hr />
      <!--WIP: Wilcox VR Project-->
      <h3 class="text-xl my-4 font-bold">Wilcox VR Project</h3>
      <h3 class="text-base italic text-brand-lightblue">April 2023</h3>

      <p class="text-base my-4 pb-10">
        In my Human Computer Interaction and Communication Class (CST-320) my class of 11 students collaborated with
        a museum in Wilcox, AZ
        to make a VR game for them. They desire to immerse their visitors in the experience of what Wilcox was like back
        in the
        1880s. The initial phase of this project was completed in April 2023. My role was on the a small team where we
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

      <!--description-->
      <p class="text-base my-4">
        In my C# III class we learned how to take an implementation of the game Minesweeper from a console with no user
        interface to a web based game in a group project. This was the first class where I worked a team to build an
        application.
        The requirements for the project were a user login/registration system, a minesweeper game, and a way to save
        game progress for the user to come back later.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {

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

/*logical diagram */
.logical {
  margin-left: auto;
  margin-right: auto;
}

/*group of logos */
.technologies {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
}

/*one technology logo*/
.logo {
  width: 60px;
  height: 60px;
}

/*grid of images */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 20px;
}

/* one image */
.project-grid-item {
  max-width: 100%;
  height: 350px;
}

/* color palette */
/* .project-grid-color-palette {
  padding-left: 80px;
} */


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

body {
  background-color: #0a2647;
  color: #fff;
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

/*media queries for responsive grid sizes */
@media (max-width:480px) {
  .technologies {
    grid-template-columns: 1fr;
  }
}

@media (max-width:780px) {
  .technologies {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
