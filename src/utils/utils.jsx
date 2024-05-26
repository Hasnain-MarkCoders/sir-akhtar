import twitter from "./../assets/images/twitter.png";
import facebook from "./../assets/images/facebook.png";
import pinterest from "./../assets/images/pinterest.png";
import instagram from "./../assets/images/instagram.png";
import darktwitter from "./../assets/images/darktwitter.png";
import darkfacebook from "./../assets/images/darkfacebook.png";
import darkpinterest from "./../assets/images/darkpinterest.png";
import darkinstagram from "./../assets/images/darkinstagram.png";
import phone from "./../assets/images/phone.png";
import envelope from "./../assets/images/envelope.png";
import marker from "./../assets/images/marker.png";
import cart from "./../assets/images/cart.png";
import user from "./../assets/images/userdark.png";
import authenticatedUser from "./../assets/images/authenticatedUser.png";
import search from "./../assets/images/search.png";
import greenPhone from "./../assets/images/greenPhone.png";
import mail from "./../assets/images/mail.png";
import greenMarker from "./../assets/images/greenMarker.png";
import goldenVeggies from "./../assets/images/goldenVeggies.png";
import goldenApparatus from "./../assets/images/goldenApparatus.png";
import goldenCheck from "./../assets/images/goldenCheck.png";
import onion from "./../assets/images/onion.png";
import carrot from "./../assets/images/carrot.png";
import tomato from "./../assets/images/tomato.png";
import redGrapes from "./../assets/images/redGrapes.png";
import garlic from "./../assets/images/garlic.png";
import lettuce from "./../assets/images/lettuce.png";
import orangeVeggiesCard from "./../assets/images/orangeVeggiesCard.png";
import greenVeggiesCard from "./../assets/images/greenVeggiesCard.png";
import wheat from "./../assets/images/wheat.png";
import freshVeggies from "./../assets/images/freshVeggies.png";
import dsAtom from "./../assets/images/dsatom.jpg";
import techcard1 from "./../assets/images/techcard1.jpg";
import techcard2 from "./../assets/images/techcard2.jpg";
import dsnotes from "./../assets/images/dsnotes.jpg";
import dsAccounting from "./../assets/images/dsaccounting.jpg";
import dsMaths from "./../assets/images/dsMaths.jpg";
import logout from "./../assets/images/logout.png";


import honey from "./../assets/images/honey.png";
import honeyIcon from "./../assets/images/honeyIcon.png";
import wheatIcon from "./../assets/images/wheatIcon.png";
import veggiesIcon from "./../assets/images/veggiesIcon.png";
import apples from "./../assets/images/apples.png"
import projectsCow from "./../assets/images/projectsCow.png"
import projectsStrawberry from "./../assets/images/projectsStrawberry.png"
import projectsFarmer1 from "./../assets/images/projectsFarmer1.png"
import projectsFarmer2 from "./../assets/images/projectsFarmer2.png"
import projectsEasyHarvesting from "./../assets/images/projectsEasyHarvesting.png"
import projectsHealthyFood from "./../assets/images/projectsHealthyFood.png"
import winterFarmingNews from "./../assets/images/winterFarmingNews.png";
import family2News from "./../assets/images/family2News.png";
import wheatingNews from "./../assets/images/wheatingNews.png";
import berriesNews from "./../assets/images/berriesNews.png";
import familyNews from "./../assets/images/familyNews.png";
import bayHaleNews from "./../assets/images/bayHaleNews.png";
import Joi from "joi";
export const socialMediaHandles = [
  {
    src: twitter,
    alt: "social media handle twitter",
    link: "https://www.twitter.com/agrios",
  },
  {
    src: facebook,
    alt: "social media handle facebook",
    link: "https://www.facebook.com/agrios",
  },
  {
    src: pinterest,
    alt: "social media handle pinterest",
    link: "https://www.pinterest.com/agrios",
  },
  {
    src: instagram,
    alt: "social media handle instagram",
    link: "https://www.instagram.com/agrios",
  },
];

