import PageLayout from "@/components/PageLayout";
import { useState, useEffect } from "react";

// Import local community images
import imgGreekClub1 from "@/assets/community/GreekClub/committee1.jpg";
import imgGreekClub2 from "@/assets/community/GreekClub/IMG_3497.png";
import imgGreekClub3 from "@/assets/community/GreekClub/IMG_3503.png";
import imgGreekClub4 from "@/assets/community/GreekClub/IMG_3578.png";
import imgIn2Science1 from "@/assets/community/In2Science/finalist.png";
import imgIn2Science2 from "@/assets/community/In2Science/group.jpg";
import imgIn2Science3 from "@/assets/community/In2Science/student.jpg";
import imgRoundSquare1 from "@/assets/community/RoundSquare/DSC_0744.jpg";
import imgRoundSquare2 from "@/assets/community/RoundSquare/IMG_20180406_100611.jpg";
import imgRoundSquare3 from "@/assets/community/RoundSquare/IMG_20180409_110537.jpg";
import imgRoundSquare4 from "@/assets/community/RoundSquare/IMG_3408.jpg";
import imgRoundSquare5 from "@/assets/community/RoundSquare/IMG_3777.jpg";
import imgRoundSquare6 from "@/assets/community/RoundSquare/IMG_7347.jpg";
import imgRoundSquare7 from "@/assets/community/RoundSquare/m2.jpg";
import imgRoundSquare8 from "@/assets/community/RoundSquare/newspaper.png";
import imgRoundSquare9 from "@/assets/community/RoundSquare/thumbnail_IMG_0365.jpg";

const samplePosts = [
  {
    id: 1,
    heading: "Swinburne Hellenic Society",
    paragraph: [
      "Having a passion for exploring new cultures and traditions, I was an active member of the University Greek Club during my final years at university. I progressed from a general member to general committee member to executive committee as the Treasurer. Despite not having a Greek background, I was entrusted by the community to hold this title and fulfil the associated responsibilities.",
      "During my time as Treasurer, I contributed to organising events, managing club finances, and promoting Greek culture within the university. This opportunity allowed me to meet many wonderful individuals, not just from my university but from across Melbourne, as our club is affiliated with NUGAS (National Union of Greek Australian Students). I had an incredible time learning about Greek culture and embraced every opportunity to enjoy Souvlaki.",
    ],
    images: [imgGreekClub1, imgGreekClub2, imgGreekClub3, imgGreekClub4],
  },
  {
    id: 2,
    heading: "In2Science",
    paragraph: [
      "I have always been passionate about math and I believe that anyone can engage with it given the right guidance. This belief motivated me to volunteer as a maths mentor with the In2Science programme in 2022 and 2023. I worked with Year 10 students, helping them grasp mathematical concepts and providing insight into what it's like to study STEM at university.",
      'Many people are put off by math because they perceive it as merely a "subject of numbers," which I find quite unfortunate. When viewed as a "language of logic," it becomes significantly more engaging. I have tried to share this perspective with my students, and it has been rewarding to witness their growing enjoyment of the language. Additionally, it was lovely to be nominated for Best Mentor in 2022 and to be a finalist for Best Communicator in 2023.',
    ],
    images: [imgIn2Science1, imgIn2Science2, imgIn2Science3],
  },
  {
    id: 3,
    heading: "Sweebs Club",
    paragraph: [
      "Starting university during COVID was rather disappointing, particularly as the first year is typically a time for meeting new people. However, with online classes and limited socialising, I was determined not to miss out on the opportunity. Consequently, I decided to start a new uni club called Sweebs, which focused on Asian animated entertainment, including Japanese and Korean comics, cartoons, and music.",
      "As I began this venture, I realised that the club could be more than just a niche interest group. I recognised that all university students were likely seeking ways to connect with one another, even while we were confined to online interactions. Therefore, I shifted the focus to creating a social space for students to gather and network.",
      'This approach proved to be highly successful, and we grew to over 400 members in just a few months. It became one of the largest university clubs at the time, and it was wonderful to see individuals from across the university coming together. I also initiated an "all committee community" to encourage collaboration among different clubs for events. It was a straightforward idea, but it turned out to be a significant success, with representatives from over 20 clubs participating and working together within just a month—that was, for as long as I was in charge.',
    ],
    images: [],
  },
  {
    id: 4,
    heading: "Round Square: Eye Camp",
    paragraph: [
      "In my final year of high school, I participated in a volunteer programme organised by Round Square, which involved travelling to underprivileged areas in India. Our mission was to raise awareness about eye health and provide free eye tests and glasses to those in need. Prior to our work, we received training from professionals on how to conduct eye tests, which was an invaluable experience in itself.",
      "It was eye-opening to witness how many individuals were struggling with blurry vision, often unaware that it was a treatable condition. We were able to make a significant difference by offering free eye tests and glasses to those who required them. It was a deeply rewarding experience that has stayed with me.",
      "The programme was a tremendous success, garnering considerable local attention and media coverage. Local news agencies even came to document our efforts, and I was fortunate enough to be featured in one of the articles. Below is a section from the local newspaper that highlights our experience.",
    ],
    images: [
      imgRoundSquare1,
      imgRoundSquare2,
      imgRoundSquare3,
      imgRoundSquare4,
      imgRoundSquare5,
      imgRoundSquare6,
      imgRoundSquare7,
      imgRoundSquare8,
      imgRoundSquare9,
    ],
  },
];

interface PostCardProps {
  heading: string;
  paragraph: string[];
  images: string[];
}

const parseParagraph = (paragraph: string[]) => {
  return paragraph.map((line, index) => (
    <div key={index}>
      {line.split(/(\[.*?\]\(.*?\))/g).map((part, idx) => {
        const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (match) {
          return (
            <a key={idx} href={match[2]} className="text-primary underline">
              {match[1]}
            </a>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
      {index < paragraph.length - 1 && (
        <>
          <br />
          <br />
        </>
      )}
    </div>
  ));
};

const PostCard = ({ heading, paragraph, images }: PostCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const validImages = images.filter((img) => img && img !== "");

  useEffect(() => {
    if (validImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [validImages.length]);

  return (
    <div className="cyber-box border-primary/40 bg-card/70 mb-6">
      <h3 className="text-primary font-display text-xl uppercase tracking-wider mb-4 text-glow-primary">
        {heading}
      </h3>
      <p className="text-foreground/70 font-mono text-sm leading-relaxed mb-6">
        {parseParagraph(paragraph)}
      </p>
      {validImages.length > 0 && (
        <div className="relative aspect-video overflow-hidden border border-primary/20">
          {validImages.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Post visual ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {validImages.length > 1 && (
            <div className="absolute bottom-2 right-2 flex gap-1">
              {validImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 border border-primary/50 ${
                    index === currentImageIndex
                      ? "bg-primary"
                      : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  );
};

const Community = () => {
  return (
    <PageLayout title="community">
      <div className="space-y-8">
        <p className="text-foreground/70">
          Building bridges, sharing knowledge, and fostering growth within the
          community.
        </p>

        <div className="mt-8">
          {samplePosts.map((post) => (
            <PostCard
              key={post.id}
              heading={post.heading}
              paragraph={post.paragraph}
              images={post.images}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Community;
