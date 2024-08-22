import IconCloud from "../../@/components/ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "tailwindcss",
    "react",
    "antdesign",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "mongodb",
    "python",
    "django",
    "flask",
    "swagger",
    "mui",
    "redux",
    "nextdotjs",
    "amazonaws",
    "mysql",
    "firebase",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "heroku",
    "insomnia",
    "postman",
    "yarn",
    "npmjs",
    "vite",
    "graphql",
    "googlecloud",
    "webpack",
];

export function IconCloudSkills() {
    return (
        <div className="bg-transparent border-[1px] border-b-[#e7e7e7] flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg
        desktop:px-20 laptop:px-20 tablet:px-20 mobile:px-2 desktop:pb-20 laptop:pb-20 tablet:pb-20 mobile:pb-12 desktop:pt-8 laptop:pt-8 tablet:pt-8 mobile:pt-4
        "> 
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
