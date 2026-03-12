export type Category =
  | "news"
  | "entertainment"
  | "sports"
  | "technology"
  | "travel"
  | "lifestyle"
  | "health"
  | "fashion";

export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  image: string;
  author: Author;
  publishedAt: string;
  readingTime: number;
  views: number;
  isFeatured: boolean;
  isBreaking: boolean;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MagazineEdition {
  id: string;
  title: string;
  cover: string;
  month: string;
  year: number;
  downloadUrl: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  youtubeId: string;
  publishedAt: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
