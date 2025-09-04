import type { SVGProps } from 'react';

export default function ViorraLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="30"
        fontFamily="Garamond, serif"
        fontSize="36"
        fill="currentColor"
      >
        Viorra
      </text>
    </svg>
  );
}
