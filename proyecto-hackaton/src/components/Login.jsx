

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      
      <form className="bg-white md:w-1/3 shadow-xl p-8 rounded-lg">
        <h1 className="text-center font-bold uppercase mb-4">
            Login
        </h1>

        <div className="mb-5">
            <label htmlFor="nombre" className="block pl-2 mb-2 font-semibold">
                Nombre
            </label>
            <input id = "nombre" className="border-2 rounded-md placeholder-gray-500 w-full py-2 pl-3 border-blue-500" placeholder="Tu nombre"/>
        </div>

        <div className="mb-5">
            <label htmlFor = "password" className="block pl-2 mb-2 font-semibold">
                Contraseña
            </label>
            <input id="password" className="border-2 rounded-md placeholder-gray-500 w-full py-2 pl-3 border-blue-500" placeholder="Tu Contraseña"/>
        </div>

        <div className="pb-5 text-center">
            <label className="text-blue-500">
                A un no eres miembro ? {''}
            </label>
            <a href="#" className="font-bold text-blue-500">
                Registrate
            </a>
        </div>

        <button className="w-full bg-blue-500 rounded-md text-white py-3 font-bold uppercase hover:bg-blue-900">
            Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
