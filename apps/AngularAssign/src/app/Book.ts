export interface Book  {
    id: string;
    volumeInfo: {
      title: string;
      subtitle: string;
      authors: string[];
      publisher: string;
      publishDate: string;
      description: string;
      averageRating: number;
      ratingsCount: number;
      imageLinks: {
        thumbnail: string;
        smallThumbnail: string;
      };
      pageCount: number;
      language: string;
    };
    address?: String;
    email?: String;
    name?: String;
    phoneNumber?: String;
  }