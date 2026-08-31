import { Link } from "react-router";
import { MdDelete } from "react-icons/md";

export const History = () => {
  return (
    <section className=" w-full px-6 py-4">
      <div className=" mx-auto">
        <h1 className=" font-bold text-3xl text-off-white  mt-7 mb-1">
          {" "}
          Recent Activity
        </h1>

        <p className=" text-slate-300 mb-4">
          What you've been studying lately.
        </p>
        <Link
          to="/history/cmtbl7dxs0004skvasevgutyx"
          className="block bg-slate border border-slate-400 px-4 py-4 rounded-2xl"
        >
          <span className="flex justify-between items-center">
            <p>BIO 101 — Cell Division</p>
            <MdDelete className="text-red-600" />
          </span>

          <span className="flex gap-6">
            <p>Summary</p>
            <p>uploaded 2026-08-19</p>
          </span>
        </Link>
      </div>
    </section>
  );
};
