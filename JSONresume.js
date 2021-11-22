var resume = {
  "basics": {
    "name": "Tamil Selvan S",
    "email": "tamilselvanyes@gmail.com",
    "phone": "9894891316",
    "degree": "B.E",
    " stream" : "Electrical and Electronics Engineering",
    "address": {
      "street": "14a Sammans Nagar",
      "Town": "Mettur Dam",
      "District": "Salem",
      "Pincode": "636401",
      "Country": "India"
    },
    "Education":[ { 
        "Bachelors": "Coimbatore Institute of Technology",
        "CPGA" : "7.7"},
        {
        "Higher Secondary": "GVHSS",
        "Percentage": "97.6"},
        {
         "Secondary": "GVHSS",
        "Percentage": "96.2" 
        }
    ]
  },
  "work":
    {
      "company": "Hyundai Mobis",
      "position": "Research Engineer",
      "startDate": "02.07.2018",
      "endDate": "13.03.2020",
      "summary": "Worked on Bluetooth Module",
      "highlights":
        "Handled applications such as BT Phone Contacts, BT Music, BT Settings"
    },
  "Accomplishments": 
    {
      "Office": "•	Led the project of Multimedia (Bluetooth) ",
      "College": "•	Vice Chairman , Interface 2k16",
    },
  "Project": 
    {
      "College_Project_1": "•	Microcontroller based Home Security System Using GSM technology",
      "College_Project_2": "•	Elevator control using BLDC Motor suitable for micro grid",
    },
  "languages": [
    {
      "language": "English",
      "fluency_out_of_5": "4"
    },
    {
        "language" : "Tamil",
        "fluency_out_of_5": "5"
    },
    {
        "language" : "Hindi",
        "fluency_out_of_5": "2"
    }
  ],
  "Hobbies": [
    {
      "name": "Playing Cricket",
      "Favourite_Cricket" : "Ricky Ponting"
    },
    {
        "name" : "Reading Books",
        "Favorite_Book" : " How to win friends and Influence People"
    }
  ]
}
console.log(resume.basics.name)
console.log(resume.basics.address.District)
console.log(resume.basics.Education[1].Percentage)
console.log(resume.languages[1].fluency_out_of_5)
console.log(resume.Hobbies[0].name)
