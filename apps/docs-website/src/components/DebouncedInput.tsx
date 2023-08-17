import React from "react";

type DebouncedInputProps = {
  value?: string | number;
  onChange: (value?: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const DebouncedInput = ({
  value: initialValue = "",
  onChange,
  debounce = 300,
  ...props
}: DebouncedInputProps): React.JSX.Element => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
