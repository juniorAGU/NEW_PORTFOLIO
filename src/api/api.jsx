export const projects = [
    {
        id: 1,
        title: "KennyStores  An E-commerce Website for Buyers and Sellers",
        description: "This is an online marketplace platform were users can be categorized as Sellers or buyers, here on this platform buyers comes to buy products while sellers sells to buyers just like the normal real market. One of the problems this site solve  is that a Buyer can buy from multiple Sellers and pay at once, and it will be brought to their doorstep without them leaving the comfort of their home. Also this project is a fullstack web application built by me from start to finish, i understood every key feature implemented with my logics, step by step structure. KEY FEATURES: 1) Authentication:: Users can register either as a buyer or seller and they will be taken to their respective routes, and a user can not access a specific routes unless they registered. 2) Authorization:::In this platform buyers buys,sellers sells while admin manages, so all roles is been shared across the platform Sellers cant access buyers routes and buyers cant access admin routes, all roles is been backed by my customized backend (ABAC and RBAC), 3) Backend customized::On this project I customized my own backend with nodejs (Expressjs) and MongoDB for Database, 5) CRUD operations implemented:: Implemented all the necessary CRUD operations like user profile, carts, products,orders, messages, all backend backed,Tools used:::: Frontend( Reactjs,tailwind) Backend ( Nodejs,Expressjs,MongoDB)",
        image: "/kennyskitchen.png",
        info: {label: 'year', value: '2026'}, 
        role: {label: 'role', value: 'Fullstack Developer'},
        links: {text: 'View Project', href: 'https://kenny-stores-market-place.vercel.app/',type: 'primary'},
        repo: {text: 'View on gitHub', href: 'https://github.com/juniorAGU/MarketPlace',type: 'secondary'}
    },
    {
        id: 2,
        title: "Kenny's Kitchen A Restaurant Website where you can order food online",
        description: "An online restaurant platform were users/customers can purchase meals pay and get it delivered to their doorstep my KEY IMPLIMENTATIONS Built Authentication and (Authorisation)Users can make orders without registrations and also users cant access a specific routes which they are not meant to eg Admin routes All backed by firebase backend as service, Cart logic and Persistence: User adds meal to cart with quantity and it stays Persistent overcome page refreshes, Amin routes implementation: On this set admin can view orders from dashboards and confirm payments and ship goods, and also admin can view all orders and all users too and can also assign admin roles, shipment process implemented: Users recieves OTP on their email that's last for 1hr so that if the rider arrives they can confirm the delivery with the otp achieved that with emailjs, cloudinary implementation: When a Sellers adds image of a meal its been saved in cloudinary then the url is returned to be saved in firebase. Tools used::::: This project was built with Reactjs for frontend and tailwind css for components styling and then with firebase as backend as service, handling all my backend and database works,",
        image: "/kennystore.png",
        info: {label: 'year', value: '2025'},  
        role: {label: 'role', value: 'Frontend Developer'},
        links: {text: 'View Project', href: 'https://kennyskitchen-restaurant.vercel.app/',type: 'primary'},
        repo: {text: 'View on gitHub', href: 'https://github.com/juniorAGU/Kennyskitchen-Restaurant',type: 'secondary'}
    },
    {
        id: 3,
        title: "Team Project ",
        description: "Collaboration and architectural fundamentals define this project. As part of a cross-functional 6-member team, we engineered a dynamic application under strict design constraints. Instead of leaning on frameworks, we built the entire user experience from the ground up using pure HTML, CSS, and native JavaScript. This project heavily sharpened my skills in Git workflows, version control, team alignment, and raw programmatic problem solving.",
        image: "/team.png",
        info: {label: 'year', value: '2025'}, 
        role: {label: 'role', value: 'Frontend Developer'},
        links: {text: 'View Project', href: 'https://my-pro3-tawny.vercel.app/',type: 'primary'},
        repo: {text: 'View on gitHub', href: 'https://github.com/CjMatty2000/Frontend-Project',type: 'secondary'}
    },
    {
        id: 4,
        title: "Landing Page (TEAM PROJECT)",
        description: " Co engineered a dynamic, two-sided service marketplace matching clients with skilled local artisans. While leading the implementation of the frontend landing page and user touchpoints, I actively collaborated across the stack, gaining crucial exposure to backend routing and data architecture. This cross functional experience significantly deepened my understanding of end to end web performance and data flows.",
        image: "/artisan.png",
        info: {label: 'year', value: '2026'},  
        role: {label: 'role', value: 'Frontend Developer'},
        links: {text: 'View Project', href: '#',type: 'primary'},
        repo: {text: 'View on gitHub', href: 'https://github.com/naijadebugger/service-connect-nigeria',type: 'secondary'}
    },
    
]