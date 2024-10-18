import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import React from "react";

// Define the type for each blog entry
type IData = {
    title: string;
    description: string;
    image: string;
    readMore: string; // Changed to readMore
};

// Sample data: an array of blog entries
const data: IData[] = [
    {
        title: "Fitness",
        description: "Fitness and Exercise: Health Benefits",
        image: "/image/fitness.png",
        readMore: "https://www.everydayhealth.com/fitness/guide/", // Added readMore URL
    },
    {
        title: "Heart Health",
        description: "Heart-healthy lifestyle.",
        image: "/image/heart health.jpg",
        readMore: "https://www.mayoclinic.org/diseases-conditions/heart-disease/in-depth/heart-disease-prevention/art-20046502", // Added readMore URL
    },
    {
        title: "Diabetes",
        description: "Losing weight reduces the risk ",
        image: "/image/diabetes.jpg",
        readMore: "https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-management/ART-20045803", // Added readMore URL
    },
    {
        title: "Heart Disease",
        description: ".",
        image: "/image/heart disease.jpg",
        readMore: "https://www.mayoclinic.org/diseases-conditions/heart-disease/diagnosis-treatment/drc-20353124", // Added readMore URL
    },
    {
        title: "Dengue Prevention",
        description: "",
        image: "/image/dengue.jpg",
        readMore: "https://www.mayoclinic.org/diseases-conditions/dengue-fever/symptoms-causes/syc-20353078", // Added readMore URL
    },
    {
        title: "Chikungunya",
        description: "",
        image: "/image/chikungunya.jpg",
        readMore: "https://my.clevelandclinic.org/health/diseases/25083-chikungunya", // Added readMore URL
    },
    {
        title: "Diarrhea",
        description: "",
        image: "/image/diarrhea.jpg",
        readMore: "https://www.healthline.com/health/diarrhea", // Added readMore URL
    },
    {
        title: "Malaria",
        description: "",
        image: "/image/malaria.jpg",
        readMore: "https://www.who.int/news-room/fact-sheets/detail/malaria", // Added readMore URL
    },
    {
        title: "Typhiod",
        description: "",
        image: "/image/typhiod.jpg",
        readMore: "https://www.healthline.com/health/typhoid", // Added readMore URL
    },
];

export default function HealthBlog() {
    return (
        <div className="parentContainer">
            {data.map((entry, index) => (
                <div className="childContainer bounce-in-right bg-gradient-to-r from-green-400 via-blue-500 to-purple-600" key={index}>
                    <div className="imageContainer">
                        <Image
                            src={entry.image}
                            alt={entry.title}
                            width={600} // Specify the width
                            height={400} // Specify the height
                            className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                        />
                    </div>
                    <h1 className="title">{entry.title}</h1>
                    <p className="description">{entry.description}</p>
                    <Link href={entry.readMore}> {/* Use Link for navigation */}
                        <button className="readMore">Read More</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
