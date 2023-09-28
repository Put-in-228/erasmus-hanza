# ERASMUS HANZA PROJECT
This repo was made by <ins>Jevgenij Čiursin</ins><sup>_LT_</sup>, <ins>Lukas Titlius</ins><sup>_LT_</sup>, <ins>Shah Eiman Amzar Bin Shah Apandi</ins><sup>_DE_</sup>, <ins>Aleksandrs Veļikanovs</ins><sup>_LV_</sup>, <ins>Aleksandr Afanassjev</ins><sup>_EE_</sup>.

## Table of contents

- **[Project task](#project-task)**
- **[Power BI reports](#power-bi-reports)**
    - **[Report for OEE% and Productivity indicators example](#report-for-oee-and-productivity-indicators-example)**
    - **[Report for Late hours and Hours indicators example](#report-for-late-hours-and-hours-indicators-example)**
    - **[Report for Rejection costs, Safety, Maintenence and undefined interruptions example](#report-for-rejection-costs-safety-maintenence-and-undefined-interruptions-example)**
- **[Web application as data visualization solution](#web-application-as-data-visualization-solution)**


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

This screenshot shows two indicators (OEE, Productivity), below each graph there is a KPI block that shows whether the goal has been achieved. Here is a Productivity graph at the top, on a day Productivity must be at least 80 percent, the KPI graph takes the average of the Productivity columns, filtered by month, and shows whether the values has been achieved for a certain month.

### Report for Late hours and Hours indicators example
![img](/readme-images/late%20hours%20and%20hours.jpg)

Like in the previous screenshot, two indicators are selected (Late hours and Hours), which show the hours of lateness and the operating hours of the sensors.

### Report for Rejection costs, Safety, Maintenence and undefined interruptions example
![img](/readme-images/rejection%20costs-safety-maintenence%20and%20undefined%20interruptions.jpg)

In this table and graph, indicators such as Rejection costs, Safety/Quantity, Mainetance and Undefined interruption were selected. Also using the slicer, you can see how much expenses were by month and a KPI block was added to this char (goal = 100 per day).

On the tables can also be filtered by month and see how many emergencies there were; if the value is greater than zero, then it lights up red or less than one, it turns green. In addition to the month you can see on what day it happened.

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
{
      "type": "subheader", <-- Important to keep it as subheader
      "title": "subheader - Example 1" <-- The name of subheader to be shown (can be any)
},
...
//Here you input information regarding buttons that are affiliated with subheader - Example 1\\
...
{
      "type": "divider" <-- Important to keep it as divider //Place it in between the previous subheader buttons and new subheader\\
},
{
      "type": "subheader", <-- Important to keep it as subheader
      "title": "subheader - Example 2" <-- The name of subheader to be shown (can be any)
},
...
//Here you input information regarding buttons that are affiliated with subheader - Example 2\\
...
]
```

Description TBA

#### Buttons under Headers/Categories setup

```
[
...
//Here you input subheader as shown above\\ 1st subheader
...
{
      "title": "1st subheader Button 1", <-- Name of the button shown on the screen (can be any)
      "value": 0,
      "report": {
        "title": "Report title (any)",
        "embedUrl": "Refer to guide below on how to get embedUrl"
      }
},
{
      "title": "1st subheader Button 2",
      "value": 0,
      "report": {
        "title": "Report title (any)",
        "embedUrl": "Refer to guide below on how to get embedUrl"
      }
},
...
//Here you input subheader and divider as shown above\\ 2nd subheader
...
{
      "title": "2nd subheader Button 1",
      "value": 0,
      "report": {
        "title": "Report title (any)",
        "embedUrl": "Refer to guide below on how to get embedUrl"
      }
},
{
      "title": "2nd subheader Button 2",
      "value": 0,
      "report": {
        "title": "Report title (any)",
        "embedUrl": "Refer to guide below on how to get embedUrl"
      }
},
{
      "title": "2nd subheader Button 3",
      "value": 0,
      "report": {
        "title": "Report title (any)",
        "embedUrl": "Refer to guide below on how to get embedUrl"
      }
},
]
```

Description TBA

#### How to get embedUrl of _Power BI_ report for sidebar setup

To get ***embedUrl*** of _Power BI_ report that you want to show in _web application_ refer to the image below:

![img](/readme-images/web%20app%20report%20add.jpg)

After clicking `Website or portal` button you should get pop-up window as shown below:

![img](/readme-images/web%20app%20report%20add2.jpg)

The ***embedUrl*** that you need to use in [sidebar setup](/hanza-web-app/public/data.json) file is highlighted with red color, all you need to do is copy it and paste it on appropriate button.

#### Sidebar setup examples with _data.json_ file and screenshots of the page

<ins>First example below:</ins>

```
[
    {
      "type": "subheader",
      "title": "Subheader - Example 1"
    },
    {
      "title": "Button 1",
      "value": 0,
      "report": {
        "title": "Button 1",
        "embedUrl": ""
      }
    },
    {
      "title": "Button 2",
      "value": 1,
      "report": {
        "title": "Button 2",
        "embedUrl": ""
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "subheader",
      "title": "Subheader - Example 2"
    },
    {
      "title": "Button 3",
      "value": 2,
      "report": {
        "title": "Button 3",
        "embedUrl": ""
      }
    }
  ]
```

<ins>And how this looks like in app:</ins>

![img](/readme-images/web%20app%20sidebar%20example1.jpg)

<ins>Second example below:</ins>

```
[
    {
      "type": "subheader",
      "title": "Subheader - Example 1"
    },
    {
      "title": "Button 1",
      "value": 0,
      "report": {
        "title": "Button 1",
        "embedUrl": ""
      }
    },
    {
      "title": "Button 2",
      "value": 1,
      "report": {
        "title": "Button 2",
        "embedUrl": ""
      }
    },
    {
      "title":"Button 5",
      "value":2,
      "report": {
        "title":"Button 5",
        "embedUrl": ""
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "subheader",
      "title": "Subheader - Example 2"
    },
    {
      "title": "Button 3",
      "value": 3,
      "report": {
        "title": "Button 3",
        "embedUrl": ""
      }
    },
    {
      "type": "divider"
    },
    {
      "type":"subheader",
      "title": "Subheader - Example 3"
    },
    {
      "title": "Button 4",
      "value": 4,
      "report": {
        "title":"Button 4",
        "embedUrl": ""
      }
    }
  ]
```

<ins>And how this looks like in app:</ins>

![img](/readme-images/web%20app%20sidebar%20example2.jpg)
