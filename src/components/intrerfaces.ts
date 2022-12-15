interface Info {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Data {
  status: string;
  totalResults: number;
  articles: [Info];
}

interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface Language {
  id: number;
  name: string;
  code: string;
}

interface DataSources {
  status: string;
  sources?: [Source];
}

export {Data, Info, Source, DataSources, Language}