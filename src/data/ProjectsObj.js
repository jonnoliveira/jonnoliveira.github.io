const projects = [
  {
    index: 15,
    src: 'https://cdn-icons-png.flaticon.com/512/9757/9757044.png',
    alt: 'Recipes app project',
    title: 'Recipes app',
    pages: true,
    url: 'https://jonnoliveira.github.io/trybe-project-16-recipes-app/',
    repository: 'https://github.com/jonnoliveira/trybe-project-16-recipes-app',
    description: "The Recipes app project was designed by a group and aimed to develop a recipe web app with priority for the mobile version. In this app, the user could search for the food or drink by clicking on the search button or filtering with the specific buttons according to his will. In addition, it's possible to bookmark, share the link easily and follow the preparation of each recipe. To achieve these goals we use React, Context API, Hooks and API calls for dynamism and application functions. With RTL/Jest, we were able to test and guarantee the good functionality of the app. The structuring and diversification of the work was coordinated through the agile Kanban methodology. See more below!"
  },
  {
    index: 14,
    src: 'https://cdn-icons-png.flaticon.com/512/2590/2590375.png',
    alt: 'Star Wars Planet Search project',
    title: 'Star Wars Planet Search',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-15-starwars-planets-search',
    description: "In the Star Wars Planets Search project, we should develop an application capable of rendering a table composed of some planets from the Star Wars universe and their various characteristics. The differential in this application was the possibility of inserting several filters, both textual and numerical, and it is also possible to group simultaneous filters. In this project I used React with Context API and Hooks as the main technologies for sharing data between all levels of the application, as well as for state manipulation and management. Finally, for the tests I used RTL/Jest. See more below!"
  },
  {
    index: 13,
    src: 'https://cdn-icons-png.flaticon.com/512/8776/8776742.png',
    alt: 'Trivia Game project',
    title: 'Trivia Game',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-14-trivia-game',
    description: "In the Tivia game project we use two API requests to access the data. We use React and Redux technologies for componentization and management of the global state of the application. As for the application of the tests, in order to guarantee a good quality of the code and its functioning, we used the RTL/jest. It was a great opportunity to develop this project, mainly because it is a group work, requiring communication and collaboration to achieve our goals. To do so, we use the Kanban of agile methodologies to organize tasks. See more below!"
  },
  {
    index: 12,
    src: 'https://cdn-icons-png.flaticon.com/512/7603/7603279.png',
    alt: 'Trybe Wallet project',
    title: 'Trybe Wallet',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-13-trybewallet',
    description: "Through the Trybe Wallet project, I simulated a financial expense control portfolio, converting currencies and their quotations. It's possible to describe each expense in detail and even edit or delete each one individually. In short, I used React and Redux to carry out all the project's programming logic and global state management, asynchronous requests to obtain economic data, HTML and CSS for structuring and styling, and RTL tests to assess the application's good behavior.See more below!"
  },
  {
    index: 11,
    src: 'https://cdn-icons-png.flaticon.com/512/4524/4524495.png',
    alt: 'Tests in React.',
    title: 'Tests in React',
    pages: false,
    repository: 'https://github.com/jonnoliveira/trybe-project-12-react-testing-library',
    description: "In this project we run completed tests using a React Testing Library. With Stryker I was able to verify the consistency of the tests created when they were able to detect the proposed changes, or mutants, created in the application. Good tests help us to avoid bugs in the application, ensuring that it works correctly. Another benefit is being able to refactor the code with the certainty that the behavior will not change. See more below!",
  },
  {
    index: 10,
    src: 'https://cdn-icons-png.flaticon.com/512/6919/6919072.png',
    alt: 'Front-end: Online Store project.',
    title: 'Front-end: Online Store',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-11-frontend-online-store',
    description: "In this project, we created a dynamic e-commerce page with React. It's important to emphasize that it was a group work where we used the agile Kanban methodology in organizing the team for the project. We use requests, conditional rendering, componentization and component states, application routes, among other knowledge to create an e-commerce Front-End powered by a Mercado Livre API. See more below!",
  },
  {
    index: 9,
    src: 'https://cdn-icons-png.flaticon.com/512/7546/7546337.png',
    alt: 'TrybeTunes project.',
    title: 'TrybeTunes',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-10-trybetunes',
    description: "In the TrybeTunes project, in addition to componentization, I had the opportunity to work with the lifecycle of React components and with the creation of new routes for the application pages using the React Router. With that done it's possible to search and list albums and songs from various bands and artists. Even listen to the preview of each song and favorite your favorite songs. See more below!",
  },
  {
    index: 8,
    src: 'https://cdn-icons-png.flaticon.com/512/7750/7750482.png',
    alt: 'Tryunfo project.',
    title: 'Tryunfo',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-09-tryunfo',
    description: "At Tryunfo I had a great opportunity to learn how to create a page using the componentization of the application's functions with React. In addition, I was able to use the state of the components to better manage the application's events. With all this it's possible to create new cards and list the existing cards in the deck. See more below!",
  },
  {
    index: 7,
    src: 'https://cdn-icons-png.flaticon.com/512/5928/5928454.png',
    alt: 'Solar System project.',
    title: 'Solar System',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-08-solar-system',
    description: "This project was my first contact with React and the possibility of componentizing the elements of an application, as well as their properties. That way I was able to create a page to list all the planets in the Solar System. In addition to the planets, I've also listed some of the more well-known space missions. See more below!",
  },
  {
    index: 6,
    src: 'https://cdn-icons-png.flaticon.com/512/5175/5175268.png',
    alt: 'Shopping cart project.',
    title: 'Shopping cart',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-07-shopping-cart',
    description: 'In the Shopping cart project I was able to put into practice the knowledge acquired about Asynchronous JavaScript (Promises / Fetch / Async / Await). Using the TDD (Test Driven Development) method and ensuring good quality code with good test coverage, I simulated a shopping cart of a fully dynamic e-commerce that receives information from an API. See more below!',
  },
  {
    index: 5,
    src: 'https://cdn-icons-png.flaticon.com/512/4727/4727698.png',
    alt: 'Zoo functions project.',
    title: 'Zoo functions',
    pages: false,
    repository: 'https://github.com/jonnoliveira/trybe-project-06-zoo-functions',
    description: 'I simulated a zoo reporting system by developing a set of functions capable of retrieving information both about the animals, such as species and place of origin, as well as data about the people who collaborate with the maintenance and care of the place. See more below!'
  },
  {
    index: 4,
    src: 'https://cdn-icons-png.flaticon.com/512/4861/4861739.png',
    alt: 'JavaScript: Unit Tests project.',
    title: 'JavaScript: Unit Tests',
    pages: false,
    repository: 'https://github.com/jonnoliveira/trybe-project-05-js-unit-tests',
    description: 'Testing our application is extremely important to ensure the best functioning and user experience. In this project I performed unit tests using the Jest module of NodeJS to verify the correct functioning of the existing functions and the new functions implemented. See more below!',
  },
  {
    index: 3,
    src: 'https://cdn-icons-png.flaticon.com/512/7210/7210521.png',
    alt: 'Trybewarts project.',
    title: 'Trybewarts',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-04-trybewarts',
    description: 'In this project we should develop a form that returns user feedback. This was the first project in pairs simulating, basically, how the development of an application can work within a company and how soft skills are vital in interpersonal relationships. We use HTML, CSS and JavaScript for the implementations. See more below!',
  },
  {
    index: 2,
    src: 'https://cdn-icons-png.flaticon.com/512/465/465263.png',
    alt: 'Art with Pixels project.',
    title: 'Art with Pixels',
    pages: true,
    url: 'teste',
    repository: 'https://github.com/jonnoliveira/trybe-project-03-pixels-art',
    description: 'The objective of this project was to create a frame composed of pixels and a palette of random colors. I used all the knowledge acquired in JavaScript to apply functions that gave dynamism to the page. Even through JavaScript I was able to manipulate both the HTML elements in order to modify the DOM elements and some CSS style features. This whole process was very important to understand how HTML, CSS and JavaScript elements work and correlate, being able to create a dynamic and interactive project. See more below!',
  },
  {
    index: 1,
    src: 'https://cdn-icons-png.flaticon.com/512/4681/4681632.png',
    alt: 'Playground Functions project.',
    title: 'Playground Functions',
    pages: false,
    repository: 'https://github.com/jonnoliveira/trybe-project-02-playground-functions',
    description: "In this project I used programming logic to implement functions in order to achieve a certain result. From the beginning it's important to know how to break big problems into smaller problems using programming logic in the resolution. See more below!",
  },
  {
    index: 0,
    src: 'https://cdn-icons-png.flaticon.com/512/4681/4681580.png',
    alt: 'Lessons Learned project.',
    title: 'Lessons Learned',
    pages: true,
    url: 'https://jonnoliveira.github.io/trybe-project-01-lessons-learned/',
    repository: 'https://github.com/jonnoliveira/trybe-project-01-lessons-learned',
    description: 'I used the main HTML tags to assemble the structure of the presented page and stylized it by changing the positioning, size, fonts and colors of the components through the application of CSS. This whole process was very important to understand in practice how the structure (HTML) of a page works and how the style (CSS) is applied to it. In addition, I could understand the best way to make a Layout and apply the Box Model concept. See more below!',
  },
]

export default projects;
