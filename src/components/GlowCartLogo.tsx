import type { SVGProps } from 'react';

export default function GlowCartLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="m15.31 7.37-2.62.53-2.62-.53a2.35 2.35 0 0 0-1.4.63 2.35 2.35 0 0 0-.63 1.4l.53 2.62-.53 2.62a2.35 2.35 0 0 0 .63 1.4 2.35 2.35 0 0 0 1.4.63l2.62-.53 2.62.53a2.35 2.35 0 0 0 1.4-.63 2.35 2.35 0 0 0 .63-1.4l-.53-2.62.53-2.62a2.35 2.35 0 0 0-.63-1.4 2.35 2.35 0 0 0-1.4-.63z" />
    </svg>
  );
}
