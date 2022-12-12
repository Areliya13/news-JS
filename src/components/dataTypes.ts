import { Info } from "./intrerfaces";

type Options = { [key: string]: string };

type Article = Pick<
  Info,
  'source' | 'author' | 'content' | 'description' | 'publishedAt' | 'title' | 'url' | 'urlToImage'
>;

type Result = {
  json(): Promise<string>;
  readonly type: string;
  readonly bodyUsed: boolean;
  readonly url: string;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
};

export {Options, Article, Result}