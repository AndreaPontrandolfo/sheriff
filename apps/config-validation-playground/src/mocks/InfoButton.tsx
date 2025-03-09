import type { JSX } from 'react';

interface InfoButtonProps {
  text: string;
}

export const InfoButton = (props: InfoButtonProps): JSX.Element => {
  const { text } = props;

  return (
    <button type="button" className="btn btn-info">
      {text}
    </button>
  );
};
