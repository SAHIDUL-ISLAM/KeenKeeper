// "use client"
import Image from "next/image";
import Link from "next/link";

const error = () => {
    return (
        <div>
          <div className="hero min-h-screen py-3.5">
            <div className="hero-content flex flex-col p-5 md:p-20 rounded-4xl text-center border-4 border-[#244D3F]">
              <Image
              src={"/error.png"}
                        height={96}
                        width={96}
                        alt={"Error Image"}
                        className="object-cover w-full h-full"
              />
              <h1 className="font-bold text-xl text-[#244D3F]">Page Not Found</h1>
              <Link href={"/"}><button className="btn bg-[#244D3F] text-white">Go Home</button></Link>
            </div>
          </div>
        </div>
    );
};

export default error;