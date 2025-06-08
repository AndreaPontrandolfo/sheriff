interface HPSectionTitleProps {
  title: string;
}

export const HPSectionTitle = ({ title }: HPSectionTitleProps) => {
  return (
    <h2 className="text-balance bg-gradient-to-t from-zinc-900 from-0% via-zinc-500 via-40% to-zinc-700 to-100% bg-clip-text text-3xl font-semibold text-transparent md:text-4xl dark:from-zinc-600 dark:via-zinc-300 dark:to-zinc-200">
      {title}
    </h2>
  );
};
