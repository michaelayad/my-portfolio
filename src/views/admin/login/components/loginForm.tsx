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
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-primary-lightest text-gray-900 text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-full p-2.5 "
            placeholder="write your email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-white border border-primary-lightest text-gray-900 text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="mx-auto text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-lg px-16 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
