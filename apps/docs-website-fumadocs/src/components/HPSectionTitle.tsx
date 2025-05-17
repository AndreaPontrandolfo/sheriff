interface HPSectionTitleProps {
  title: string;
}

export const HPSectionTitle = ({ title }: HPSectionTitleProps) => {
  return (
    <h2 className="text-balance text-3xl font-semibold md:text-4xl">{title}</h2>
  );
};
