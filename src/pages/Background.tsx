import PageLayout from "@/components/PageLayout";
import ImageSlideshow from "@/components/ImageSlideshow";

// Import portrait images for slideshow
import img1 from "@/assets/me/7232.jpg";
import img2 from "@/assets/me/7238.jpg";

const slideshowImages = [img1, img2];

const Background = () => {
  return (
    <PageLayout title="Profile">
      <div className="space-y-12">
        {/* Floating slideshow */}
        <div className="float-right ml-6 mb-4 w-48 lg:w-64 xl:w-72">
          <ImageSlideshow images={slideshowImages} />
        </div>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-display uppercase tracking-wider text-primary mb-4">
            How I think
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Building has always been the common thread. What draws me in is the
            chance to make something useful, thoughtful, and real — whether that
            is software, firmware, a tool, a system, or an idea that can take
            shape over time. A lot of my thinking sits around human capability:
            what technology can make possible, what it should make easier, and
            what kinds of systems are worth building in the first place. That is
            why my interests keep circling back to embedded systems, automation,
            open tools, and assistive technology.
          </p>
        </section>

        {/* Academic Path */}
        <section>
          <h2 className="text-2xl font-display uppercase tracking-wider text-primary mb-4">
            Academic Path
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Engineering was the clearest way for me to learn how to build properly.
            Studying at{" "}
            <a
              href="https://www.swinburne.edu.au/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Swinburne University of Technology
            </a>{" "}
            gave me the technical discipline I was looking for and trained me to
            think in systems, work through constraints, and respect the craft
            behind useful things.
          </p>
          <br></br>
          <p className="text-foreground/80 leading-relaxed">
            After graduating, I went to{" "}
            <a
              href="https://www.babson.edu/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Babson College
            </a>{" "}
            to study entrepreneurship. Engineering had taught me how to build;
            entrepreneurship felt like the right place to think more seriously
            about what to build. After starting the course, I realised I would
            learn more about industry by being in it - building, working, and
            seeing problems up close, rather than stepping away for further
            coursework. I withdrew to return to engineering work, with the
            goal of answering the "what to build" question through practice
            rather than abstraction.
          </p>
        </section>

        {/* Building in Practice */}
        <section>
          <h2 className="text-2xl font-display uppercase tracking-wider text-primary mb-4">
            Building in Practice
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Since graduating, I’ve worked across firmware, software, and
            product-facing engineering. At{" "}
            <a
              href="https://haemograph.com.au/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Haemograph,
            </a>{" "}
            I worked close to hardware and embedded systems, writing firmware
            for a patented rheometer device on the ESP32 platform. My current
            role at{" "}
            <a
              href="https://www.design-industry.com.au"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Design+Industry - Part of Capgemini,
            </a>{" "}
            is helping me keep building in the real world and grow into the kind
            of engineer I want to become. Earlier on, I also interned at Yeme,
            where I worked on web and product-facing development.
          </p>
          <br></br>
          <p className="text-foreground/80 leading-relaxed">
            Outside work, in the past, I’ve volunteered as a maths mentor through
            In2Science, helped run student communities, served as Treasurer of the
            Swinburne Hellenic Society, and earlier took part in Round Square
            eye-camp work. During the COVID years at university, I also started 
            Sweebs as a way to help students connect when campus life felt distant
            and fragmented. Across all of that, the common thread has been the same:
            building things is rewarding, but helping build communities matters
            just as much.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Background;