export const darkSocialMediaHandles = [
  {
    src: darktwitter,
    alt: "social media handle twitter",
    link: "https://www.twitter.com/agrios",
  },
  {
    src: darkfacebook,
    alt: "social media handle facebook",
    link: "https://www.facebook.com/agrios",
  },
  {
    src: darkpinterest,
    alt: "social media handle pinterest",
    link: "https://www.pinterest.com/agrios",
  },
  {
    src: darkinstagram,
    alt: "social media handle instagram",
    link: "https://www.instagram.com/agrios",
  },
];
export const AboutLinks = [
  {
    name: "Agriculture Products",
    link: "/shop",
  },
  {
    name: "Projects Completed",
    link: "/projects",
  },
  {
    name: "Satisfied Clients",
    link: "/services",
  },
  {
    name: "Experts Farmers",
    link: "/farmers",
  }];

export const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Resources",
    link: "/resources",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Trainging",
    link: "/trainging",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const newsData = [
  {
    news: "Bringing Food Production Back To Cities",
    date: "July 5, 2022",
  },
  {
    news: "The Future of Farming,Smart Irrigation Solutions",
    date: "July 5, 2022",
  },
];

export const contactData = [
  { text: "0332 3024804", src: phone },
  { text: "akhter@fuuast.edu.pk", src: envelope },
  { text: "MSC Block, Block No. 9, Gulshan-e-Iqbal, Main University Road", src: marker },
];
export const tabsArray = [
  { tabName: "Home", link: "/" },
  { tabName: "About", link: "/about" },
  { tabName: "Resources", link: "/resources" },
  { tabName: "Courses", link: "/courses" },
  { tabName: "Training", link: "/training" },
  // { tabName: "Shop", link: "/shop" },
  // { tabName: "Contact", link: "/contact" },
];

export const headerIcons = [
  {
    icon: <img src={search}></img>,
    id:"search",
    condition: (auth) => true
  },
  {
    icon: <img style={{width:"32px"}} src={user}></img>,
    id:"unauthenticated",
    condition: (auth) => !auth.authenticated
  },
  {
    icon: <img style={{width:"32px"}} src={authenticatedUser}></img>,
    id:"authenticated",
    condition: (auth) => auth.authenticated
  },
  {
    icon: <img style={{width:"32px"}} src={logout}></img>,
    id:"logout",
    condition: (auth) => auth.authenticated
  }
];

export const headerIconsConditionallyRender =(auth)=> headerIcons.filter(item=>item.condition(auth))
export const contactHeaderData = [
  {
    src: greenPhone,
    alt:"Call anytime",
    title:"+ 98 (000) - 9630",
    subTitle:"Call anytime",
  },
  {
    src: mail,
    alt:"Send email",
    title:"ambed@agrios.com",
    subTitle:"Send email",
  },
  {
    src: greenMarker,
    alt:"Melbourne, Australia",
    title:"Melbourne, Australia",
    subTitle:"380 St Kilda Road",
  },
];

export const featureCardData = [
  {
    title:"Data Science",
    heading:"Insights",
    src:dsAccounting,
    iconSrc:wheatIcon
  },
  {
    title:"Numerial Computing",
    heading:"Algorithms",
    src:dsnotes,
    iconSrc:veggiesIcon
  },
  {
    title:"Business Stats",
    heading:"Analytics",
    src:dsMaths,
    iconSrc:honeyIcon
  }
]
export const featuresIconHadings = [
  {
    heading:"Growing fruits vegetables",
    src:goldenVeggies
  },
  {
    heading:"Tips for ripening your fruits",
    src:goldenApparatus
  }
]

export const featureCheckList = [
  {
    text:"Watering System Functional: Ready for Crop Irrigation.",
    src:goldenCheck
  },
  {
    text:"Watering System Checked: Operational for Plant Hydration.",
    src:goldenCheck
  }
]
export const products = [
  {
    id: "b5c62b61-0fd4-4d6a-aed9-8329cfc06d3e",
    src: onion,
    name: "Onion",
    price: "20.00",
    rating: 3
  },
  {
    id: "b7d2c31e-9a4f-4cf4-b244-f8bf75b5d079",
    src: carrot,
    name: "Carrot",
    price: "50.00",
    rating: 5
  },
  {
    id: "c5cb20d4-6db2-4c76-bb53-b2a5d58c7a0f",
    src: tomato,
    name: "Tomato",
    price: "50.00",
    rating: 3
  },
  {
    id: "a1c441e0-03f1-47ac-96ab-60b067a0144c",
    src: redGrapes,
    name: "Red Grapes",
    price: "100.00",
    rating: 5
  },
  {
    id: "e4f91e94-fa89-4eb4-9b05-695ed9e518b4",
    src: garlic,
    name: "Garlic",
    price: "20.00",
    rating: 4
  },
  {
    id: "d65bcdd0-768e-4be6-888f-d7e75727c37d",
    src: lettuce,
    name: "Lettuce",
    price: "30.00",
    rating: 3
  }
];



