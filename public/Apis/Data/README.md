# Bookshelf Demo

## Purpose

This project serves as a base demo to highlight specific technical skills that we value at Xngage. More importantly, however, the exercise allows us to share our processes and best practices through a real world example with you. We want you to understand how we work just as much as we want to see your work. **Please communicate any questions, concerns, or suggestions you may have. We are here to help any way we can!**

## App Requirements

Please attempt to complete all of the following requirements:

1. Create the header and footer provided in the design. The header should be accessible on mobile breakpoints with a toggle that allows the menu to be visible.
2. Data should be brought into the app dynamically with an api call to:
    * Category data from data/categories.json
    * Book data from data/categories/*.json
3. Create a "browse the categories" component. This component should:
    * 8 categories should be displayed **at most**. The category consists of an image, title, and description properties to be displayed in a grid-like fashion.
4. Create a books carousel component. This component should:
    * Be able to display a list of books based off of the category passed to it.
    * Display 1 book on mobile, 3 books on tablet, and 5 books from then on. The book consists of an image, title, author, and reviewed by properties to be displayed in a carousel like.

## Additional Requirements
* Images will need to be cut out of design file. Background images may be substituted for a solid color or gradient since there is no way to separate it from a flattened image file.
* It is **IMPORTANT** to add a README file that explains what steps must be taken to run the application. E.g. Installing Node Modules, npm commands for watch, dev, test and prod.
* Writing semantic and structured markup is critical.
* We expect the final solution to match the creative design as closely as possible.
* You can create your own CSS grid system, or use a simplified grid system from Material Design, Bootstrap, etc...
* Use a mobile first approach when developing for responsive.
* Media queries can be determined based on whatever is deemed appropriate, but you can use these breakpoints as a starting point: 768 (tablet), 1024 (desktop), 1400 (extra large).
* You may create any folder structure you like and even more the base folders around. Just keep in mind that by moving the images folder you will need to account for the path when the JSON "image" is returned from the service.

## Bonus
* Link the books in the carousels to an id specific route showing the expanded details of the book.
	* Data for this task can be found in the data/books/book\*.json.
	* Show any data that is included with the JSON for that book, on the page.
* Bonus points for implementing any of the following
    * Adding tests into your app
    * Paying attention you accessibility
    * Using good seo practices
    * Delivering a high performance solution.
    * Using Typescript to properly type your code
* We pay a lot of attention to the Solution Architecture and code modularity.

## Technologies
For this version of the test we are leaving the technology stack up to your discretion. However, this is a front-end focussed test so we will be primarily judging the quality and usage from an HTML/CSS/JS point of view and would suggest you focus your efforts there.