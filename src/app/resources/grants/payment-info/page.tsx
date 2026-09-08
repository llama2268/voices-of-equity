import Link from 'next/link';
import PageHero from '@/components/Layout/PageHero';
import AutoFrame from '@/components/ui/AutoFrame';

export const metadata = {
  title: 'Grant Payment Information | Voices of Equity',
  description: 'Payment details form for Voices of Equity chapter grant recipients.',
};

/**
 * Grant recipient payment information.
 *
 * The form itself is a standalone HTML document (it prints to PDF), so
 * this page gives it the site's header and frames it at its natural
 * height instead of dropping a bare iframe at the top of an empty page.
 */
export default function PaymentInfoPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Grant recipients"
        title="Payment Information"
        subtitle="Complete the form below so we can disburse your chapter’s grant. Print or save it as a PDF when you’re done and return it to the national team."
        height="min-h-[46vh]"
      >
        <Link href="/resources/grants" className="voe-btn voe-btn--outline-white">
          Back to grants
        </Link>
      </PageHero>

      <section className="bg-[#F8FAFE] py-10 md:py-14">
        <div className="voe-container">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl">
            <AutoFrame src="/forms/grant-payment-info.html?embed=1" title="Grant Recipient Payment Information" />
          </div>
        </div>
      </section>
    </main>
  );
}
