import type { NextPage } from "next";
import { FloatBtn } from "../../components/floatBtn";
import Layout from "../../components/layout";

const Live: NextPage = () => {
  return (
    <Layout hasTabBar title="Live">
      <div className=" space-y-4 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div className="px-4  pt-4" key={i}>
            <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
            <h1 className="mt-2 text-2xl font-bold text-gray-900">
              Galaxy S50
            </h1>
          </div>
        ))}
        <FloatBtn iconPath="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </div>
    </Layout>
  );
};

export default Live;
