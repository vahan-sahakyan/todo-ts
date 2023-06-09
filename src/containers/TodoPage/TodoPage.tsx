export default function TodoPage() {
  return (
    <section className="m-10 p-28 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm">
      <figure className="">
        Title:
        <input
          className="my-3 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          placeholder="Title"
        />
      </figure>
      <figure className="">
        Description:
        <input
          className="my-3 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          placeholder="Description"
        />
      </figure>
    </section>
  );
}
