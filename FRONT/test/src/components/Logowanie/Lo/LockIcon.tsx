import { memo, SVGProps } from 'react';

const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.1111 12.5556H5.55556C4.32826 12.5556 3.33333 13.5505 3.33333 14.7778V22.5556C3.33333 23.7829 4.32826 24.7778 5.55556 24.7778H21.1111C22.3384 24.7778 23.3333 23.7829 23.3333 22.5556V14.7778C23.3333 13.5505 22.3384 12.5556 21.1111 12.5556Z'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.77778 12.5556V8.11112C7.77778 6.6377 8.36309 5.22462 9.40496 4.18275C10.4468 3.14088 11.8599 2.55557 13.3333 2.55557C14.8068 2.55557 16.2198 3.14088 17.2617 4.18275C18.3036 5.22462 18.8889 6.6377 18.8889 8.11112V12.5556'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(LockIcon);
export { Memo as LockIcon };
