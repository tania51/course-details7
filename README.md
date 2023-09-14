. Add at least 3 Project features

    Ans: My course project is very user-friendly. Here are 3 best features of my courses
    . Users can pursue their favorite web development courses because my project displays everything clearly and also easy to find.
    . The project has many features like an image that helps users to understand easily about this course easily, every course has a title, book details, price, and credit.
    . And lastly there is also a cart section so customers will not bother with the calculation of total price and total credit and they'll also show their selected courses. My project's specialty is somehow if they try to purchase a course twice then it'll show them a toast and course not added twice.


. Discuss how you managed the state in your assignment project.

    Ans: I used two states in my assignment project. They are "useState and useEffect". This is how I managed these states..
    . First I use "useEffect" state to fetch my project data. Then I converted these data into json format.
    . Then I used a "useState" to set this json format data which I got from "useEffect". After setting data I used them as my need like I displayed images, titles, prices, and credits in a single project card. Before that, I made them a single object from an array because when I set them, I set them in the array.
    . Then I added a single title and I didn't need a project twice or more so again I used "useState" and I checked first whether there was any duplicate project or not then I set them in state and then showed them into the cart as "Course Name".
    . After that I calculated the total credit hour, total remaining hour and total price but to show them I needed three states differently. So I again used three "useState" and their initial value was a number.