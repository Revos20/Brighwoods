const propertyDatabase = { 
    "land01": {
        title: "Kikopey Plot",
        loc: "Kikopey",
        price: "KES 5,000,000",
        specs: "50*100",
        tags: "FOR SALE",
        images: "images/Kiko1.jpg,images/Kiko2.jpg",
        desc: "Prime 50*100 plot located in Kikopey.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.418608827702!2d36.237319!3d-0.433512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f73752697a829%3A0x7d6a5c2d385f096d!2sKikopey%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000013"
    },
    "mukuru": {
        title: "Mukuru Affordable Housing Project",
        loc: "Enterprise Road, Industrial Area / South B, Nairobi",
        price: "KES 640,000 - 1,280,000",
        specs: "Bedsitter | 1 BR | 2 BR",
        tags: "For Sale,FEATURED",
        images: "images/mukuru.jpeg,images/mukuru2.jpeg,images/mukuru1.jpeg",
        desc: "Strategic housing along Enterprise Road.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.218608827702!2d36.837319!3d-1.333512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111053629e4b%3A0x9560f64c63747f4b!2sEnterprise%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000014"
    },
    "shauri-moyo-small": {
        title: "Shauri Moyo Affordable Housing (Phase A)",
        loc: "Shauri Moyo, Nairobi Central",
        price: "KES 1,200,000 - 1,500,000",
        specs: "Bedsitter | 1 Bedroom",
        tags: "NEW PHASE,AFFORDABLE",
        images: "images/ShauriMoyo.jpeg,images/ShauriMoyo.jpeg,images/shaurimoyo1.jpeg,images/shaurimoyo2.jpeg,images/shaurimoyo3.jpeg",
        desc: "Phase A focuses on studio and 1-bedroom apartments.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.122607412533!2d36.833738!3d-1.289401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f113708f3f88d%3A0x2f94c9657c96350e!2sShauri%20Moyo%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000015"
    },
    "shauri-moyo-large": {
        title: "Shauri Moyo Affordable Housing (Phase B)",
        loc: "Shauri Moyo, Nairobi Central",
        price: "KES 2,000,000 - 2,700,000",
        specs: "2 Bedroom | 3 Bedroom",
        tags: "NEW PHASE,AFFORDABLE",
        images: "images/shaurimoyo3.jpg,images/shaurimoyo1.jpeg,images/shaurimoyo2.jpg",
        desc: "Phase B family-sized units.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.122607412533!2d36.833738!3d-1.289401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f113708f3f88d%3A0x2f94c9657c96350e!2sShauri%20Moyo%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000015"
    },
    "machakos-low": {
        title: "Machakos Town Affordable Apartments",
        loc: "Off Chumvi-Machakos-Kitui Road, Machakos Town",
        price: "KES 2,400,000 - 3,000,000",
        specs: "1 Bedroom | 2 Bedroom",
        tags: "FOR SALE,PRIME",
        images: "images/machakos1.jpeg,images/afford7.jpeg,images/machakos.jpeg,images/machakos1.jpeg,images/machakos2.jpeg",
        desc: "Located near Machakos Teachers’ College.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.122607412533!2d37.263738!3d-1.519401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f09459f0f673d%3A0x296c663f9f3b9e!2sMachakos!5e0!3m2!1sen!2ske!4v1700000000016"
    },
    "machakos-high": {
        title: "Machakos Town Executive 3BR",
        loc: "Off Chumvi-Machakos-Kitui Road, Machakos Town",
        price: "KES 3,600,000",
        specs: "3 Bedroom | Executive Finish",
        tags: "FOR SALE,PRIME",
        images: "images/machakos.jpeg,images/machakos3.jpeg,images/afford7.jpeg",
        desc: "Executive 3-bedroom units for KES 3,600,000.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.122607412533!2d37.263738!3d-1.519401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f09459f0f673d%3A0x296c663f9f3b9e!2sMachakos!5e0!3m2!1sen!2ske!4v1700000000016"
    },
    "tena-estate": {
        title: "Tena Estate Plot",
        loc: "Manyanja Rd, Nairobi",
        price: "KES 22,000,000",
        specs: "Residential Plot | Ready for Development",
        tags: "FEATURED,FOR SALE",
        images: "images/tena1.jpg,images/tena2.jpg,images/tena3.jpg,images/tena4.jpg,images/tena5.jpg,images/tena6.jpg",
        desc: "A prime residential plot located in Tena Estate on Manyanja Road.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.122607412533!2d36.893738!3d-1.289401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13bc891176b7%3A0xb69018e69e3240e3!2sManyanja%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000017"
    },
    "tasia-1": {
        title: "Tasia 1 - 1/4 Acre Plot",
        loc: "Outering Rd, Fedha, Nairobi",
        price: "KES 75,000,000",
        specs: "1/4 Acre | Commercial Plot",
        tags: "FOR SALE",
        images: "images/tasia1.jpg,images/tasia2.jpg,images/tasia3.jpg,images/tasia4.jpg,images/tasia5.jpg,images/tasia6.jpg",
        desc: "Strategic commercial plot along Outering Road.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.122607412533!2d36.903738!3d-1.309401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f130e691176b7%3A0xb69018e69e3240e3!2sFedha%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000018"
    },
    "gratewall-apts": {
        title: "Gratewall Apartments & Shops",
        loc: "Utawala, Nairobi",
        price: "Price on Call",
        specs: "9 Units (3BR) | 1 Penthouse (4BR) | 10 Shops",
        tags: "PRIME,FOR SALE",
        images: "images/gratewall1.jpg,images/gratewall2.jpg",
        desc: "Mixed-use development in Utawala.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.122607412533!2d36.953738!3d-1.289401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13e7091176b7%3A0xb69018e69e3240e3!2sUtawala%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000019"
    },
    "keza-riruta": {
        title: "Keza Riruta Urban Oasis",
        loc: "Riruta, Nairobi",
        price: "Price on Call",
        specs: "Gym | Pool | Modern Finishes",
        tags: "LUXURY,FOR SALE",
        images: "images/kezavid.mp4,images/Keza1.jpeg,images/Keza2.jpeg,images/Keza3.jpeg",
        desc: "Modern apartment complex offering luxurious living with gym and swimming pool.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.218608827702!2d36.737319!3d-1.283512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bc20d367f05%3A0x33c7c2505504245!2sRiruta%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000020"
    },
    "land02": {
        title: "Enkasiti 1 Residential",
        loc: "Enkasiti",
        price: "KES 4,000,000",
        specs: "0.25 Acres | Residential",
        tags: "FOR SALE",
        images: "images/Enka1.1.jpg",
        desc: "A quarter-acre residential plot in the serene Enkasiti area, perfect for immediate development.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.218608827702!2d36.937319!3d-1.433512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f73752697a829%3A0x7d6a5c2d385f096d!2sEnkasiti%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000021"
    },
    "land03": {
        title: "Enkasiti 2 Next to Residential",
        loc: "Enkasiti",
        price: "KES 4,000,000",
        specs: "0.25 Acres | Residential",
        tags: "FOR SALE",
        images: "images/Enka2.1.jpg",
        desc: "Strategic quarter-acre plot located right next to established residential homes in Enkasiti.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.218608827702!2d36.937319!3d-1.433512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f73752697a829%3A0x7d6a5c2d385f096d!2sEnkasiti%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000021"
    },
    "land04": {
        title: "Maanzoni Land (Behind Looqman)",
        loc: "Maanzoni",
        price: "KES 7.5M / Acre",
        specs: "5 Acres | 2nd Row",
        tags: "FOR SALE",
        images: "images/Luq1.jpg",
        desc: "Massive 5-acre block in Maanzoni, located on the second row behind Looqman. Ideal for sub-division or ranching.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.642813575302!2d37.067426!3d-1.513233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f099684346e27%3A0x296c663f9f3b9e!2sMaanzoni%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000022"
    },
    "land05": {
        title: "Maanzoni Wildlife Estate",
        loc: "Maanzoni",
        price: "KES 8M / Acre",
        specs: "2.5 Acres | 5th Row",
        tags: "WILDLIFE ESTATE",
        images: "images/Wild1.jpg",
        desc: "Exclusive land within the Maanzoni Wildlife area. 2.5 acres of pristine environment on the 5th row.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.642813575302!2d37.067426!3d-1.513233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f099684346e27%3A0x296c663f9f3b9e!2sMaanzoni%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000022"
    },
    "land06": {
        title: "Upperhill Commercial Land",
        loc: "Mbagathi Road, Nairobi",
        price: "KES 310,000,000",
        specs: "Commercial | Near KNH",
        tags: "PRIME INVESTMENT",
        images: "images/Upper1.jpg",
        desc: "High-value commercial land in Upperhill near Kenyatta National Hospital, ideal for large-scale development.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.24773899479!2d36.784400!3d-1.288921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109be3f2a893%3A0x6331a9829281a67!2sUpper%20Hill%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000023"
    },
    "land07": {
        title: "Industrial Area Hectare",
        loc: "Industrial Area, Nairobi",
        price: "KES 80,000,000",
        specs: "1 Hectare | Near Container Depot",
        tags: "INDUSTRIAL",
        images: "images/indus1.jpg",
        desc: "Strategically located 1-hectare land in Industrial Area near the Inland Container Depot (ICD). Perfect for godowns or logistics.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.218608827702!2d36.837319!3d-1.333512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111053629e4b%3A0x9560f64c63747f4b!2sIndustrial%20Area%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000024"
    },
};
