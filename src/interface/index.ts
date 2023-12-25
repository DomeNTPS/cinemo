export interface MovieDetail {
  id: number;
  title_en: string;
  title_th: string;
  release_date: string;
  poster_url: string;
  fav: boolean;
}

export interface IFavorite {
  data?: MovieDetail;
}

export interface IPage {
  data?: MovieDetail[];
  onFavorite: any;
}
