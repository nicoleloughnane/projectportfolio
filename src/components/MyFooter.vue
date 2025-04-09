<template>
  <footer class="bottom-0 w-full py-4 px-6 flex justify-center items-center bg-transparent z-10">
    <div class="flex space-x-6">
      <!-- GitHub -->
      <a href="https://github.com/nicoleloughnane" target="_blank" rel="noopener noreferrer"
        class="w-6 h-6">
        <img class="hover:text-gray-300 transition-colors duration-300" src='../assets/github-mark-white.svg'/>
      </a>

      <!-- LinkedIn -->
      <a href="https://linkedin.com/in/nicolebuckley23" target="_blank" rel="noopener noreferrer"
        class="text-white hover:text-gray-300 transition-colors duration-300">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
          </path>
        </svg>
      </a>

      <!-- Email -->
      <a href="mailto:nloughnane25@outlook.com" class="text-white hover:text-gray-300 transition-colors duration-300">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
          </path>
        </svg>
      </a>
    </div>

  </footer>
  <div class="flex justify-center mb-5">
    <a target="_blank" href="https://icons8.com/icon/121443/dog"
      class="text-white hover:text-gray-300 transition-colors duration-300 font-medium">Dog&nbsp;</a> icon by&nbsp;<a
      class="text-white hover:text-gray-300 transition-colors duration-300 font-medium" target="_blank"
      href="https://icons8.com"> Icons8</a>
  </div>

</template>
<script>
export default {
  name: 'MyFooter'
}
</script>