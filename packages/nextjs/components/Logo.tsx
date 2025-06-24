"use client";

type Props = React.ComponentProps<"svg"> & {
  size?: number;
  color?: string;
};

/**
 * Lisk logo.
 */
export const Logo: React.FC<Props> = ({ color = "#FFFFFF", size = 32, ...props }) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 229.1 259"
      {...props}
    >
      <polygon style={{ fill: color }} points="114.4 0 88.5 42.9 173.7 182.5 102.4 259 162.8 259 229.1 187.9 114.4 0" />
      <polygon
        style={{ fill: color }}
        points="86.6 215.9 55.5 182.5 107.8 96.6 81.7 53.9 0 187.9 66.3 259 88.3 259 128.7 215.9 86.6 215.9"
      />
    </svg>
  );
};
