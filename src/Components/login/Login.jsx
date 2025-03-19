import { useState } from "react";
import Header from "../Header/Header";
function Login(){
    const [isSing,isSetSing] = useState(true)
  const handleSing = ()=>{
    isSetSing(!isSing)
  }
    return <div>
    <Header></Header>
    <div className="bg-gray-50 dark:bg-gray-900">
       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {isSing ? "Sign in to your account":"Sing up "}  
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                {!isSing && (<div>
                      <label for="FullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FullName</label>
                      <input type="text" name="fullName" id="fullName" placeholder="full name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                   </div>)}
                   <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                   </div>
                   <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                   </div>
                   
                { isSing && (<div className="flex items-center justify-between">
                      <div className="flex items-start">
                         <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                         </div>                        
                           </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                   </div>)}
                   
                   <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-color-black" style={{color:"black"}}>{isSing ? "Login" :"Sing up"}</button>
                   <p class="text-sm font-light text-gray-500 dark:text-gray-400 c" onClick={handleSing} >
                      Don’t have an account yet? Sign up
                   </p>
                </form>
             </div>
          </div>
       </div>
    </div>
 </div>
}
export default Login;