"use client";
import Image from "next/image";
import { ChevronLeft } from "@/app/_icons/ChevronLeft";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const handleTextClick = () => {
    router.push("/login");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1440px] h-[944px] p-5 flex gap-12 pl-20 justify-between items-center">
        <div className="w-104 h-72 flex flex-col gap-6">
          <div
            className="w-9 h-9 flex justify-center items-center rounded-[10px] border border-[#E4E4E7]"
            onClick={() => router.back()}
          >
            <ChevronLeft />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-2xl">Create your account</h3>
            <p className="font-normal text-[#71717A]">
              Sign up to explore your favorite dishes.
            </p>
          </div>
          <Input type="email" placeholder="Enter your email address" />
          <div
            className="w-104 h-9 bg-[#18181B] rounded-[6px] flex justify-center items-center"
            onClick={() => router.push("/signup/password")}
          >
            <p className="text-[#FAFAFA] text-[14px] font-medium">
              Let&apos;s Go
            </p>
          </div>
          <div className="flex gap-3 text-4 justify-center items-center">
            <p className="text-[#71717A]">Already have an account?</p>
            <button className="text-[#2563EB]" onClick={handleTextClick}>
              Log in
            </button>
          </div>
        </div>
        <div className="w-[856px] h-[904px] relative">
          <Image
            src="/login.png"
            fill
            alt="the picture"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
