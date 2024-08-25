import Article from "./Article";

import img1 from "../../assets/images/article/img/b4.webp";
import img2 from "../../assets/images/article/img/t2.webp";
import img3 from "../../assets/images/article/img/t7.webp";
import img4 from "../../assets/images/article/img/t8.webp";

const articleData = [
  {
    profilePicture: img1,
    author: "krishna Rao",
    title: "HTTP Cookies",
    sections: [
      {
        header: "HTML Semantic File",
        content: [
          "Cookies are small pieces of data stored on the user&apos;s browser. The web server can send cookies to the browser, and the browser will include them in subsequent requests to the same server.",
          "While cookies might sound more like a tasty treat, in the world of web development, it means something different and very important. Cookies play a crucial role in maintaining user state and personalizing the browsing experience..",
        ],
      },
      {
        question: "What are cookies ?",
        answer:
          "Cookies are small pieces of data that websites store on a user&apos;s device. They typically contain a name-value pair, like username=JohnDoe.",
      },
      {
        question: "What are HTTP Cookies?",
        answer:
          " HTTP cookies, are small pieces of data that websites store on a user&apos;s device.These cookies are created by web servers and sent to the user&apos;s browser, wherethey&apos;re stored locally. Cookies contain information such as user preferences,session identifiers, and tracking data, which are then sent back to the server with subsequent HTTP requests.",
      },
    ],
  },
  {
    profilePicture: img2,
    author: "Krish De",
    title: "HTML Semantic File",
    sections: [
      {
        header: "HTML Semantic File",
        content: [
          "HTML semantic elements clearly describe their meaning in a human- and machine-readable way. They help to improve accessibility and SEO.",
          "Using semantic elements like <article>, <section>, and <footer> gives better structure and meaning to web pages, enhancing the overall user experience.",
        ],
      },
      {
        question: "What are semantic elements?",
        answer:
          "Semantic elements are HTML tags that provide information about the contents of those tags. Examples include <header>, <main>, and <nav>. These elements make the HTML code more readable and understandable by both developers and machines, improving the overall accessibility and search engine optimization (SEO) of the web page.",
      },
      {
        question: "Why use semantic elements?",
        answer:
          "These elements help browsers, developers, and search engines understand the role of each part of a web page. They enhance the structure and organization of the document, making it easier to maintain and style. Additionally, they improve the accessibility for assistive technologies, ensuring a better user experience for all visitors.",
      },
    ],
  },
  {
    profilePicture: img3,
    author: "Kausik Das",
    title: "HTML Table",
    sections: [
      {
        header: "HTML Table",
        content: [
          "HTML tables allow web developers to arrange data into rows and columns. Tables are created using the <table> tag, along with <tr> for rows and <td> for cells.",
          "Tables are essential for displaying tabular data clearly, and they can be styled using CSS to improve readability and aesthetics.",
        ],
      },
      {
        question: "What are HTML tables?",
        answer:
          "HTML tables are used to display data in a structured format of rows and columns. The <th> tag is used for table headers, providing additional context. Tables can be used for a variety of purposes, such as organizing information, creating layouts, and displaying complex data sets in an easily understandable manner.",
      },
      {
        question: "How to style tables?",
        answer:
          "Tables can be styled using CSS to enhance their appearance. You can adjust the width, height, padding, and margins of table cells, as well as apply borders and background colors. Using CSS, you can also create responsive tables that adjust to different screen sizes, ensuring a better user experience on various devices.",
      },
    ],
  },
  {
    profilePicture: img4,
    author: "Rudra Ray",
    title: "HTML Cell Spacing",
    sections: [
      {
        header: "HTML Cell Spacing",
        content: [
          "HTML cell spacing refers to the space between individual cells in a table. This can be controlled using the 'cellspacing' attribute in the <table> tag.",
          "Proper use of cell spacing improves the visual separation of table data, making it easier to read and understand.",
        ],
      },
      {
        question: "What is cell spacing?",
        answer:
          "Cell spacing in HTML defines the space between adjacent table cells. It's an important aspect of table design for clarity. By adjusting cell spacing, you can prevent the contents of one cell from running into another, which improves the readability and overall appearance of the table.",
      },
      {
        question: "How to control cell spacing?",
        answer:
          "While the 'cellspacing' attribute is used in older HTML versions, modern HTML and CSS use the 'border-spacing' property to achieve the same effect. This property allows for greater flexibility and control over the spacing between cells, enabling more sophisticated and visually appealing table designs.",
      },
    ],
  },
  {
    profilePicture: img1,
    author: "Krishna Rao",
    title: "HTML Favicon",
    sections: [
      {
        header: "HTML Favicon",
        content: [
          "A favicon is a small icon associated with a particular website or web page, typically displayed in the browser's address bar or next to the site name in a list of bookmarks.",
          "Favicons enhance the user experience by making it easier to identify and differentiate between websites quickly.",
        ],
      },
      {
        question: "What is a favicon?",
        answer:
          "An HTML favicon is a 16x16 pixel icon associated with a website, often used as a branding element. It is defined in the HTML head using the <link> tag. Favicons help users to easily recognize and locate your website in their bookmarks or tabs, providing a professional look and feel to your site.",
      },
      {
        question: "What formats are used for favicons?",
        answer:
          "Favicons can be in various formats, including .ico, .png, and .gif, and help in promoting brand recognition and user navigation. The .ico format is widely supported across different browsers, while modern browsers also support .png and .svg formats, offering higher resolution and better quality.",
      },
    ],
  },
];

const AllArticles = () => {
  return (
    <div className="accordion">
      {articleData.map((article, index) => {
        return (
          <Article
            key={index}
            author={article.author}
            profilePicture={article.profilePicture}
            title={article.title}
            sections={article.sections}
          />
        );
      })}
    </div>
  );
};

export default AllArticles;
