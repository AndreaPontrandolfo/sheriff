import type { PageTree } from 'fumadocs-core/server';
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import { CalendarDays } from 'lucide-react';
import { createElement, type ReactNode, useMemo } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { BsFillGearFill, BsStack, BsStars } from 'react-icons/bs';
import { FaClipboardList, FaKey, FaRegCompass, FaWrench } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa6';
import { GrUpdate } from 'react-icons/gr';
import { HiMiniCpuChip, HiOutlineBarsArrowDown } from 'react-icons/hi2';
import { IoExtensionPuzzleSharp, IoFlash } from 'react-icons/io5';
import { MdTroubleshoot } from 'react-icons/md';
import { PiListMagnifyingGlassBold } from 'react-icons/pi';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { SiPrettier } from 'react-icons/si';
import { SlSpeech } from 'react-icons/sl';
import { VscVscode } from 'react-icons/vsc';
import { useMatch } from '@tanstack/react-router';
import { baseOptions } from '@/lib/layout.shared';

const icons: Record<string, React.ComponentType> = {
  BsStars,
  FaRegCompass,
  CalendarDays,
  HiMiniCpuChip,
  FaWrench,
  FaKey,
  IoExtensionPuzzleSharp,
  BsFillGearFill,
  SiPrettier,
  VscVscode,
  BsStack,
  BiLogoTypescript,
  RiTerminalBoxFill,
  IoFlash,
  GrUpdate,
  FaTruck,
  PiListMagnifyingGlassBold,
  SlSpeech,
  MdTroubleshoot,
  HiOutlineBarsArrowDown,
  FaClipboardList,
};

function resolveIcons(node: PageTree.Node): PageTree.Node {
  if (node.type === 'page' || node.type === 'folder') {
    const iconName = node.icon as unknown as string | undefined;
    const resolvedIcon =
      iconName && icons[iconName] ? createElement(icons[iconName]) : undefined;

    if (node.type === 'folder') {
      return {
        ...node,
        ...(resolvedIcon ? { icon: resolvedIcon } : {}),
        children: node.children.map(resolveIcons),
        ...(node.index
          ? { index: resolveIcons(node.index) as PageTree.Item }
          : {}),
      };
    }

    return { ...node, ...(resolvedIcon ? { icon: resolvedIcon } : {}) };
  }
  return node;
}

function resolvePageTreeIcons(tree: PageTree.Root): PageTree.Root {
  return {
    ...tree,
    children: tree.children.map(resolveIcons),
  };
}

export function SharedDocsLayout({ children }: { children: ReactNode }) {
  const { loaderData } = useMatch({ from: '__root__' });
  const rawPageTree = loaderData?.pageTree;

  const pageTree = useMemo(
    () => (rawPageTree ? resolvePageTreeIcons(rawPageTree) : rawPageTree),
    [rawPageTree],
  );

  const docsOptions: DocsLayoutProps = {
    ...baseOptions(),
    tree: pageTree!,
    githubUrl: 'https://github.com/AndreaPontrandolfo/sheriff',
  };

  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
