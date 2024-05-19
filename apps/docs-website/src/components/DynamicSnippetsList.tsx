import type React from "react";

interface DynamicSnippetsListProps {
  paths: string[];
}

export const DynamicSnippetsList = ({
  paths,
}: DynamicSnippetsListProps): React.JSX.Element => (
  <ul>
    {paths.map((path) => (
      <li key={path}>
        <code>{path}</code>
      </li>
    ))}
  </ul>
);
