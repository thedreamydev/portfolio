import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  href: string;
  status?: string;
};

export default function ProjectCard({
  name,
  description,
  href,
  status,
}: Readonly<ProjectCardProps>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#191919] sm:py-3"
    >
      <div className="flex items-center gap-2">
        <span>{name}</span>
        {status && (
          <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-500 font-medium">
            {status}
          </span>
        )}
      </div>
      <span className="paragraph">{description}</span>
    </Link>
  );
}
