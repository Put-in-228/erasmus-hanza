# ERASMUS HANZA PROJECT
This repo was made by <ins>Jevgenij Čiursin</ins><sup>_LT_</sup>, <ins>Lukas Titlius</ins><sup>_LT_</sup>, <ins>Shah Eiman Amzar Bin Shah Apandi</ins><sup>_DE_</sup>, <ins>Aleksandrs Veļikanovs</ins><sup>_LV_</sup>, <ins>Aleksandr Afanassjev</ins><sup>_EE_</sup>.

## Project task

During **ERASMUS+ BIP** project our task was to create Power BI report templates to show _Hanza_ company's data on TV screens<sup>Power BI report files can be found in [Power BI reports](/Power%20BI%20reports) folder</sup>. 

Secondary objective was to create a web application which visualizes the data as well as has Graphical User Interface elements to navigate through different reports<sup>web application can be found in [hanza-web-app](/hanza-web-app) folder</sup>.

## Power BI reports
Power BI report templates were made using 8 main indicators:
- ***OEE%***
- ***Productivity***
- ***Late hours***
- ***Hours***
- ***Rejection costs***
- ***Safety***
- ***Maitenance***
- ***Undefined interruptions***

### Report for OEE% and Productivity indicators example
![img](/readme-images/OEE%20and%20Productivity.jpg)

Description of the image TBA

### Report for Late hours and Hours indicators example
![img](/readme-images/late%20hours%20and%20hours.jpg)

Description of the image TBA

### Report for Rejection costs, Safety, Maintenence and undefined interruptions
![img](/readme-images/rejection%20costs-safety-maintenence%20and%20undefined%20interruptions.jpg)

Description of the image TBA

## Web application as data visualization solution
To visualize data on TV screens we chose to create _web application_ with embedded _Power BI reports_. Examples on how it looks like can be seen below.

![img](/readme-images/web%20app%20example.jpg)

In an image above you can see how our _web application_ looks like. 

On the left of the screen we have navigational sidebar which lets us navigate through different kinds of departments and access the reports of that department accordingly.

In the middle of the screen we have embedded _Power BI_ report which is interactable as you would use the _Power BI_ application.

Additionally you can hide sidebar to increase the amount of space _Power BI_ embed uses on the screen:

![img](/readme-images/web%20app%20no%20side%20example.jpg)

### Technologies used for web application implementation

It was decided to use ***Vue.js*** framework for _web application_ implementation. Additionally to implement appealing <ins>Graphical User Interface</ins><sup>later it's going to be called GUI</sup> design we used ***Vuetify*** package for additional _GUI_ components.

### How to setup sidebar for _web application_

To setup sidebar for _web application_ you need to edit [sidebar config file](/hanza-web-app/public/data.json).

Below you can see the sidebar implementation in _web application_ and instructions on how to set it up using above mentioned file.

![img](/readme-images/web%20app%20setup.jpg)

#### Headers/Categories setup

```
[
...
{
      "type": "subheader",
      "title": "subheader - Example 1"
},
...
//Here you input information regarding buttons that are affiliated with **subheader - Example 1**\\
...
{
      "type": "subheader",
      "title": "subheader - Example 2"
},
...
//Here you input information regarding buttons that are affiliated with **subheader - Example 2**\\
...
]
```

```
[
    {
      "type": "subheader",
      "title": "Pre - welding"
    },
    {
      "title": "Plasma 5110",
      "value": 0,
      "report": {
        "title": "Plasma 5110",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=668572c0-36f3-45eb-86f0-73d07502fac7&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      }
    },
    {
      "title": "Laser 5210",
      "value": 1,
      "report": {
        "title": "Laser 5210",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=b504ccfe-6aba-489e-b6eb-c7141b4b0e7a&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      }
    },
    {
      "title": "Bending 5250",
      "value": 2,
      "report": {
        "title": "Bending 5250",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=dc8d7299-9d3d-4930-91d6-7928945e8ed6&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      }
    },
    {
      "title": "Machining 5300",
      "value": 3,
      "report": {
        "title": "Machining 5300",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=7b62f5f8-d733-432a-967b-77698f4ce58a&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "subheader",
      "title": "Welding"
    },
    {
      "title": "Welding 5150",
      "value": 4,
      "report": {
        "title": "Welding 5150",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=c747faf3-fda4-4fc0-8cec-4564390aa6d7&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      }
    },

    { 
      "type": "divider" 
    },
    { 
      "type": "subheader", 
      "title": "After-welding" 
    },
    { 
      "title": "WET Paint 5410", 
      "value": 5,
      "report": {
        "title": "WET Paint 5410",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=286d317e-fd01-495b-a85d-279d721cd00c&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      } 
    },
    { 
      "title": "Powder Paint 5431", 
      "value": 6,
      "report": {
        "title": "Powder Paint 5431",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=b1737af2-cecb-4b30-bd26-a8ce0409a343&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      } 
    },
    { 
      "title": "Assembly 5500", 
      "value": 7,
      "report": {
        "title": "Assembly 5500",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=a6fb19a6-c74a-411d-b7ee-ea6d98a80584&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      }  
    },
    { 
      "title": "New Blast 5415", 
      "value": 8,
      "report": {
        "title": "New Blast 5415",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=e424c999-c4b3-4c97-a44d-9d959118ff5b&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      }  
    },
    { 
      "title": "Old Blast 5413", 
      "value": 9,
      "report": {
        "title": "Old Blast 5413",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=c3259f33-c378-4f9c-89d3-dd079cca5021&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      } 
    },
    { 
      "title": "Tank Wash 5417", 
      "value": 10,
      "report": {
        "title": "Tank Wash 5417",
        "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=ab93babd-5014-4275-a6e4-546a84382e4a&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
      }  
    }
  ]
```
