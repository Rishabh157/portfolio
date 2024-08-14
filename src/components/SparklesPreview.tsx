"use client";
import { SparklesCore } from "../../@/components/ui/sparkles";
import planeImage from "../assets/plane.gif";
import { AnimationWords } from "./AnimationWords";
import { Blur } from "./Blur";

export function SparklesPreview() {
    const TITLES = ["Web developer", "SEO analyst", "Backend developer", "Mobile application developer", "Freelancer", "Proud Indian"]

    return (
        <div className="section-intro w-full bg-primary flex flex-col items-center justify-center overflow-hidden rounded-md border-white desktop:border-x-[20px] desktop:border-t-[20px] laptop:border-x-[20px] laptop:border-t-[20px] tablet:border-x-[20px] tablet:border-t-[20px] mobile:border-x-[0px] mobile:border-t-[0px]">

            <img src={planeImage} className="desktop:h-[240px] laptop:h-[240px] tablet:h-[240px] mobile:h-[140px]" />

            <h1 className="name-font-custom-important font-bold text-center text-white relative !z-50 select-none  desktop:text-8xl laptop:text-8xl tablet:text-5xl mobile:text-5xl">
                <Blur title="Rishabh Gour" />
            </h1>

            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                <div className="w-full text-center absolute top-2">
                    <p className="text-white text-center font-light desktop:text-[30px] laptop:text-[30px] tablet:text-[28px] mobile:text-[22px]">
                        I am <span> a <AnimationWords words={TITLES} />.
                        </span>
                    </p>
                </div>

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-[#41b0bf] [mask-image:radial-gradient(350px_200px_at_top,transparent_60%,white)]"></div>
            </div>
        </div>
    );
}
