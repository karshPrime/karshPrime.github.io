import PageLayout from "@/components/PageLayout";
import ImageSlideshow from "@/components/ImageSlideshow";

// Import portrait images for slideshow
import img1 from "@/assets/me/7232.jpg";
import img2 from "@/assets/me/7238.jpg";

const slideshowImages = [img1, img2];
const timelineEvents = [
  {
    year: "January, 2025 - Present",
    title: "Current Role",
    description:
      "Joined as a graduate software engineer at Design+Industry, Melbourne, Australia.",
  },
  {
    year: "July - September, 2025",
    title: "Grad School",
    description: "Started and withdrew from Babson College, Boston, USA.",
  },
  {
    year: "July, 2025",
    title: "Graduated Undergrad",
    description:
      "Graduated with Distinction in Engineering Honours from Swinburne University.",
  },
  {
    year: "October, 2024 - June 2025",
    title: "Honours Work Placement",
    description:
      "Worked at Haemograph Pty Ltd as a Research Assistant / Firmware Engineer.",
  },
  {
    year: "July, 2024 - July 2025",
    title: "Treasurer, Swinburne Greek Club",
    description:
      "Elected Treasurer of the University Greek Club, joining the club's executive committee.",
  },
  {
    year: "January - February 2024",
    title: "Engineering Internship",
    description: "Interned at Yeme Company as a Software Engineer. Built the website: www.yeme.com.au",
  },
  {
    year: "August - November 2023",
    title: "In2Science Mentor Volunteer",
    description:
      "Volunteered as a Math mentor at Weststall Secondary School. Finalist for Best Communicator.",
  },
  {
    year: "August - November 2022",
    title: "In2Science Mentor Volunteer",
    description:
      "Volunteered as a Math mentor Auburn High School. Nominated for Best Mentor.",
  },
];

const Background = () => {
  return (
    <PageLayout title="About Me">
      <div className="space-y-12">
        {/* Floating slideshow */}
        <div className="float-right ml-6 mb-4 w-48 lg:w-64 xl:w-72">
          <ImageSlideshow images={slideshowImages} />
        </div>

        {/* Introduction */}
        <section>
          <p className="text-foreground/80 leading-relaxed">
            I am a dreamer who views the world through the lens of engineering.
            Motivated by purpose, I was awarded the "Innovator Impact" award at{" "}
            <a
              href="https://www.babson.edu/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Babson College
            </a>{" "}
            and offered an officer role in the U.S. Marine Corps.
          </p>
        </section>

        {/* About Section */}
        <section>
          <h2 className="text-2xl font-display uppercase tracking-wider text-primary mb-4">
            Personal Pursuits
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Discipline drives me, evident as I prepare for a 100 km
            ultra-marathon. This journey tests my limits, both mentally and
            physically. Additionally, I received the Vice-Chancellor Excellence
            Scholarship at{" "}
            <a
              href="https://www.swinburne.edu.au/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Swinburne University of Technology
            </a>
            , from where I graduated with Distinction in Engineering Honours.
          </p>
        </section>

        {/* Professional Experience */}
        <section>
          <h2 className="text-2xl font-display uppercase tracking-wider text-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            My professional journey as a firmware engineer started with {" "}
            <a
              href="https://haemograph.com.au/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Haemograph,
            </a>{" "}
            a biotech startup based in Melbourne, where I wrote the firmware for
            a patented rheometer device. This role sharpened my low-level
            development skills and familiarised me with the{" "}
            <a
              href="https://www.espressif.com/en/products/socs/esp32"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              ESP32 platform
            </a>
            .
            <br/><br/>
            Following this, I got a firmware intership at{" "}
            <a
              href="https://www.design-industry.com.au"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Design+Industry
           </a>{" "}
            with Capgemini where I'm currently building myself. 
          </p>
        </section>

        {/* Clear float before timeline */}
        <div className="clear-both" />

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-display uppercase tracking-wider text-primary mb-8">
            Professional Timeline
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-primary rounded-full border-2 border-background" />

                  {/* Year badge */}
                  <span className="inline-block text-xs font-mono text-primary/60 bg-primary/10 px-2 py-0.5 rounded mb-2">
                    {event.year}
                  </span>

                  {/* Content */}
                  <h3 className="text-lg font-display uppercase tracking-wide text-primary/90 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Background;
