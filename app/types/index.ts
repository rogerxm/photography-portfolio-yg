export interface Photo {
  id: string;
  url: string;
  alt: string;
  title?: string;
  category: "nature" | "portrait" | "architecture" | "street";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  slug: string;
  photos: Photo[];
}
