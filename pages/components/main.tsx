import Image from "next/image";
import Link from "next/link";

const callouts = [
    {
        name: "사랑인 듯, 86.0 × 67.0cm Watercolor",
        imageSrc: "/profile.jpg",
        href: "/profile.jpg",
    },
];

export default function Main() {
    return (
        <div>
            <div className="bg-white">
                <div
                    className="max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-6">
                    <div className="max-w-2xl mx-auto px-4 ">

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            <div
                                className="rounded-full ring ring-gray-700 relative bg-white rounded-lg overflow-hidden">
                                <a>
                                    <Image
                                        src="/profile.jpg"
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </a>
                            </div>
                            <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
                                Minhyuk Wang
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
