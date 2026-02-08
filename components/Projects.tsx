export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-64 bg-neutral-900 flex items-center justify-center text-xl opacity-70 hover:opacity-100 transition"
        >
          Project {i + 1}
        </div>
      ))}
    </div>
  );
}
