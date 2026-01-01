import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

type Category = "community" | "hobby" | "academic";

interface CodePost {
  heading: string;
  description: string;
  tags: string[];
  link: string;
  category: Category;
}

interface YearSection {
  year: number;
  posts: CodePost[];
}

const codebasePosts: YearSection[] = [
  {
    year: 2026,
    posts: [],
  },
  {
    year: 2025,
    posts: [
      {
        category: "hobby",
        heading: "OpenNetics - Gesture Tracker",
        description:
          "Tool to visualise serial read and record gestures for OpenNetics development.",
        tags: ["OpenNetics", "Python", "PySlide", "QT", "scipy", "numpy"],
        link: "https://github.com/OpenNetics/Gesture-Tracker",
      },
      {
        category: "hobby",
        heading: "Outfit Generator",
        description: "Pick right outfit for the occasion",
        tags: ["Python"],
        link: "https://github.com/karshosphere/outfit-generator",
      },
      {
        category: "hobby",
        heading: "gun",
        description:
          "Tool to unify build, run, and test commands across multiple programming languages.",
        tags: ["Go", "Build Automation"],
        link: "https://github.com/karshPrime/gun",
      },
      {
        category: "hobby",
        heading: "smonitor",
        description:
          "Tool for reading and writing serial port data with timestamped logging capabilities.",
        tags: ["Serial Communication", "C++"],
        link: "https://github.com/karshPrime/smonitor",
      },
      {
        category: "academic",
        heading: "IoT Firmware",
        description:
          "Firmware development for IoT devices featuring ECG and motion sensors.",
        tags: ["C", "C++", "ESP-IDF", "IoT"],
        link: "https://github.com/karshPrime/SWE30011-Firmware",
      },
      {
        category: "academic",
        heading: "IoT Webserver",
        description:
          "Web server implementation for processing data from ECG and motion sensors.",
        tags: ["Python", "Flask", "IoT"],
        link: "https://github.com/karshPrime/SWE30011-WebServer",
      },
      {
        category: "academic",
        heading: "IoT Smart Home",
        description:
          "Group project for managing independent IoT devices with edge and cloud server integration.",
        tags: ["IoT", "Cloud Computing", "Embedded Systems"],
        link: "https://github.com/karshPrime/c-vault",
      },
    ],
  },
  {
    year: 2024,
    posts: [
      {
        category: "community",
        heading: "TE SM9000 pressure sensors",
        description:
          "Fixed ambiguous I2C address type in Wire.requestFrom() call. Patch 1.2.2",
        tags: ["C++", "Drivers"],
        link: "https://github.com/teemune/TE_SM9000_library/pull/2",
      },
      {
        category: "community",
        heading: "Amber",
        description: "Patched Amber's installer for MacOS installation.",
        tags: ["Amber", "MacOS", "Shell"],
        link: "https://github.com/Ph0enixKM/Amber/pull/102",
      },
      {
        category: "hobby",
        heading: "vimacro",
        description: "Power of vim macros on Shell.",
        tags: ["Shell", "vim", "UNIX"],
        link: "https://github.com/karshPrime/SysHacks/blob/main/vimacro.sh",
      },
      {
        category: "hobby",
        heading: "reheading",
        description:
          "Mass reheading files and dirs with $EDITOR; with file conversion support.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshPrime/SysHacks/blob/main/refresh.sh",
      },
      {
        category: "hobby",
        heading: "copy code",
        description: "Copy all source-code for current project to clipboard.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshprime/SysHacks/blob/main/copy_code.sh",
      },
      {
        category: "hobby",
        heading: "project initialise",
        description:
          "Generate templates for new projects with basic code structure.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshprime/SysHacks/blob/main/project_initialise.sh",
      },
      {
        category: "hobby",
        heading: "MemoryPercent",
        description:
          "Tool that calculates the percentage of time elapsed since a specified date.",
        tags: ["C"],
        link: "https://github.com/karshPrime/MemoryPercent",
      },
      {
        category: "hobby",
        heading: "Trash",
        description:
          "Delete to ~/.Trash, with the power to restore from the terminal.",
        tags: ["Go", "UNIX"],
        link: "https://github.com/karshPrime/trash",
      },
      {
        category: "hobby",
        heading: "TODO",
        description:
          "A todo utility for more personalised and priority based use case.",
        tags: ["Go"],
        link: "https://github.com/karshprime/todo",
      },
      {
        category: "hobby",
        heading: "todo",
        description: "Manage todo files in centralised location. Discontinued.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshprime/SysHacks/blob/main/todo.sh",
      },
      {
        category: "hobby",
        heading: "rmsymlink",
        description: "Delete symlinks and their associated base files.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshprime/SysHacks/blob/main/rmsymlink.sh",
      },
      {
        category: "hobby",
        heading: "trash",
        description: "Move files to ~/.Trash and prevent accidental rm.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshprime/SysHacks/blob/main/trash.sh",
      },
      {
        category: "academic",
        heading: "Simplified MISP CPU",
        description: "VHDL Design",
        tags: ["VHDL", "MISP", "MCU"],
        link: "https://github.com/karshPrime/EEE40013/tree/main/Assignment2",
      },
      {
        category: "academic",
        heading: "16bit multiplier",
        description:
          "Designed a 16bit multiplier using a single 8bit multiplier",
        tags: ["VHDL", "MISP", "MCU"],
        link: "https://github.com/karshPrime/EEE40013/tree/main/Assignment1",
      },
      {
        category: "academic",
        heading: "text invert (ti)",
        description:
          "utility to perform text transformation actions on stdin as pipes & args.",
        tags: ["Go"],
        link: "https://github.com/karshPrime/ti",
      },
      {
        category: "academic",
        heading: "AstroStreakNet",
        description:
          "Capstone Project. Interface for astronomers to manage captured streak.",
        tags: ["Go", "Java", "Python", "Shell", "Typescript"],
        link: "https://github.com/AstroStreakNet",
      },
      {
        category: "academic",
        heading: "Hotel Management",
        description: "Prototype software to simulate hotel reservation system.",
        tags: ["C++"],
        link: "https://github.com/karshPrime/uni-SWE300003",
      },
    ],
  },
  {
    year: 2023,
    posts: [
      {
        category: "hobby",
        heading: "resistor",
        description:
          "Simple util to get resistor values from their colour bands.",
        tags: ["C"],
        link: "https://github.com/karshprime/SysHacks/blob/main/resistor.c",
      },
      {
        category: "hobby",
        heading: "periodic",
        description: "Print ASCII periodic table with colour code.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshprime/SysHacks/blob/main/periodic.sh",
      },
      {
        category: "hobby",
        heading: "colors",
        description: "Print all terminal \\033 terminal colours.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshprime/SysHacks/blob/main/colors.sh",
      },
      {
        category: "academic",
        heading: "Flight DBMS",
        description:
          "Project in Julia to study user permissions within database.",
        tags: ["Julia", "MySQL", "MariaDB"],
        link: "https://github.com/karshprime/uni-flightDBMS",
      },
      {
        category: "academic",
        heading: "Fine-Tune LLM",
        description: "My efforts to fine-tune various LLMs to new domains.",
        tags: ["Machine Learning", "LLMs", "Python"],
        link: "https://github.com/karshPrime/IntelligentSystems/tree/utkarsh-branch",
      },
    ],
  },
  {
    year: 2022,
    posts: [
      {
        category: "hobby",
        heading: "ytdl GTK",
        description: "GUI frontend for yt-dl in GTK3 toolkit.",
        tags: ["GTK3", "Python"],
        link: "https://github.com/karshPrime/ytdl_GTK3",
      },
      {
        category: "hobby",
        heading: "story time",
        description:
          "Discord bot to summarise stories where users type a word each to write a story.",
        tags: ["Python", "Discord API"],
        link: "https://github.com/karshPrime/story_time",
      },
      {
        category: "hobby",
        heading: "Arch vulnerable",
        description:
          "Python web-scraper util to match local packages with known vulnerable ones.",
        tags: ["Python", "Arch Linux", "BeautifulSoup"],
        link: "https://github.com/karshPrime/arch_vulnerable",
      },
      {
        category: "hobby",
        heading: "AUR helper",
        description:
          "Python web-scraper util to install packages from the AUR.",
        tags: ["Python", "Arch Linux", "BeautifulSoup"],
        link: "https://github.com/karshPrime/aur_helper",
      },
      {
        category: "hobby",
        heading: "click_speed",
        description: "Simple Ruby util to measure self mouse click speed.",
        tags: ["Ruby", "Gosu"],
        link: "https://github.com/karshPrime/click_speed/commits/main/",
      },
      {
        category: "hobby",
        heading: "refresh",
        description: "Clear system cache to free up memory.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshprime/SysHacks/blob/main/refresh.sh",
      },
      {
        category: "academic",
        heading: "D02",
        description: "Wireless Message Communicator built on top of myDAQ1.",
        tags: ["MATLAB", "myDAQ1"],
        link: "https://github.com/karshprime/uni-d02",
      },
      {
        category: "academic",
        heading: "Flight Booking",
        description: "Flight reservation website.",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        link: "https://github.com/karshprime/uni-delta_flights",
      },
      {
        category: "academic",
        heading: "EVM Prototype",
        description: "Prototype for Electronic Voting System.",
        tags: ["C++"],
        link: "https://github.com/karshprime/uni-electronic_vote_system",
      },
      {
        category: "academic",
        heading: "Traffic Light Simulator",
        description:
          "FPGA design in VHDL to simulate traffic light/pedestrian buttons.",
        tags: ["VHDL", "FPGA"],
        link: "https://github.com/karshPrime/uni-traffic_light",
      },
    ],
  },
  {
    year: 2021,
    posts: [
      {
        category: "hobby",
        heading: "ZellaBOT",
        description: "Discord bot for anonymous server confessions.",
        tags: ["Python", "Discord API"],
        link: "https://github.com/karshprime/zella_bot",
      },
      {
        category: "hobby",
        heading: "fetch",
        description: "Collection of minimal fetch scripts in bash.",
        tags: ["Shell", "UNIX"],
        link: "https://github.com/karshPrime/fetch",
      },
      {
        category: "hobby",
        heading: "battery limit",
        description:
          "Create systemd service to put a limit on max charge percentage.",
        tags: ["Shell", "systemd"],
        link: "https://github.com/karshPrime/SysHacks/blob/main/battery_cap.sh",
      },
      {
        category: "academic",
        heading: "CLI Music Player",
        description: "task description",
        tags: ["Ruby"],
        link: "https://github.com/karshPrime/uni-music_player_cli",
      },
      {
        category: "academic",
        heading: "GUI Music Player",
        description: "task description",
        tags: ["Ruby", "Gosu"],
        link: "https://github.com/karshPrime/uni-music_player_gui",
      },
      {
        category: "academic",
        heading: "Random Walker",
        description: "task description",
        tags: ["Ruby", "Gosu"],
        link: "https://github.com/karshPrime/uni-random_walker",
      },
      {
        category: "academic",
        heading: "Genesis",
        description: "2D adventure game.",
        tags: ["Ruby", "Gosu"],
        link: "https://github.com/karshPrime/uni-genesis",
      },
    ],
  },
];

