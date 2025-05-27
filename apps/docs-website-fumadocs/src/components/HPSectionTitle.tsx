interface HPSectionTitleProps {
  title: string;
}

export const HPSectionTitle = ({ title }: HPSectionTitleProps) => {
  return (
    <h2 className="text-balance bg-gradient-to-t from-zinc-600 from-0% via-zinc-300 via-40% to-zinc-200 to-100% bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
      {title}
    </h2>
  );
};
