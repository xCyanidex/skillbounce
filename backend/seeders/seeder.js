import dotenv from "dotenv";
import mongoose from 'mongoose';
import User from "../models/User.js";
import Category from '../models/Category.js';
import Request from '../models/Request.js';
import Offer from '../models/Offer.js';
import Review from '../models/Review.js';


dotenv.config();    

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const users = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password',
        skills: ['JavaScript', 'Python'],
        requests: [],
        categories: [],
        imageUrl: 'https://example.com/john-doe.jpg'
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password',
        skills: ['UI/UX Design', 'Copywriting'],
        requests: [],
        categories: [],
        imageUrl: 'https://example.com/jane-doe.jpg'
    },
    {
        name: 'Bob Smith',
        email: 'bob@example.com',
        password: 'password',
        skills: ['Python', 'Data Science'],
        requests: [],
        categories: [],
        imageUrl: 'https://example.com/bob-smith.jpg'
    }
];

const categories = [
    { name: 'Programming', description: 'Programming skills' },
    { name: 'Design', description: 'Design skills' },
    { name: 'Writing', description: 'Writing skills' },
    { name: 'Data Science', description: 'Data Science skills' }
];

const requests = [
    { skill: 'Graphic Design', description: 'Need graphic design services' },
    { skill: 'Content Writing', description: 'Need content writing services' },
    { skill: 'Web Development', description: 'Need web development services' }
];

const offers = [];
const reviews = [];



async function seed() {
    const userDocs = await User.insertMany(users);
    const categoryDocs = await Category.insertMany(categories);
    const categoryIds = categoryDocs.map((doc) => doc._id);
    const requestDocs = await Request.insertMany(requests);

    // Update users with category IDs
    await User.updateMany({}, { $set: { categories: categoryIds.slice(0, 2) } });
    await User.updateOne({ email: 'jane@example.com' }, { $set: { categories: categoryIds.slice(1, 3) } });
    await User.updateOne({ email: 'bob@example.com' }, { $set: { categories: categoryIds.slice(2, 4) } });

    // Update users with request IDs
    await User.updateMany({}, { $set: { requests: requestDocs.map((doc) => doc._id) } });

    offers.push({
        userId: userDocs[0]._id,
        category: categoryIds[0],
        skill: 'Python',
        description: 'Offering Python programming services'
    });
    offers.push({
        userId: userDocs[1]._id,
        category: categoryIds[1],
        skill: 'UI/UX Design',
        description: 'Offering UI/UX design services'
    });
    offers.push({
        userId: userDocs[2]._id,
        category: categoryIds[2],
        skill: 'Copywriting',
        description: 'Offering copywriting services'
    });

    await Offer.insertMany(offers);

    reviews.push({
        userId: userDocs[0]._id,
        requestId: requestDocs[0]._id,
        rating: 5,
        comment: 'Great service!'
    });
    reviews.push({
        userId: userDocs[1]._id,
        requestId: requestDocs[1]._id,
        rating: 4,
        comment: 'Good service, but could improve'
    });
    reviews.push({
        userId: userDocs[2]._id,
        requestId: requestDocs[2]._id,
        rating: 5,
        comment: 'Excellent service!'
    });

   const reviewIds= await Review.insertMany(reviews);


    await User.updateMany({}, { $set: { reviews: categoryIds.slice(0, 2) } });
    await User.updateOne({ email: 'jane@example.com' }, { $set: { categories: categoryIds.slice(1, 3) } });
    await User.updateOne({ email: 'bob@example.com' }, { $set: { categories: categoryIds.slice(2, 4) } });

    console.log('Seeding complete!');
}

seed().then(() => mongoose.disconnect());