export const healthyCards = [
  {
    src:techcard1,
    title:"Discovery",
    heading:"Uncovering insights and patterns"
  },
  {
    src:techcard2,
    title:"Innovation",
    heading:" Driving progress through analysis"
  }
]
export const servicesProductCategoriesArray =  [
  {
    link:"/",
    tab:"Agriculture Products"
  },
  {
    link:"/",
    tab:"Organic Products"
  },
  {
    link:"/",
    tab:"Fresh Vegetables"
  },
  {
    link:"/",
    tab:"Dairy Products"
  },
  {
    link:"/",
    tab:"Harvest"
  }
]

export const servicesAgriculturalProductText =[
  { text: "Agricultural products, the fruits of labor from farms worldwide, are diverse and essential. From staple crops like wheat, rice, and corn to an array of fruits, vegetables, and livestock, they sustain global food systems. These products not only provide sustenance but also serve as raw materials for various industries. Reflecting diverse climates and farming practices, agricultural products play a crucial role in nourishing populations and driving economies across the globe." },
  { text: "Additionally, agricultural products contribute to cultural identities and traditions, with each region boasting its specialties and culinary delights. These goods, from artisanal cheeses to exotic spices, offer a glimpse into the rich tapestry of global agriculture. As consumers become increasingly conscious of sustainability and food origins, the importance of diverse, locally sourced agricultural products continues to grow, shaping the future of farming and culinary experiences worldwide." }
];

export const serviceCarousel=[
  {
    title:"Honey Production",
    desc:"Honeybees gather nectar from flowers and convert it into honey, a natural sweetener rich in antioxidants and antibacterial properties.",
    src:honey
  },
  {
    title:"Farm-Fresh Veggies",
    desc:"Our fresh veggies are sourced directly from local farms, ensuring maximum freshness and nutritional value for our customers.",
    src:freshVeggies
  },
  {
    title:"Quality Wheat Products",
    desc:"We use high-quality wheat grains harvested from trusted farms to provide wholesome and nutritious products to our customers.",
    src:wheat
  },
  {
    title:"Premium Apple Selection",
    desc:"Our apples are carefully selected from orchards known for their premium quality and taste, offering a crisp and delightful snacking experience.",
    src:apples
  },
]


export const serviceAccordian=[
  {
    title:"World’s hottest destinations for vegans",
    desc:"Honeybees gather nectar from flowers and convert it into honey, a natural sweetener rich in antioxidants and antibacterial properties.",
  },
  {
    title:"Let’s grow naturaly and live naturaly",
    desc:"Our fresh veggies are sourced directly from local farms, ensuring maximum freshness and nutritional value for our customers.",
  },
  {
    title:"Best vegetables for your healthy hair",
    desc:"We use high-quality wheat grains harvested from trusted farms to provide wholesome and nutritious products to our customers.",
  }
]

export const projectCard=[
  {
    title:"Services:",
    desc:"Healthy Food",
  },
  {
    title:"Farmer:",
    desc:"Mike Hardson",
  },
  {
    title:"Duration:",
    desc:"4.5 Months",
  },
  {
    title:"Location:",
    desc:"Broklyn, New Your",
  }
]

export const ProjectsCarousel=[
  {
    title:"Agriculture ",
    desc:"Farming",
    src:projectsCow
  },
  {
    title:"Ecological",
    desc:"Farming",
    src:projectsStrawberry
  },
  {
    title:"Organic",
    desc:"Solutions",
    src:projectsFarmer1
  },
  {
    title:"Fresh",
    desc:"Products",
    src:projectsFarmer2
  },
  {
    title:"Healthy",
    desc:"Food",
    src:projectsHealthyFood
  },
  {
    title:"Easy",
    desc:"Harvesting",
    src:projectsEasyHarvesting
  },
]

