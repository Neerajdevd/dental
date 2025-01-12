import { useEffect,useState } from "react";
const Navbar =()=>{
  const [navbarHeight, setNavbarHeight] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const prop=document.getElementById('property');
      const newHeight = window.scrollY > 0 ? 80 : 0;
      setNavbarHeight(newHeight);
      if (window.scrollY > 0 && newHeight > 0) {
      
        navbar.classList.add('bg-[#283b8b]');
      } else {
        prop.classList.remove('bg-white')
        navbar.classList.add('bg-transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <nav id="navbar"  className={`fixed left-0 right-0  top-0 z-50 transition-all duration-500 h-${navbarHeight} `}>
<div id="property" className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8 ">
<a href className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="https://naturevalleyschool.org/wp-content/uploads/2024/03/Natures-Valley-Kausani-300x201.png" className="h-10" alt="Flowbite Logo" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nature Valley school</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800
     focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
      rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700
       dark:focus:ring-blue-800">Get started</button> */}
    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
    <li>
      <a href className="block py-2 px-3 md:p-0 text-xl text-white bg-blue-700 rounded md:bg-transparent cursor-pointer " aria-current="page">Home</a>
    </li>
    <li>
      <a href className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Inquire</a>
    </li>
    <li>
      <a href className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visit</a>
    </li>
    <li>
      <a href className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Apply</a>
    </li>
  </ul>
</div>
</div>
</nav>
  )
}

export default Navbar


        
        




      

