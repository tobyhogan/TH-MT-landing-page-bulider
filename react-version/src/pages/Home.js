
function Home( {isAuth} ) {

  return (
    <div className='homePage'>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Do you ever wish you could spend more time building instead of being distracted by landing pages?</h1>
      <h2 class="text-4xl font dark:text-white">With Landing Page Builder you can get your site up in <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">5 minutes</span> ready to get user sign ups and validation!</h2>
      <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">Get Started Now!
      </button>

      <h4 class="text-2xl font-bold dark:text-white">Testimonials:</h4>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">"Man landing page builder has helped me so much"</p>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">"Wheew I never knew I could build landing pages this quickly"</p>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">"I can't believe it! I managed to get validation within 20 minutes having my idea!"</p>

      
    </div>
  )
}

export default Home