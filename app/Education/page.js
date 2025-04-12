"use client"

import React, { useState } from 'react'
import Goal from '../components/goal';
  export default function Home() {
    
      const [Quote, setQuote] = useState('Education is the most powerful weapon which you can use to change the world.')
    let arr= [
        {"id": 1, "quote": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 2, "quote": "The purpose of education is to replace an empty mind with an open one.", "author": "Malcolm Forbes"},
        {"id": 3, "quote": "An investment in knowledge pays the best interest.", "author": "Benjamin Franklin"},
        {"id": 4, "quote": "The beautiful thing about learning is that no one can take it away from you.", "author": "B.B. King"},
        {"id": 5, "quote": "Education is not preparation for life; education is life itself.", "author": "John Dewey"},
        {"id": 6, "quote": "The only person who is educated is the one who has learned how to learn and change.", "author": "Carl Rogers"},
        {"id": 7, "quote": "You are always a student, never a master. You have to keep moving forward.", "author": "Conrad Hall"},
        {"id": 8, "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.", "author": "Aristotle"},
        {"id": 9, "quote": "Education is the key to unlock the golden door of freedom.", "author": "George Washington Carver"},
        {"id": 10, "quote": "The roots of education are bitter, but the fruit is sweet.", "author": "Aristotle"},
        {"id": 11, "quote": "Educating the mind without educating the heart is no education at all.", "author": "Aristotle"},
        {"id": 12, "quote": "Education is the most powerful tool which you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 13, "quote": "Intelligence plus character—that is the goal of true education.", "author": "Martin Luther King Jr."},
        {"id": 14, "quote": "The purpose of education is to create people who are capable of doing new things, not simply repeating what other generations have done.", "author": "Jean Piaget"},
        {"id": 15, "quote": "Education is what remains after one has forgotten what one has learned in school.", "author": "Albert Einstein"},
        {"id": 16, "quote": "Education's purpose is to replace an empty mind with an open one.", "author": "Malcolm Forbes"},
        {"id": 17, "quote": "The mind is not a vessel to be filled, but a fire to be kindled.", "author": "Plutarch"},
        {"id": 18, "quote": "You can never be overdressed or overeducated.", "author": "Oscar Wilde"},
        {"id": 19, "quote": "The great aim of education is not knowledge but action.", "author": "Herbert Spencer"},
        {"id": 20, "quote": "A person who won’t read has no advantage over one who can’t read.", "author": "Mark Twain"},
        {"id": 21, "quote": "The whole purpose of education is to turn mirrors into windows.", "author": "Sydney J. Harris"},
        {"id": 22, "quote": "Teachers open the door, but you must enter by yourself.", "author": "Chinese Proverb"},
        {"id": 23, "quote": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 24, "quote": "Education is not the filling of a pail, but the lighting of a fire.", "author": "William Butler Yeats"},
        {"id": 25, "quote": "Change is the end result of all true learning.", "author": "Leo Buscaglia"},
        {"id": 26, "quote": "The great aim of education is not knowledge but action.", "author": "Herbert Spencer"},
        {"id": 27, "quote": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 28, "quote": "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.", "author": "Abigail Adams"},
        {"id": 29, "quote": "Education is the key to unlock the golden door of freedom.", "author": "George Washington Carver"},
        {"id": 30, "quote": "Learning never exhausts the mind, it only ignites it.", "author": "Leonardo da Vinci"},
        {"id": 31, "quote": "Education is a progressive discovery of our own ignorance.", "author": "Will Durant"},
        {"id": 32, "quote": "He who opens a school door, closes a prison.", "author": "Victor Hugo"},
        {"id": 33, "quote": "Education is the foundation upon which we build our future.", "author": "Christine Gregoire"},
        {"id": 34, "quote": "Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life.", "author": "Shiv Khera"},
        {"id": 35, "quote": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt"},
        {"id": 36, "quote": "You can never underestimate the value of a good education.", "author": "Anonymous"},
        {"id": 37, "quote": "The whole purpose of education is to turn mirrors into windows.", "author": "Sydney J. Harris"},
        {"id": 38, "quote": "The aim of education is the knowledge not of facts but of values.", "author": "William S. Burroughs"},
        {"id": 39, "quote": "Learning is a treasure that will follow its owner everywhere.", "author": "Chinese Proverb"},
        {"id": 40, "quote": "The function of education is to teach one to think intensively and to think critically.", "author": "Martin Luther King Jr."},
        {"id": 41, "quote": "Education is a passport to the future, for tomorrow belongs to those who prepare for it today.", "author": "Malcolm X"},
        {"id": 42, "quote": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 43, "quote": "Education is the ability to listen to almost anything without losing your temper or your self-confidence.", "author": "Robert Frost"},
        {"id": 44, "quote": "The purpose of education is to replace an empty mind with an open one.", "author": "Malcolm Forbes"},
        {"id": 45, "quote": "Learning is a treasure that will follow its owner everywhere.", "author": "Chinese Proverb"},
        {"id": 46, "quote": "Education is a progressive discovery of our own ignorance.", "author": "Will Durant"},
        {"id": 47, "quote": "An investment in knowledge always pays the best interest.", "author": "Benjamin Franklin"},
        {"id": 48, "quote": "Education is the key to unlock the golden door of freedom.", "author": "George Washington Carver"},
        {"id": 49, "quote": "Education is the key to success in life, and teachers make a lasting impact in the lives of their students.", "author": "Solomon Ortiz"},
        {"id": 50, "quote": "The educated differ from the uneducated as much as the living differ from the dead.", "author": "Aristotle"},
        {"id": 51, "quote": "The art of teaching is the art of assisting discovery.", "author": "Mark Van Doren"},
        {"id": 52, "quote": "Education is the most powerful weapon you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 53, "quote": "Teachers are the one’s who make a difference in the world.", "author": "Anonymous"},
        {"id": 54, "quote": "Education is a tool to unlock the treasures of life.", "author": "Anonymous"},
        {"id": 55, "quote": "Education is the most powerful weapon you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 56, "quote": "Learning never exhausts the mind, it only ignites it.", "author": "Leonardo Da Vinci"},
        {"id": 57, "quote": "The roots of education are bitter, but the fruit is sweet.", "author": "Aristotle"},
        {"id": 58, "quote": "The great aim of education is not knowledge but action.", "author": "Herbert Spencer"},
        {"id": 59, "quote": "Education is the key to unlock the golden door of freedom.", "author": "George Washington Carver"},
        {"id": 60, "quote": "Education is not the filling of a pail, but the lighting of a fire.", "author": "William Butler Yeats"},
        {"id": 61, "quote": "An investment in knowledge pays the best interest.", "author": "Benjamin Franklin"},
        {"id": 62, "quote": "Education is a progressive discovery of our own ignorance.", "author": "Will Durant"},
        {"id": 63, "quote": "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.", "author": "Abigail Adams"},
        {"id": 64, "quote": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", "author": "Malcolm X"},
        {"id": 65, "quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
        {"id": 66, "quote": "Education is the key to success.", "author": "Anonymous"},
        {"id": 67, "quote": "To teach is to learn twice.", "author": "Joseph Joubert"},
        {"id": 68, "quote": "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", "author": "Dr. Seuss"},
        {"id": 69, "quote": "Learning is not the product of teaching. Learning is the product of the activity of learners.", "author": "John Holt"},
        {"id": 70, "quote": "A good education can change anyone. A good teacher can change everything.", "author": "Anonymous"},
        {"id": 71, "quote": "Education is not preparation for life; education is life itself.", "author": "John Dewey"},
        {"id": 72, "quote": "The best way to predict the future is to create it.", "author": "Abraham Lincoln"},
        {"id": 73, "quote": "Education is not the filling of a pail, but the lighting of a fire.", "author": "William Butler Yeats"},
        {"id": 74, "quote": "Education is the ability to listen to almost anything without losing your temper or your self-confidence.", "author": "Robert Frost"},
        {"id": 75, "quote": "Education is what remains after one has forgotten what one has learned in school.", "author": "Albert Einstein"},
        {"id": 76, "quote": "The foundation of every state is the education of its youth.", "author": "Diogenes Laertius"},
        {"id": 77, "quote": "The best way to predict the future is to create it.", "author": "Abraham Lincoln"},
        {"id": 78, "quote": "Education is a progressive discovery of our own ignorance.", "author": "Will Durant"},
        {"id": 79, "quote": "The roots of education are bitter, but the fruit is sweet.", "author": "Aristotle"},
        {"id": 80, "quote": "Learning is the only thing the mind never exhausts, never fears, and never regrets.", "author": "Leonardo Da Vinci"},
        {"id": 81, "quote": "A person who won’t read has no advantage over one who can’t read.", "author": "Mark Twain"},
        {"id": 82, "quote": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 83, "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.", "author": "Aristotle"},
        {"id": 84, "quote": "The mind is not a vessel to be filled, but a fire to be kindled.", "author": "Plutarch"},
        {"id": 85, "quote": "Education is not just about going to school and getting a degree. It’s about widening your knowledge and absorbing the truth about life.", "author": "Shiv Khera"},
        {"id": 86, "quote": "Education is the key to unlocking the world, a passport to freedom.", "author": "Oprah Winfrey"},
        {"id": 87, "quote": "Education is not the filling of a pail, but the lighting of a fire.", "author": "William Butler Yeats"},
        {"id": 88, "quote": "Learning is the only thing the mind never exhausts, never fears, and never regrets.", "author": "Leonardo da Vinci"},
        {"id": 89, "quote": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
        {"id": 90, "quote": "The roots of education are bitter, but the fruit is sweet.", "author": "Aristotle"},
        {"id": 91, "quote": "A good teacher can inspire hope, ignite the imagination, and instill a love of learning.", "author": "Brad Henry"},
        {"id": 92, "quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
        {"id": 93, "quote": "The most important thing in education is the ability to learn and unlearn.", "author": "Anonymous"},
        {"id": 94, "quote": "Education is the most powerful tool to change the world.", "author": "Nelson Mandela"},
        {"id": 95, "quote": "The whole purpose of education is to turn mirrors into windows.", "author": "Sydney J. Harris"},
        {"id": 96, "quote": "Education is not preparation for life; education is life itself.", "author": "John Dewey"},
        {"id": 97, "quote": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", "author": "Charles Darwin"},
        {"id": 98, "quote": "We should not only teach children to read, we should teach them to question what they read.", "author": "George Bernard Shaw"},
        {"id": 99, "quote": "A good education is a foundation for a better future.", "author": "Elizabeth Warren"},
        {"id": 100, "quote": "To learn is to change, and to change is to grow.", "author": "Anonymous"}
      ]
      setInterval(() => {
        if(Quote){
            let ind=Math.floor(Math.random() *100)
            setQuote(arr[ind].quote)
        }
        else{
            setQuote(arr[1].quote)
        }
      }, 60000);
    return (
      <div>
        <main>
        <div className="w-screen p-10 py-16 my-8 yaan flex justify-center items-center sm:text-3xl text-2xl font-bold h-[250px] border herosection shadow-md hover:shadow-lg">
        {Quote}
      </div>
<Goal/>
        </main>
      </div>
    );
  }