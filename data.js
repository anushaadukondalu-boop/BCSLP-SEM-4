/* ===============================
   EDUSTREAMIX - B.Com Semester 4
   Complete Structured Data File
================================= */

/* ---------- COMMON LANGUAGE SUBJECTS ---------- */

const commonLanguages = [

{
name:"English",
channels:[
{name:"English by Nisa",links:[
"https://www.youtube.com/embed/videoseries?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"
]},
{name:"Sara’s Learning Point",links:[
"https://www.youtube.com/embed/videoseries?list=PLjNdhMBtsxpz5BYkI4eiiYQahD7GroZy0"
]},
{name:"Dandu Venkatramulu",links:[
"https://www.youtube.com/embed/videoseries?list=PLyjVm5GfnmY4rC5wuA6SmhHh0NyVL9TOX"
]},
{name:"Educare",links:[
"https://www.youtube.com/embed/videoseries?list=PLbBCm7TkLCKJvY6pKiQCJctXF4Pq8k7G5"
]},
{name:"PCV English",links:[
"https://www.youtube.com/embed/videoseries?list=PLldWy7gu4R77UUt2vuS2n3pEkb3oHOLot"
]}
]
},

{
name:"Telugu",
channels:[
{name:"Dandu Venkatramulu",links:[
"https://www.youtube.com/embed/videoseries?list=PLyjVm5GfnmY5y3l69NvP0rfdM3PIr1YTn"
]},
{name:"Matrubhasha",links:[
"https://www.youtube.com/embed/videoseries?list=PL7noKDJp4ZRJJaH6RJ4OBogQ1myEbTDUW"
]}
]
},

{
name:"Hindi",
channels:[
{name:"Disha Hindi Classes",links:[
"https://www.youtube.com/embed/videoseries?list=PLsTBUOfP6EhcuFUYcKCOXmNCleQZQxANC"
]}
]
},

{
name:"Sanskrit",
channels:[
{name:"My Teaching Talkies",links:[
"https://www.youtube.com/embed/videoseries?list=PLc1Q__0qOGApo_XRmsLci0RnIznyHUs-Y"
]},
{name:"Dr. Pusapati Ravikantha Reddy",links:[
"https://www.youtube.com/embed/videoseries?list=PLiOV0508aWZuNdSe92CCsP1bYS63RccOc"
]},
{name:"Rajji Madam",links:[
"https://www.youtube.com/embed/videoseries?list=PLkjLwcrXVH1W8rSkT7n6EEzCOrlifoDMU"
]},
{name:"Kammampati Nikhil",links:[
"https://www.youtube.com/embed/videoseries?list=PLJM7CaHL_GN7AXfkXURiDD4_ydFq7Oflj"
]}
]
}

];


/* ---------- CORE SUBJECTS ---------- */

const coreSubjects = [

{
name:"Corporate Accounting",
channels:[
{name:"Hasham Ali Khan",links:[
"https://www.youtube.com/embed/videoseries?list=PLWJDzVuPkXAlXTMbitI-ZDjiAmi7M8Zww"
]},
{name:"Devika’s Commerce (Telugu)",links:[
"https://www.youtube.com/embed/videoseries?list=PL32yVakBnz3KJkri5LmhkNdFuPeTmyWlt"
]},
{name:"Commerce Class Partner",links:[
"https://www.youtube.com/embed/videoseries?list=PLVBb3feu_E7q2eibRidZw1bo1KQ52isDg"
]},
{name:"CWG for B.Com",links:[
"https://www.youtube.com/embed/videoseries?list=PL9Cd7H8NFRQymNGuIkEE-ZD9aNjk9KxWZ"
]}
]
},

{
name:"Business Statistics – 2",
channels:[
{name:"Hasham Ali Khan",links:[
"https://www.youtube.com/embed/videoseries?list=PLWJDzVuPkXAk3twapgb0DQ9MyaQ24V4JS"
]},
{name:"Devika’s Commerce",links:[
"https://www.youtube.com/embed/videoseries?list=PLLhSIFfDZcUUatEzYCA8xH02JR_GlLjMA"
]}
]
},

{
name:"Income Tax",
channels:[
{name:"Devika’s Commerce",links:[
"https://www.youtube.com/embed/videoseries?list=PLP6CJ8yrRpA3_WbjoudHcT10AxY3Tut1B"
]},
{name:"Advanced Aspects - Devika Bhatt",links:[
"https://www.youtube.com/embed/videoseries?list=PL32yVakBnz3JO44C9ZF3fsGOvttZy_-e3"
]},
{name:"Income from House Property",links:[
"https://www.youtube.com/embed/videoseries?list=PL0orXlrJWBR9uKDGy4ImpsoQH772VMsoB"
]},
{name:"Hasham Ali Khan",links:[
"https://www.youtube.com/embed/videoseries?list=PLWJDzVuPkXAkJ5jwa5w815ComHmCzYzwb"
]}
]
},

{
name:"Universal Human Values",
channels:[
{name:"Tegron Learning Hub",links:[
"https://www.youtube.com/embed/PZQCoQdLJmw"
]}
]
},

{
name:"Practice of Life and General Insurance",
channels:[
{name:"Dwivedi Guidance",links:[
"https://www.youtube.com/embed/videoseries?list=PLsh2FvSr3n7cD0F2FSjBVWWrVF6cR8Pla"
]}
]
}

];


/* ---------- GROUP STRUCTURE ---------- */

window.data = {};

data["B.Com General - Semester 4"] =
    commonLanguages.concat(coreSubjects);


data["B.Com Honors - Semester 4"] =
    commonLanguages.concat([
        {
            name:"Human Resource Management",
            channels:[
                {name:"Devika’s Commerce",links:[
                    "https://www.youtube.com/embed/videoseries?list=PLLhSIFfDZcUUelovQsfQHrCg3ZPujMzrh"
                ]},
                {name:"Dwivedi Guidance",links:[
                    "https://www.youtube.com/embed/videoseries?list=PLsh2FvSr3n7f63hhfOBbYwUsUAlvHFDxA"
                ]}
            ]
        }
    ]).concat(coreSubjects);


data["B.Com Computer Applications - Semester 4"] =
    commonLanguages.concat(coreSubjects).concat([
        {
            name:"Web Technologies",
            channels:[
                {name:"Fazil Khan Tutorial",links:[
                    "https://www.youtube.com/embed/videoseries?list=PL0IHN5oTE2R7ekgSTUPkwILoqK7oAoExo"
                ]},
                {name:"Education Point Online",links:[
                    "https://www.youtube.com/embed/videoseries?list=PLg2LVpcRrOF4if66PQvjYK5nIGJamDfhC"
                ]}
            ]
        }
    ]);


data["B.Com Business Analytics - Semester 4"] =
    commonLanguages.concat([
        coreSubjects[2], // Income Tax
        coreSubjects[1], // Business Statistics – 2
        coreSubjects[3], // Universal Human Values
        coreSubjects[4]  // Insurance
    ]);
