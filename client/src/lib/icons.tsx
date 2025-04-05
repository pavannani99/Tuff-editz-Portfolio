export const TuffEditzLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3V7C14 7.55228 14.4477 8 15 8H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V10L12 3Z"
        fill="currentColor"
      />
      <path
        d="M12 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TuffEditzFooterLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="8" height="8" fill="#FF3366" />
      <rect x="14" y="2" width="8" height="8" fill="#7928CA" />
      <rect x="2" y="14" width="8" height="8" fill="#00CCFF" />
      <rect x="14" y="14" width="8" height="8" fill="#33CC33" />
    </svg>
  );
};