const categoryLabels: Record<Category, string> = {
  community: "Community",
  hobby: "Hobby",
  academic: "Academic",
};

const categories: Category[] = ["community", "hobby", "academic"];

const TagBadge = ({ tag }: { tag: string }) => (
  <span className="inline-block px-2 py-1 text-xs font-mono border border-secondary/40 text-secondary/80 bg-secondary/5 mr-2 mb-2 hover:border-secondary hover:text-secondary transition-colors">
    {tag}
  </span>
);

const CodePostCard = ({ post }: { post: CodePost }) => (
  <a
    href={post.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block cyber-box border-primary/30 bg-card/60 mb-4 hover:border-primary/60 cursor-pointer transition-all hover:bg-card/80"
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

const Codebase = () => {
  const [openYears, setOpenYears] = useState<Record<number, boolean>>(
    Object.fromEntries(codebasePosts.map((s) => [s.year, true]))
  );
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(
      codebasePosts.flatMap((s) =>
        categories.map((cat) => [`${s.year}-${cat}`, false])
      )
    )
  );

  const toggleYear = (year: number) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  const toggleCategory = (key: string) => {
    setOpenCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <PageLayout title="codebase">
      <div className="space-y-8">
        <p className="text-foreground/70">
          Repository of tools, scripts, and contributions to the open-source
          projects. Each line of code written to solve problems in the urban
          sprawl.
        </p>

        {codebasePosts.map((section) => {
          const postsByCategory = categories.reduce((acc, cat) => {
            acc[cat] = section.posts.filter((post) => post.category === cat);
            return acc;
          }, {} as Record<Category, CodePost[]>);

          return (
            <Collapsible
              key={section.year}
              open={openYears[section.year]}
              onOpenChange={() => toggleYear(section.year)}
              className="mt-10"
            >
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center gap-4 mb-6 cursor-pointer group">
                  <div className="w-2 h-2 bg-primary animate-pulse" />
                  <h3 className="text-2xl font-display text-primary/80 uppercase tracking-widest">
                    {section.year}
                  </h3>
                  <div className="flex-1 h-px bg-primary/20" />
                  <ChevronDown
                    className={`w-5 h-5 text-primary/60 transition-transform duration-200 ${
                      openYears[section.year] ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                {categories.map((category) => {
                  const posts = postsByCategory[category];
                  if (posts.length === 0) return null;
                  const categoryKey = `${section.year}-${category}`;
                  const isOpen = openCategories[categoryKey] !== false;

                  return (
                    <Collapsible
                      key={category}
                      open={isOpen}
                      onOpenChange={() => toggleCategory(categoryKey)}
                      className="mb-6"
                    >
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center gap-2 mb-3 cursor-pointer group">
                          <h4 className="text-secondary/80 font-mono text-sm uppercase tracking-widest pl-2 border-l-2 border-secondary/40">
                            {categoryLabels[category]}
                          </h4>
                          <ChevronDown
                            className={`w-4 h-4 text-secondary/60 transition-transform duration-200 ${
                              isOpen ? "rotate-0" : "-rotate-90"
                            }`}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {posts.map((post) => (
                          <CodePostCard key={post.heading} post={post} />
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Codebase;
