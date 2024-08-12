# React + Vite Random-Quote-Machine
A React-based random quote machine application developed as part of a freeCodeCamp course certification. 
This app fetches and displays random quotes, allowing users to tweet their favorite quotes.
The project was built to fulfill specific user stories and pass all provided tests.

Features:
Quote Display- Displays a random quote in the #text element.
Shows the author of the quote in the #author element.
New Quote Button- Includes a button with the id new-quote that, when clicked, fetches and displays a new random quote and its author.
Tweet Quote Button- A clickable element with the id tweet-quote allows users to tweet the current quote. The button includes a href attribute pointing to twitter.com/intent/tweet for sharing the quote.
Centered Layout- The #quote-box wrapper element is horizontally centered on the page.

Technologies Used:
React- The frontend framework used to build the interactive components of the random quote machine.
JavaScript- Handles the logic for fetching random quotes and updating the display.
HTML & CSS- For structuring and styling the user interface.
Typefit API - Used to retrieve quote datasets.

How to Use:
Display Quotes- On initial load, a random quote and its author will be displayed in the quote box.
Get New Quote- Click the new-quote button to fetch and display a new random quote and its author.
Tweet the Quote- Click the tweet-quote button to share the current quote on Twitter.

Clone the repository to your local machine using:
git clone ttps://github.com/tjrapodile/random-quote-machine.git

Navigate to the project directory:
cd random-quote-machine

Install the necessary dependencies:
npm install

Start the application:
npm run dev

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
