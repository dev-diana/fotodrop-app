import { useState } from "react";
import { UserAuth } from "../backend/userAuth"
import { useNavigate } from "react-router-dom"
import { FaSpinner } from "react-icons/fa"


export default function Login() {
    const initialInput = {
        email: "",
        password: ""
    }
    const {currentUser, login} = UserAuth()
    const navigate = useNavigate()
    const [input, setInput] = useState(initialInput)
    const [error, setError] = useState(false)

    function handleChange(e) {
    const { name, value } = e.target
    setInput(prevData => ({...prevData, [name]: value}))
    }
    
    async function handleSubmit(e) {
        e.preventDefault()
            try {
                await login(input.email, input.password)
            } catch (err) {
                console.error(err.message)
            }

            if (currentUser) {
                navigate('/')
                toast.success("You're logged!")
                    setInput(initialInput)
            } else {
                setError(true)
                }

};
  return (
      <section className="w-full flex items-center justify-center mt-24 mb-8 md:mb-14">
        <div className="flex flex-col w-full items-center md:flex-row gap-12">
            <div className="  font-bold text-center md:text-start text-4xl">
                <h2>Publish anything.</h2>
                <h2><span className="text-secondary font-libre italic">Drop </span>your photos &amp; designs.</h2>
                <p className="font-libre font-light italic text-[#534557] mt-2 text-sm md:text-lg">Log in to get started</p>
            </div>

            <div className="w-full md:w-3/5 flex justify-center p-4 mt-8">
                <div>
                    <div>
                        <h3 className="font-semibold text-lg mb-6 text-center tracking-tight">Sign in to your account</h3>
                        {error && <p className="text-red-600 text-sm text-center font-bold">Invalid login details. Enter the default details. </p>}
                    </div>
                    
                        <form onSubmit={handleSubmit} className="text-base text-center">
                                <label htmlFor="email" className="block">
                                <span className="block font-medium leading-6">Username</span>
                                    <div className="mt-1 w-72 h-[50px]">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={input.email}
                                            onChange={handleSubmit}
                                            placeholder="Your username"
                                            required
                                            className="block w-full h-full px-3 bg-white border border-purple-300 rounded-sm text-sm shadow-sm text-primary focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                                            />
                                    </div>
                                </label>

                            <div className="mt-4">
                                <label htmlFor="password" className="block font-medium leading-6">Password</label>

                                <div className="mt-1 w-72 h-[50px]">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Your password"
                                        value={input.password}
                                        onChange={handleSubmit}
                                        required
                                        className="block w-full h-full px-3 bg-white border border-purple-300 rounded-sm text-sm shadow-sm text-primary focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                                        />
                                </div>
                            </div>

                            <div className="flex justify-center mt-6 h-[50px]">
                                <button
                                type="submit"
                                className="flex w-2/4 items-center justify-center rounded-sm bg-secondary px-3 py-1.5 text-base text-primary font-semibold shadow-md shadow-purple-300 hover:bg-[#C389D1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
                                >
                                <p>{loading ? <FaSpinner className="flex items-center justify-center w-5 h-5" />: "Login"}</p>
                                </button>
                            </div>
                        </form>
                        

                </div>
            </div>
</div>
       
    </section>
  )
}
