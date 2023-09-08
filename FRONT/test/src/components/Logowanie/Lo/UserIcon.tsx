import { memo, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.2222 23.6667V21.4444C22.2222 20.2657 21.754 19.1352 20.9205 18.3017C20.087 17.4683 18.9565 17 17.7778 17H8.88889C7.71015 17 6.57969 17.4683 5.74619 18.3017C4.9127 19.1352 4.44444 20.2657 4.44444 21.4444V23.6667'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.3333 12.5556C15.7879 12.5556 17.7778 10.5657 17.7778 8.11111C17.7778 5.65651 15.7879 3.66667 13.3333 3.66667C10.8787 3.66667 8.88889 5.65651 8.88889 8.11111C8.88889 10.5657 10.8787 12.5556 13.3333 12.5556Z'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(UserIcon);
export { Memo as UserIcon };
