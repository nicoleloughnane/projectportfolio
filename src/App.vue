<template>
  <!--links to github and linkedin-->
  <!-- <div class="navbar">
  <header class="bg-brand-darkblue-3 shadow-lg shadow-brand-darkblue-3">
    <nav>
      <ul class="flex justify-end p-6">
        <li class="mr-6">
          <a class="" href="https://github.com/nicoleloughnane" target="_blank" title="My GitHub Profile Link">
            <img class="w-12 h-12" src="./assets/logos/github-logo.png">
          </a>
        </li>
        <li class="mr-6">
          <a href="https://www.linkedin.com/in/nicole-loughnane/" target="_blank" title="My LinkedIn">
            <img class="w-10 h-12" src="./assets/logos/LI-In-Bug.png">
          </a>
        </li>
      </ul>
    </nav>
  </header>
</div> -->



  <!--profile picture and about me-->
  <div class="flex mx-40 my-10 intro">
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
  <!--technologies and logos-->
  <div class="mx-20">
    <h3 class="text-xl my-4">Technologies I Use</h3>
    <div class="technologies">
      <img class="logo" src="./assets/logos/js.png" alt="javascript logo" />
      <img class="logo" src="./assets/logos/java.png" alt="java logo" />
      <img class="logo" src="./assets/logos/c-sharp.png" alt="c# logo" />
      <img class="logo" src="./assets/logos/html.png" alt="html logo" />
      <img class="logo" src="./assets/logos/css-3.png" alt="css logo" />
      <img class="logo" src="./assets/logos/xd.png" alt="adobe xd logo" />
      <img class="logo" src="./assets/logos/mysql.png" alt="mysql logo" />
      <img class="h-20 w-12 ml-3" src="./assets/logos/mongodb.png" alt="mongodb logo" />
      <img class="logo" src="./assets/logos/node-js.png" alt="node js logo" />
      <img class="logo" src="./assets/logos/vuelogo.png" alt="vue logo" />
      <img class="logo" src="./assets/logos/angular.png" alt="angular logo" />
      <img class="logo" src="./assets/logos/react.png" alt="react logo" />
    </div>
  </div>

  <!--projects-->
  <div class="mx-20 mt-8">
    <h2 class="text-3xl my-4">Projects</h2>
    <!--dfj-->
    <img class="logical" src="./assets/dailyfaithjournal/logicaldiagram.png" alt="Logical diagram of dfj" />
    <!--description-->
    <h3 class="text-xl my-4 font-bold">Daily Faith Journal</h3>
    <a class="text-base my-4 text-brand-lightblue" href="https://github.com/nicoleloughnane/CST452Capstone"
      target="_blank" title="GitHub source code">
      Check out the project here
    </a>
    <p class="text-base mt-4 mb-8">
      My CST 452 Senior Capstone Project at Grand Canyon University called Daily
      Faith Journal built with the MEVN stack (MongoDB, Express, Vue, and Node)
      is set to be complete by the middle of April 2023. Users will be able to
      create journal entries and record sermon notes taken a church through a
      convenient online platform. It will be accessible and responsive through
      the web browser on either computer or mobile device.
    </p>

    <!--Podcast Prototype project-->
    <div class="wireframes">
      <img class="wireframe" src="./assets/uxclass/LoginMain.png" alt="Login wireframe" />
      <img class="wireframe" src="./assets/uxclass/recovery.png" alt="Account Recovery wireframe" />
      <img class="wireframe" src="./assets/uxclass/OneGenre.png" alt="one genre wireframe" />
      <img class="wireframe" src="./assets/uxclass/Search.png" alt="Search wireframe" />
    </div>
    <!--description-->
    <h3 class="text-xl my-4 font-bold">Podcast Prototype Application</h3>
    <a class="text-base my-4 text-brand-lightblue"
      href="https://xd.adobe.com/view/f22b02c0-dffd-4592-8f1e-891db0753ed1-a778/" target="_blank"
      title="AdobeXD Prototype">
      Check out the prototype here
    </a>
    <p class="text-base my-4">
      In my User Experience Design (DDN-240) class at Grand Canyon University,
      our task was to design a mobile application for podcast listening using
      Adobe XD. We also did user testing in Maze to determine how intuitive our
      designs were
    </p>

    <!--WIP: Wilcox VR Project-->
    <h3 class="text-xl my-4 font-bold">Wilcox VR Project (In Progress)</h3>
    <h3 class="text-base italic text-brand-lightblue">Estimated Completion April 2023</h3>

    <p class="text-base my-4">
      In my Human Computer Interaction and Communication Class (CST-320) my class of 11 students are collaborating with a
      museum in Wilcox, AZ
      to make a VR game for them so as to immerse their visitors in the experience of what Wilcox was like back in the
      1880s. This is set to be complete by the end of April 2023. I am in a small group working on a telegraph station. We
      are using Unity and C# to develop the game, and Oculus Quest 2 headsets to test the project.
    </p>

    <!--C# Minesweeper-->
    <h3 class="text-xl mt-4 font-bold">Minesweeper Game in C#</h3>
    <h3 class="text-base italic text-brand-lightblue mt-2 mb-4">Grand Canyon University CLC (Group Project)</h3>
    <div class="minesweeper mb-4">
      <img class="minesweeperSnippet" src="./assets/minesweeper/minesweeper.png" alt="Minesweeper Board" />
      <img class="minesweeperSnippet" src="./assets/minesweeper/codesnippet.png" alt="Minesweeper Board Code Snippet" />
      <img class="minesweeperSnippet" src="./assets/minesweeper/savegame.png" alt="Save Game" />
    </div>

    <!--description-->
    <h3 class="text-base font-bold">Key Technologies and Concepts</h3>
    <ul class="list-disc ml-9">
      <li>.NET</li>
      <li>REST API</li>
      <li>MVC Architecture</li>
      <li>Object Oriented Programming</li>
      <li>Recursion</li>
      <li>Agile Project Management</li>
    </ul>
    <p class="text-base my-4">
      In my C# III class we learned how to take an implementation of the game Minesweeper from the console to the web in a
      group project. To do
      this we went through 2 C# classes prior to this where we learned C# as a language, how to make console apps, and win
      form apps. The next course taught object oriented concepts along with some more advanced subjects like recursion
      (also
      taught in our Java courses). This class was my first in which I worked a team to accomplish the task at hand and
      since then I have had many group projects which I enjoy doing so that we can efficiently deliver sprints while also
      working on our strengths that we can bring to the project as a whole.
    </p>

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

/*the group of wireframes */
.wireframes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
}
/* one wireframe */
.wireframe {
  max-width: 100%;
  height: 350px;
}

/*group of snippets from minesweeper project */
.minesweeper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
/*one snippet */
.minesweeperSnippet {
  max-width: 100%;
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