export const NewsCards=[
  {
    "name": "Michael",
    "text": "Organic Farming Promotes Healthier Food Choices.",
    "count": 27,
    "src": winterFarmingNews,
    "date": "15 March 2024",
    "newsId": 1,
    "tags": ["Organic", "Farming", "Healthier", "Choices", "Food"],
    "desc": [
      {
        "desc": "Organic farming promotes healthier food choices by cultivating produce free from harmful chemicals and pesticides, ensuring a safer and more nutritious diet for consumers. This method emphasizes soil health, biodiversity, and ecological balance, contributing to a sustainable food system. Moreover, organic farming supports local economies and fosters community connections by prioritizing direct relationships between farmers and consumers. By choosing organic products, individuals can contribute to environmental conservation efforts and support farming practices that promote the well-being of both people and the planet."
      },
      {
        "desc": "In addition to benefiting personal health, organic farming practices contribute to environmental sustainability by preserving soil fertility and minimizing pollution, thus safeguarding the planet for future generations. These practices also mitigate climate change by sequestering carbon in the soil and reducing greenhouse gas emissions associated with conventional agriculture. Furthermore, organic farming fosters biodiversity by providing habitat for beneficial insects, birds, and other wildlife, enhancing ecosystem resilience. By embracing organic agriculture, communities can build resilience to environmental challenges and promote a more equitable and regenerative food system."
      },
      {
        "desc": "Furthermore, embracing organic farming fosters community resilience and strengthens local economies by supporting small-scale farmers and promoting sustainable agricultural practices. Organic farms often serve as educational hubs, offering workshops, tours, and farm-to-table experiences that connect consumers with the source of their food. Additionally, organic agriculture encourages innovation and adaptation, as farmers develop techniques suited to their specific climates and ecosystems. By investing in organic farming, communities can create vibrant agricultural landscapes that provide nutritious food, economic opportunities, and cultural enrichment for generations to come."
      }
    ]
  },
  {
    "name": "Sarah",
    "text": "Sustainable Agriculture Ensures Future Food Security.",
    "count": 35,
    "src": family2News,
    "date": "20 March 2024",
    "newsId": 2,
    "tags": ["Sustainable", "Security", "Future", "Agriculture", "Ensures"],
    "desc": [
      {
        "desc": "Sustainable agriculture plays a crucial role in ensuring future food security by fostering resilient farming practices and prioritizing environmental conservation. By promoting soil health, water conservation, and biodiversity, sustainable agriculture enhances the resilience of food systems to climate change and other environmental stresses. Moreover, sustainable farming practices reduce the reliance on chemical inputs and synthetic fertilizers, minimizing environmental pollution and preserving ecosystem integrity. Through agroecological approaches such as crop rotation, cover cropping, and integrated pest management, sustainable agriculture promotes natural resource conservation and supports the long-term viability of farming communities."
      },
      {
        "desc": "Moreover, sustainable agriculture empowers local communities and mitigates the effects of climate change by promoting biodiversity and reducing carbon emissions. By integrating agroforestry, agroecology, and other regenerative practices, sustainable agriculture sequesters carbon in soils and biomass, contributing to climate change mitigation efforts. Additionally, sustainable agriculture enhances food security by diversifying production systems, increasing resilience to pests, diseases, and extreme weather events. By prioritizing social equity, environmental stewardship, and economic viability, sustainable agriculture creates opportunities for farmers to thrive while safeguarding natural resources for future generations."
      },
      {
        "desc": "Additionally, sustainable agriculture strengthens global food systems by emphasizing equitable access to nutritious food and promoting fair labor practices throughout the supply chain. By fostering collaboration between farmers, researchers, policymakers, and consumers, sustainable agriculture builds networks of support and knowledge-sharing. Furthermore, sustainable agriculture promotes food sovereignty and self-reliance, empowering communities to control their food systems and prioritize local needs. By investing in sustainable agriculture, societies can address the interconnected challenges of food security, environmental sustainability, and social justice, ensuring a more resilient and equitable future for all."
      }
    ]
  },
  {
    "name": "Matthew",
    "text": "Farm-to-Table Movement Supports Local Farmers.",
    "count": 42,
    "src": wheatingNews,
    "date": "25 March 2024",
    "newsId": 3,
    "tags": ["Farm-to-Table", "Supports", "Local", "Movement", "Farmers"],
    "desc": [
      {
        "desc": "The farm-to-table movement champions local farmers and promotes sustainable agriculture by connecting consumers with fresh, locally sourced produce. By shortening supply chains and reducing food miles, the farm-to-table movement minimizes environmental impact and supports the economic viability of small-scale agriculture. Moreover, the farm-to-table ethos prioritizes seasonality, flavor, and nutrition, encouraging consumers to appreciate the diversity of local food systems. By fostering direct relationships between farmers and consumers, the farm-to-table movement enhances transparency and trust in the food system, empowering individuals to make informed choices about their food."
      },
      {
        "desc": "Furthermore, embracing the farm-to-table ethos fosters a deeper appreciation for food origins and strengthens community bonds through shared culinary experiences. By engaging in farm visits, cooking classes, and community meals, consumers gain a deeper understanding of the food production process and its social, cultural, and environmental implications. Additionally, the farm-to-table movement celebrates local food traditions and heritage, preserving culinary diversity and promoting cultural exchange. By supporting local farmers and food artisans, communities can create resilient and inclusive food systems that nourish body, mind, and spirit."
      },
      {
        "desc": "Additionally, the farm-to-table movement stimulates economic growth and enhances food security by reducing reliance on global supply chains and supporting regional food networks. By investing in local food infrastructure, such as farmers markets, community-supported agriculture (CSA) programs, and food hubs, communities can create opportunities for entrepreneurship and job creation. Furthermore, by valuing the true cost of food and supporting fair pricing practices, the farm-to-table movement ensures that farmers receive a fair share of the value they produce, contributing to rural prosperity and social equity."
      }
    ]
  },
  {
    "name": "Rebecca",
    "text": "Organic Produce Offers Fresher, Tastier Options.",
    "count": 23,
    "src": berriesNews,
    "date": "01 April 2024",
    "newsId": 4,
    "tags": ["Organic", "Produce", "Fresher", "Tastier", "Options"],
    "desc": [
      {
        "desc": "Opting for organic produce ensures fresher and tastier options while supporting environmentally friendly farming practices that prioritize soil health and biodiversity. Organic farming prohibits the use of synthetic pesticides and fertilizers, reducing chemical residues in food and minimizing environmental pollution. Moreover, organic farming methods enhance soil fertility and water retention, improving the overall health of agricultural ecosystems. By choosing organic products, consumers can enjoy delicious and nutritious foods while contributing to a more sustainable and resilient food system."
      },
      {
        "desc": "Moreover, organic farming reduces the risk of harmful chemical exposure and fosters a healthier environment for both consumers and agricultural workers. By avoiding the use of synthetic chemicals, organic farmers protect the health and safety of farm workers, neighboring communities, and ecosystems. Additionally, organic farming practices promote animal welfare and biodiversity conservation, ensuring a balanced and ecologically sound approach to food production. By supporting organic agriculture, consumers can promote environmental sustainability, human health, and social justice."
      },
      {
        "desc": "Additionally, embracing organic produce promotes animal welfare and reduces the ecological footprint of food production, contributing to a more sustainable and ethical food system. Organic farming prioritizes animal welfare by providing access to outdoor areas, natural diets, and humane treatment for livestock. Furthermore, organic farming practices reduce greenhouse gas emissions, conserve water resources, and protect biodiversity, mitigating the environmental impacts of food production. By choosing organic products, consumers can support farming methods that prioritize the well-being of animals, people, and the planet."
      }
    ]
  },
  {
    "name": "John",
    "text": "Community Gardens Foster Neighborhood Unity and Health.",
    "count": 29,
    "src": familyNews,
    "date": "05 April 2024",
    "newsId": 5,
    "tags": ["Community", "Unity", "Health", "Gardens", "Neighborhood"],
    "desc": [
      {
        "desc": "Community gardens serve as vibrant hubs for fostering neighborhood unity and promoting physical and mental well-being through shared gardening activities. By providing access to green spaces, fresh produce, and social connections, community gardens enhance quality of life and strengthen social cohesion. Moreover, community gardens empower residents to take control of their food supply, learn new skills, and engage in physical activity, contributing to healthier and more resilient communities."
      },
      {
        "desc": "Furthermore, community gardens contribute to environmental sustainability by enhancing urban green spaces and promoting biodiversity conservation. By creating habitats for pollinators, birds, and beneficial insects, community gardens support local ecosystems and improve air and water quality. Additionally, community gardens reduce urban heat islands, mitigate stormwater runoff, and provide natural spaces for recreation and relaxation. By greening vacant lots and abandoned spaces, community gardens beautify neighborhoods and enhance overall urban livability."
      },
      {
        "desc": "Additionally, community gardens empower residents to cultivate connections with nature, build community resilience, and address local food security challenges collaboratively. Through collective action and shared stewardship, community gardens foster a sense of ownership and pride in local landscapes. Furthermore, community gardens provide opportunities for intergenerational learning, cultural exchange, and civic engagement, strengthening social bonds and fostering a sense of belonging. By supporting community gardens, cities can promote social equity, public health, and environmental sustainability."
      }
    ]
  },
  {
    "name": "Elizabeth",
    "text": "Supporting Farmers Markets Boosts Local Economies.",
    "count": 38,
    "src": bayHaleNews,
    "date": "10 April 2024",
    "newsId": 6,
    "tags": ["Farmers", "Economies", "Supporting", "Markets", "Boosts"],
    "desc": [
      {
        "desc": "Supporting farmers markets stimulates local economies and fosters community connections by promoting direct transactions between consumers and local food producers. By providing a platform for small-scale farmers, artisans, and food entrepreneurs, farmers markets create opportunities for economic empowerment and entrepreneurship. Moreover, farmers markets encourage consumer education, culinary exploration, and cultural exchange, enriching the fabric of local communities."
      },
      {
        "desc": "Moreover, farmers markets enhance food security and reduce environmental impact by offering fresh, seasonal produce and minimizing reliance on long-distance food transportation. By shortening supply chains and supporting regional food systems, farmers markets reduce carbon emissions, conserve energy, and preserve natural resources. Additionally, farmers markets provide access to nutritious foods, including fruits, vegetables, meats, and dairy products, contributing to healthier diets and improved public health outcomes."
      },
      {
        "desc": "Additionally, embracing farmers markets cultivates a sense of place and celebrates local food culture, enriching communities and strengthening ties between producers and consumers. Farmers markets serve as social hubs, gathering places, and cultural landmarks, fostering a sense of belonging and pride in local identity. Furthermore, farmers markets support cultural diversity and culinary traditions, showcasing the rich tapestry of food cultures within a community. By supporting farmers markets, consumers can invest in vibrant local economies, vibrant communities, and a sustainable future."
      }
    ]
  }
]
export const DetailedNewsFactCard = [
  {
    text:"Agronomy and relation to Other Sciences"
  },
  {
    text:"Bringing Food Production Back To Cities"
  }
] 

