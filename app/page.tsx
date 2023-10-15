

import { TbReload } from "react-icons/tb";
import { Adjust, Pulse } from "@/components/icons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), { ssr: false });

// import Button from "@/components/Button";




export default async function Home() {
  




  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <div className="border w-96 shadow-[rgb(226,233,246)_0px_12px_24px_0px] bg-white rounded-2xl pt-2 p-4">
        <div className="flex justify-between ">
          <div className="flex items-center justify-center gap-4">
            <h1>Swap</h1>
            <h1>Limit</h1>
          </div>
          <div className="flex  items-center justify-center gap-4">
            <TbReload className="w-5 h-5" />
            <Pulse />
            <Adjust />
          </div>
        </div>
        <div className="p-3 border border-red-900 rounded-2xl my-2">
          <h5 className="text-sm text-gray-500">You sell</h5>
          <div className="border  border-black flex  justify-between">
            <div className="text-xl ">Matic</div>
            <div className="text-xl">10</div>
          </div>
          <div className="flex text-gray-500 text-sm justify-between">
            <div>Matic</div>
            <div>~$5.7437</div>
          </div>
        </div>
        <div></div>
        <div className="p-3 border border-red-900 rounded-2xl my-2">
          <h5 className="text-sm text-gray-500">You sell</h5>
          <div className="border  border-black flex  justify-between">
            <div className="text-xl ">Matic</div>
            <div className="text-xl">10</div>
          </div>
          <div className="flex text-gray-500 text-sm justify-between">
            <div>Matic</div>
            <div>~$5.7437</div>
          </div>
        </div>
        
        <Button/>
      </div>
    </main>
  );
}
