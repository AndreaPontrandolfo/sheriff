import type { JSX } from 'react';

interface DynamicSnippetsListProps {
  paths: string[];
}

export const DynamicSnippetsList = ({
  paths,
}: DynamicSnippetsListProps): JSX.Element => {
  return (
    <ul>
      {paths.map((path) => {
        return (
          <li key={path}>
            <code>{path}</code>
          </li>
        );
      })}
    </ul>
  );
};
