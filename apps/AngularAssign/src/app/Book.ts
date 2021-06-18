export interface Book {
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
  address?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
}
