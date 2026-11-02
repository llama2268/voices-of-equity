// Public statement regarding Caleb Suh. Paragraphs are arrays of segments;
// a { em } segment renders in italics (used for the case name).
import type { StatementPageContent } from './types'

export const statementPage: StatementPageContent = {
  navTitle: 'STATEMENT',
  title: 'Official Statement',
  eyebrow: 'Public Statement',
  heading: 'Official Statement from Voices of Equity',
  paragraphs: [
    [
      'Voices of Equity is deeply disturbed by the information recently made public regarding Caleb Suh and his guilty plea in ',
      { em: 'United States of America v. Caleb Suh' },
      '. Our organization was unaware of these proceedings or the nature and extent of the conduct described.',
    ],
    [
      'Caleb Suh has not served in an executive or decision-making capacity at Voices of Equity since April 2026. Upon learning of the federal criminal proceedings and the recently filed civil lawsuit, we immediately terminated his position on our Board of Advisors, effective November 1, 2026.',
    ],
    [
      'Caleb Suh no longer holds any position within Voices of Equity and has no financial, legal, or decision-making authority, ownership interest, or other stake in the organization.',
    ],
    [
      'We unequivocally condemn the conduct described, which stands in direct opposition to the fundamental values and principles upon which Voices of Equity was founded.',
    ],
  ],
  signature: 'Voices of Equity',
  date: 'November 2, 2026',
}
