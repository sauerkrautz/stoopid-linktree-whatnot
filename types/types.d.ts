// export interface Icredentials {
//   username: string;
//   password: string;
// }

export interface credentials {
  username: string;
  password: string;
}

declare interface Icredentials {
  email: string;
  password: string;
}

export interface LoginProps {
  credentials: Icredentials;
  setCredentials: (obj: Icredentials) => void;
  setUser: (obj: any) => void;
}

export interface RegisterProps {
  credentials: Icredentials;
  setCredentials: (obj: Icredentials) => void;
}

export interface Isocials {
  socials: [string[]];
}

declare interface SocialProviders {
  facebook?: string | null;
  github?: string | null;
  whatsapp?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
  twitter: string | null;
}
