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

Description TBA

#### Buttons under Headers/Categories

```
[
...
//Here you input subheader as shown above\\ 1st subheader
...
{
      "title": "1st subheader Button 1",
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
//Here you input subheader as shown above\\ 2nd subheader
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
...
]
```

Description TBA

#### How to get embedUrl of _Power BI_ report for sidebar setup

TBA