export interface Blog {
  post: Post[];
  category: string;
  ads: boolean
}

export interface Post{
  title: string;
  decription: string;
  tags: string;
  author: Author[];
}

/**
 * Author del post
 *
 * @export 
 * @interface Author
 */
export interface Author{
  name: string;
  email: string;
}