import Image from "next/image";
import PageLayout from "@/components/Layout/PageLayout";
import { statementPage } from "@/content";

export const metadata = {
  title: "Official Statement | Voices of Equity",
  description: "Official statement from Voices of Equity regarding Caleb Suh.",
};

export default function StatementPage() {
  const { title, eyebrow, heading, paragraphs, signature, date } = statementPage;

  return (
    <PageLayout title={title} eyebrow={eyebrow}>
      <section className="voe-ground-mist py-16 md:py-24">
        <div className="voe-container">
          <article className="mx-auto max-w-3xl border-2 border-[#171219] bg-white px-6 py-12 shadow-[0_18px_50px_rgba(17,24,39,0.10)] sm:px-14 sm:py-16">
            <div className="flex flex-col items-center">
              <Image
                src="/brand/lockup-black.png"
                alt="Voices of Equity"
                width={606}
                height={257}
                className="h-20 w-auto"
              />
              <hr className="mt-8 w-1/2 border-t border-[#171219]" />
            </div>

            <h2 className="mt-10 text-center font-[Times_New_Roman,Times,Georgia,serif] text-3xl font-bold leading-tight text-[#171219] sm:text-4xl">
              {heading}
            </h2>

            <div className="mt-10 space-y-7 font-[Times_New_Roman,Times,Georgia,serif] text-lg leading-relaxed text-[#171219] sm:text-xl">
              {paragraphs.map((segments, i) => (
                <p key={i}>
                  {segments.map((seg, j) =>
                    typeof seg === "string" ? seg : <em key={j}>{seg.em}</em>,
                  )}
                </p>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center text-center font-[Times_New_Roman,Times,Georgia,serif]">
              <hr className="w-2/3 border-t border-[#171219]" />
              <p className="mt-8 text-2xl font-bold text-[#171219]">{signature}</p>
              <p className="mt-1 text-lg text-[#171219]">{date}</p>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
