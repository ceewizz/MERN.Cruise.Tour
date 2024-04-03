const db = require('./connection');
const { User, Product, Category } = require('../models');
import smallfamImage from ('../client/images/family4.png');
 
db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Family' },
        { name: 'Group' },
        { name: 'Solo' },
        { name: 'Partner'}
    
    ]);
    console.log('categories seeded');

    await Product.deleteMany();
   
    const products = await Product.insertMany([
        {
            name: 'Family Package 4 days Baja Mexico',
            category: categories[0]._id,
            description: 'This package is a family package is for a Family of 4 for 4 days cruise starting from  Long beach > Catalina > Ensenada > Back to Long Beach. Prices includes a 2 room 2 person(s) per room, one free Buffet per family of 4 is included. On board activities included: Waterworks, Swimming Pool movie cinema. Additional cost activities: Spa, Clubs, Casino.',
            image: <img src={smallfamImage} style={{ width: "auto"}} alt="fam4"/>,
            price: 1000.00,
            quantity: 20
        },
        {
            name: 'Family Package 7 days Europe',
            category: categories[0]._id,
            description: 'Destination sailing starts from Lisbon > La Coruna > Bilbao > Le Verdon > Paris > London.  Price includes a 2 rooms 2 person(s) per room. 3 free dinner buffet ticket per person for a family of 4,  On board activities included: Waterworks, Swimming Pool movie cinema. Additional cost activities: Spa, Clubs, Casino.',
            image: 'about.png',
            price: 4000.00,
            quantity: 20

        },
        {
            name: 'Group Package 7 Days Europe',
            category: categories[1]._id,
            description: 'Price shown are for groups of Maximum 4 Person(s). Note: For 3 Person(s) we commend the Partner + Solo Package. For 2 Person(s) we recommend the Partner Package. Destination sailing starts from Lisbon > La Coruna > Bilbao > Le Verdon > Paris > London.  Price includes a 2 rooms 2 person(s) per room if you are in a group of odd numbers then one person will have to share a room with another random traveler. 3 free dinner buffet tickets per person,  On board activities included: Waterworks, Swimming Pool movie cinema. Additional cost activities: Spa, Clubs, Casino.',
            image: 'group7.png',
            price: 4000.00,
            quantity: 20

        },
        {
            name: 'Group Package 4 days Baja Mexico',
            category: categories[1]._id,
            description: 'Destination sailing starts from Long beach.  Note: For 3 Person(s) we commend the Partner + Solo Package. For 2 Person(s) we recommend the Partner Package.  Price includes a 2 rooms 2 person(s) per room if you are in a group of odd numbers then one person will have to share a room with another random traveler. 1 free dinner buffet tickets per person,  On board activities included: Waterworks, Swimming Pool movie cinema. Additional cost activities: Spa, Clubs, Casino.',
            image: 'group4.png',
            price: 1000.00,
            quantity: 20
        },
        {
            name: 'Solo Package 4 days Baja Mexico',
            category: categories[2]._id,
            description: 'This package is a solo package is for 4 days cruise starting from  Long beach > Catalina > Ensenada > Back to Long Beach. Prices includes a 2 room 2 person(s) per room. Note: if travel alone you will be pair up with a random traveler per room. one free Buffet per person. On board activities included: Waterworks, Swimming Pool movie cinema. Additional cost activities: Spa, Clubs, Casino.',
            image: 'solo4.png',
            price: 250.00,
            quantity: 40  
        },
        {
            name: 'Solo Package 7 Days Europe',
            category: categories[2]._id,
            description: 'Price shown are Individual Ticket. Destination sailing starts from Lisbon > La Coruna > Bilbao > Le Verdon > Paris > London.  Price includes a 2 rooms 2 person(s) per room.  Note: if travel alone you will be pair up with a random traveler per room. 3 free Buffet per person. On board activities included: Waterworks, Swimming Pool movie cinema. Additional cost activities: Spa, Clubs, Casino.',
            image: 'solo7.png',
            price: 1000.00,
            quantity: 40   
        },
        {
            name: 'Partner Package 7 Days Europe',
            category: categories[3]._id,
            description: 'Price shown are for Couple or 2 People Ticket. Destination sailing starts from Lisbon > La Coruna > Bilbao > Le Verdon > Paris > London.  Price includes a 2 rooms 2 person(s) per room.  Note: if travel alone you will be pair up with a random traveler per room. 3 free Buffet per person. On board activities included: Waterworks, Swimming Pool movie cinema. Additional cost activities: Spa, Clubs, Casino.',
            image: 'partner7.png',
            price: 2000.00,
            quantity: 40   
        },
        {
            name: 'Partner Package 4 Days Baja Mexico',
            category: categories[3]._id,
            description: 'This package is a Partner Couple 2 People Tickets for 4 days cruise starting from  Long beach > Catalina > Ensenada > Back to Long Beach. Prices includes a 2 room 2 person(s) per room. Note: if travel alone you will be pair up with a random traveler per room. one free Buffet per person. On board activities included: Waterworks, Swimming Pool movie cinema. Additional cost activities: Spa, Clubs, Casino.',
            image: 'partner4.png',
            price: 500.00,
            quantity: 40   
        },
    ]);
    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Chris',
        lastName: 'Huynh',
        email: 'chris@testmail.com',
        password: 'password12707',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Alpha',
        lastName: 'Al',
        email: 'aalpha@testmail.com',
        password: 'password12707'


    });

    console.log('users seeded');

    process.exit();
            
        
    });