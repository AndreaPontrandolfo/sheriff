import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { BsStars, BsFillGearFill, BsStack } from 'react-icons/bs';
import { FaRegCompass, FaKey, FaWrench } from 'react-icons/fa';
import { LuCalendarDays } from 'react-icons/lu';
import { HiMiniCpuChip } from 'react-icons/hi2';
import { SlSpeech } from 'react-icons/sl';
import { SiPrettier } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { IoFlash, IoExtensionPuzzleSharp } from 'react-icons/io5';
import { GrUpdate } from 'react-icons/gr';
import { FaTruck } from 'react-icons/fa6';
import { PiListMagnifyingGlassBold } from 'react-icons/pi';
import { MdTroubleshoot } from 'react-icons/md';
import { HiOutlineBarsArrowDown } from 'react-icons/hi2';
import { BiLogoTypescript } from 'react-icons/bi';

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
};

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
