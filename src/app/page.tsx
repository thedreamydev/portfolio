import Section from "@/components/section";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <>
      <Section title="About me">
        <p className="paragraph mb-2">
          Crafting software with a focus on design, motion, and user experience.
        </p>
        <p className="paragraph">
          I&apos;m also exploring Web3 and blockchain related technologies to grow as
          a frontend engineer in the space.
        </p>
      </Section>

      <Section title="Work Experience">
        <p className="paragraph">Senior Frontend Engineer at Saleshandy</p>
        <p className="paragraph">Remote • Nov 2021 — Ongoing</p>

        <p className="paragraph mt-6">Frontend Developer at Qloron Pvt Ltd</p>
        <p className="paragraph">Remote • Jun 2020 — Oct 2021</p>
      </Section>

      <Section title="Projects">
        <div className="flex flex-col gap-4">
          <ProjectCard
            name="Animations by Shoaib"
            description="Recreated the UI component animations."
            href="https://animations.shoaibsayyed.com/"
            status="In Progress"
          />
          <ProjectCard
            name="BlockUI"
            description="A collection of functional, interactive web3 components."
            href="https://blockui.xyz/"
            status="In Progress"
          />
        </div>
      </Section>

      <Section title="Connect">
        <p className="paragraph">
          You can see more of my work on{" "}
          <a
            href="https://x.com/thedreamydev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-medium inline-block font-medium underline"
          >
            X
          </a>{" "}
          and view my code on{" "}
          <a
            href="https://github.com/thedreamydev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-medium inline-block font-medium underline"
          >
            GitHub
          </a>
          .
        </p>
      </Section>
    </>
  );
}
