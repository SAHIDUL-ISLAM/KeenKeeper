// "use client"

import Link from "next/link";

const error = () => {
    return (
        <div>
          <div className="hero bg-[#049e252c] min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">404</h1>
              <p className="py-6">
                Page Not Found
              </p>
              <Link href={"/"}><button className="btn btn-primary">Go Home</button></Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default error;