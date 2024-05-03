export interface StreamerType {
    name: string;
    title: string;
    path: string;
    detail: string;
    backgroundImage: string;
    socialMedia: {
      instagram: { link: string; iconClass: string };
      twitter: { link: string; iconClass: string };
      tiktok: { link: string; iconClass: string };
      youtube: { link: string; iconClass: string };
      youtube2: { link: string; iconClass: string };
    };
    slug: string;
  }