import { PropsWithChildren } from 'react';

type Color = 'primary' | 'secondary';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: Color;
};

export function Button({ children, color, ...buttonHtmlProps }: PropsWithChildren<ButtonProps>) {
  const commonCls = 'px-1 rounded';

  const primaryCls = 'dark:bg-dark-primary dark:text-dark-black bg-light-primary text-light-white';

  const secondaryCls = 'bg-dark-black';

  const colors: {
    [K in Color]: string;
  } = {
    primary: primaryCls,
    secondary: secondaryCls,
  };

  return (
    <button type="button" className={commonCls.concat(' ', colors[color])} {...buttonHtmlProps}>
      {children}
    </button>
  );
}