export const manageContent = [
  {
    title:"Add Video",
    link:"/admin/add-video"
  },
  {
    title:"Manage Category",
    link:"/admin/manage-content"
  }
] 
const localFormData = JSON.parse(window?.localStorage?.getItem("commentFormData"))
export const newsInputs = [
  {
    placeholder:"Full Name",
    name:"name",
    defaultValue:localFormData?.name??""
  },
  {
    placeholder:"Email Address",
    name:"email",
    defaultValue:localFormData?.email??""

  },
] 


// good functions

export const pxToRem = (px) => {
  const baseFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return `{(px / baseFontSize).toFixed(2)}rem`;
  
};

const filterData = (data, value, field)=>{
  const filteredData = data.filter(item[field]===data[field])
  return filterData.length<1?[]:filteredData
}
export const joiSignUpSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
    username:Joi.string()
    .required(),
  password: Joi.string()
    .required()
    .pattern(
      new RegExp(
        '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}":;<>,.?~\\-]).{8,}$'
      )
    )
    .messages({
      "string.pattern.base":
        "Password must contain at least 1 upper case, 1 number, 1 special character, and atmost 8 characters long.",
    }),
});

export const joiPasswordSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .required()
    .pattern(
      new RegExp(
        '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}":;<>,.?~\\-]).{8,}$'
      )
    )
    .messages({
      "string.pattern.base":
        "Password must contain at least 1 upper case, 1 number, 1 special character, and atmost 8 characters long.",
    }),
});
export const joivalidatePassword = (details={}, state=()=>{}) => {
  const { error } = joiPasswordSchema.validate(details, { abortEarly: false });
  if (!error) return true;
  const newErrors = error.details.reduce(
    (acc, detail) => ({
      ...acc,
      [detail.path[0]]: detail.message.replace(/"/g, ""),
    }),
    {}
  );
  state(newErrors);
  return false;
}; 

export const joiValidateSignUp = (details={}, state=()=>{}) => {
  const { error } = joiSignUpSchema.validate(details, { abortEarly: false });
  if (!error) return true;
  const newErrors = error.details.reduce(
    (acc, detail) => ({
      ...acc,
      [detail.path[0]]: detail.message.replace(/"/g, ""),
    }),
    {}
  );
  state(newErrors);
  return false;
}; 

export const ValidateEmptyFields = (data={},state=()=>{} ) => {
  if (Object.keys(data).find((detail) => !data[detail])) {
    return state(true);
  }
  return state(false);
};