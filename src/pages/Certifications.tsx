import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface CirtificateBox {
  heading: string;
  description: string;
  tags: string[];
  link: string;
}

interface CourseSection {
  course: string;
  posts: CirtificateBox[];
}

const cirtificatesPosts: CourseSection[] = [
  {
    course: "Technical Development",
    posts: [
      {
        heading: "C Programming for Embedded Applications",
        description:
          "Principles for efficient embedded software in C, focusing on challenges like memory limits, power consumption, and hardware awareness, along with volatile and nonvolatile memory concepts and optimisation techniques for efficiency and performance.",
        tags: ["Embedded C"],
        link: "https://www.linkedin.com/learning/certificates/348fe2b72b88d447e1b63a23b0ecad0c31b3b3f36776e5900b35770840c7e01a?u=51091521",
      },
      {
        heading: "Introduction to Linux",
        description:
          "Fundamentals of Linux, including the kernel, desktop environments, and file storage.",
        tags: ["Linux",],
        link: "https://www.linkedin.com/learning/certificates/73d1585d91ad86005f9d1bd9e9bc0254ae129081b500290ede06b340a5a34462?u=51091521",
      },
    ],
  },
  {
    course: "Business Administration",
    posts: [
      {
        heading: "Entrepreneurship Foundations",
        description:
          "Steps to launch and grow a startup: evaluating business opportunities, starting small, raising funds, assembling the right team and advisers, engaging early adopters, building your personal brand, finding supporters, and scaling your company. Part of a Microsoft Professional Certificate.",
        tags: ["Entrepreneurship"],
        link: "https://www.linkedin.com/learning/certificates/7af2c49088aec2698df9b7f4faaca4269d7622de6bd7039a4e086a32cb74fb36?trk=share_certificate",
      },
    ],
  },
];

const TagBadge = ({ tag }: { tag: string }) => (
  <span className="inline-block px-2 py-1 text-xs font-mono border border-secondary/40 text-secondary/80 bg-secondary/5 mr-2 mb-2 hover:border-secondary hover:text-secondary transition-colors">
    {tag}
  </span>
);

const CirtificateBoxCard = ({ post }: { post: CirtificateBox }) => (
  <a
    href={post.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block cyber-box border-primary/30 bg-card/60 w-full hover:border-primary/60 cursor-pointer transition-all hover:bg-card/80 p-4"
  >
    <h4 className="text-primary font-display text-lg uppercase tracking-wider mb-2">
      {post.heading}
    </h4>
    <p className="text-foreground/60 font-mono text-sm mb-4">
      {post.description}
    </p>
    <div className="flex flex-wrap">
      {post.tags.map((tag) => (
        <TagBadge key={tag} tag={tag} />
      ))}
    </div>
  </a>
);

const Cirtificates = () => {
  const [openCourses, setOpenCourses] = useState<Record<string, boolean>>(
    Object.fromEntries(cirtificatesPosts.map((s) => [s.course, true]))
  );

  const toggleCourse = (course: string) => {
    setOpenCourses((prev) => ({ ...prev, [course]: !prev[course] }));
  };

  return (
    <PageLayout title="cirtificates">
      <div className="space-y-8">
        <p className="text-foreground/70">
          Repository of tools, scripts, and contributions to the open-source
          projects. Each line of code written to solve problems in the urban
          sprawl.
        </p>

        {cirtificatesPosts.map((section) => {
          return (
            <Collapsible
              key={section.course}
              open={!!openCourses[section.course]}
              onOpenChange={() => toggleCourse(section.course)}
              className="mt-10"
            >
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center gap-4 mb-6 cursor-pointer group">
                  <div className="w-2 h-2 bg-primary animate-pulse" />
                  <h3 className="text-2xl font-display text-primary/80 uppercase tracking-widest">
                    {section.course}
                  </h3>
                  <div className="flex-1 h-px bg-primary/20" />
                  <ChevronDown
                    className={`w-5 h-5 text-primary/60 transition-transform duration-200 ${
                      openCourses[section.course] ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {section.posts.map((post) => (
                  <CirtificateBoxCard key={post.heading} post={post} />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Cirtificates;

