"use client";

type Props = React.ComponentProps<"svg"> & {
  size?: number;
  color?: string;
};

/**
 * Lisk logo.
 */
export const Logo: React.FC<Props> = ({}) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" fill="url(#paint0_linear_3560_2908)" />
      <path
        d="M23.5182 7L8 31.7208L16.921 40.9983L30.0984 41L39 31.7208L23.5182 7Z"
        fill="url(#paint1_linear_3560_2908)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3560_2908"
          x1="48"
          y1="24"
          x2="1.26338e-06"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E84D31" />
          <stop offset="1" stop-color="#E84D31" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_3560_2908" x1="39" y1="32.5" x2="8" y2="31.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E84D31" stop-opacity="0" />
          <stop offset="1" stop-color="#E84D31" />
        </linearGradient>
      </defs>
    </svg>
  );
};
