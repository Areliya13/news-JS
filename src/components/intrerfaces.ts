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

export {Data, Info}