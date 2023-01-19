import type { NextPage } from "next";
import Layout from "../../components/layout";

const Chat: NextPage = () => {
  return (
    <Layout hasTabBar title="Chat">
      <div className="divide-y-[1px] py-10">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center space-x-3 py-3 px-4"
          >
            <div className="h-12 w-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">
                Sample last message created
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chat;
