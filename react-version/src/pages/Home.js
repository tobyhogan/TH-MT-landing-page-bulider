
function Home( {isAuth} ) {

  return (
    <div className='homePage'>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Do you ever wish you could spend more time building your project instead of landing pages?</h1>
      <h2 class="text-4xl font-extrabold dark:text-white">With Landing Page Builder you can get your site up in 5 minutes ready to get user sign ups and validation!</h2>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Get Started!
      </button>

      <h2><u>Testimonials:</u></h2>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">"Man landing page builder has helped me so much"</p>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">"Wheew I never knew I could build landing pages this quickly"</p>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">"I can't believe it! I managed to get validation within 20 minutes having my idea!"</p>

      
    </div>
  )
}

export default Home