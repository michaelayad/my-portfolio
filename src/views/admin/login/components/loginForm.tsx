export default function LoginForm() {
  return (
    <div className="max-w-[500px] w-full h-full flex flex-col items-center justify-center">
      <h1 className="mx-auto font-kodeMono text-5xl font-bold text-primary text-center">
        Login !
      </h1>
      <form className="py-10 w-full px-5 flex flex-col">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className=" bg-white-bg border border-primary-lightest text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-full p-2.5 "
            placeholder="write your email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-white-bg border border-primary-lightest  text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-full p-2.5"
            required
            placeholder="write your password"
          />
        </div>
        <button
          type="submit"
          className="text-white mx-auto bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-lg px-16 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
