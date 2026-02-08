"use client";

export default function ContactForm() {
  return (
    <form className="max-w-md flex flex-col gap-4">
      <input
        placeholder="Name"
        className="bg-neutral-900 p-3 outline-none"
      />
      <input
        placeholder="Email"
        className="bg-neutral-900 p-3 outline-none"
      />
      <textarea
        rows={4}
        placeholder="Message"
        className="bg-neutral-900 p-3 outline-none"
      />
      <button className="bg-white text-black p-3 font-bold hover:scale-105 transition">
        Send
      </button>
    </form>
  );
}
