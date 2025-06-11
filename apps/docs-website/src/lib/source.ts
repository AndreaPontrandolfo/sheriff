import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { createElement } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { BsFillGearFill, BsStack, BsStars } from 'react-icons/bs';
import { FaClipboardList, FaKey, FaRegCompass, FaWrench } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa6';
import { GrUpdate } from 'react-icons/gr';
import { HiMiniCpuChip, HiOutlineBarsArrowDown } from 'react-icons/hi2';
import { IoExtensionPuzzleSharp, IoFlash } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { MdTroubleshoot } from 'react-icons/md';
import { PiListMagnifyingGlassBold } from 'react-icons/pi';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { SiPrettier } from 'react-icons/si';
import { SlSpeech } from 'react-icons/sl';
import { VscVscode } from 'react-icons/vsc';
import { blogPosts, docs } from '@/.source';

const icons = {
  BsStars,
  FaRegCompass,
  LuCalendarDays,
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

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  // @ts-expect-error
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
});

// Loader for the blog posts, exported as 'blog'
export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});
