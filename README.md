# ERASMUS HANZA PROJECT
This repo was made by <ins>Jevgenij Čiursin</ins><sup>_LT_</sup>, <ins>Lukas Titlius</ins><sup>_LT_</sup>, <ins>Shah Eiman Amzar Bin Shah Apandi</ins><sup>_DE_</sup>, <ins>Aleksandrs Veļikanovs</ins><sup>_LV_</sup>, <ins>Aleksandr Afanassjev</ins><sup>_EE_</sup>.

## Table of contents

- **[Project task](#project-task)**
- **[Power BI reports](#power-bi-reports)**
    - **[Report for OEE% and Productivity indicators example](#report-for-oee-and-productivity-indicators-example)**
    - **[Report for Late hours and Hours indicators example](#report-for-late-hours-and-hours-indicators-example)**
    - **[Report for Rejection costs, Safety, Maintenence and undefined interruptions example](#report-for-rejection-costs-safety-maintenence-and-undefined-interruptions-example)**
- **[Web application as data visualization solution](#web-application-as-data-visualization-solution)**
    - **[Technologies used for web application implementation](#technologies-used-for-web-application-implementation)**
    - **[How to setup sidebar for _web application_](#how-to-setup-sidebar-for-web-application)**
        - **[Headers/Categories setup](#headerscategories-setup)**
        - **[Buttons under Headers/Categories setup](#buttons-under-headerscategories-setup)**
        - **[How to get embedUrl of _Power BI_ report for sidebar setup](#how-to-get-embedurl-of-power-bi-report-for-sidebar-setup)**
        - **[Sidebar setup examples with _data.json_ file and screenshots of the page](#sidebar-setup-examples-with-datajson-file-and-screenshots-of-the-page)**
    - **[Guide on how to setup project for _development_](#guide-on-how-to-setup-project-for-development)**
        - **[How to get HTTPS git repo URL](#how-to-get-https-git-repo-url)**
    - **[Guide on how to navigate through web application and use it](#guide-on-how-to-navigate-through-web-application-and-use-it)**
        - **[Front page guide](#front-page-guide)**
        - **[Slideshow mode guide](#slideshow-mode-guide)**
        - **[Slideshow mode during runtime](#slideshow-mode-during-runtime)**
        - **[Fullscreen mode guide](#fullscreen-mode-guide)**



## Project task

During **ERASMUS+ BIP** project our task was to create Power BI report templates to show ***Hanza*** company's data on TV screens<sup>Power BI report files can be found in [Power BI reports](/Power%20BI%20reports) folder</sup>. 

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

To define a category of the buttons (e. g. **pre-weld** departments) you need to create an object which is of `subheader` type as shown above and give it a title of your choice. If your web application has multiple categories, then after the last button of your previous category you need to include an object of `divider` type and then include the `subheader` for new category buttons.

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
      "value": 1,
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
      "value": 2,
      "report": {
        "title": "Report title (any)",
        "embedUrl": "Refer to guide below on how to get embedUrl"
      }
},
{
      "title": "2nd subheader Button 2",
      "value": 3,
      "report": {
        "title": "Report title (any)",
        "embedUrl": "Refer to guide below on how to get embedUrl"
      }
},
{
      "title": "2nd subheader Button 3",
      "value": 4,
      "report": {
        "title": "Report title (any)",
        "embedUrl": "Refer to guide below on how to get embedUrl"
      }
},
]
```

After defining `subheader` for the category you can include buttons which hold inside of them the name of the button - `title` and the `embedUrl` which visualizes the report that you _embed_ into application. `report` object holds `title` which doesn't show up on the screen but is visible in the background (or *source*), so the title for report can be the same as the button's name. It's **important** to note that each button going from <ins>top</ins> to <ins>bottom</ins> must have values starting from **0** and ending with a number that is the <ins>number of buttons - 1</ins>. For additional examples on how this sidebar setup works please refer to <ins>[this link](#sidebar-setup-examples-with-datajson-file-and-screenshots-of-the-page)</ins> and regarding `embedUrl` please refer to <ins>[this link](#how-to-get-embedurl-of-power-bi-report-for-sidebar-setup)</ins>.

#### How to get embedUrl of _Power BI_ report for sidebar setup

To get `embedUrl` of _Power BI_ report that you want to show in _web application_ refer to the image below:

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

### Guide on how to setup project for _development_

In this section you will be provided with instructions on how to download needed dependencies and libraries to continue developing this project.

Below is table with commands that you might frequently use during development:

| Command | What it does |
| --- | --- |
| cd "link to folder" | Use this to navigate yourself through folders on terminal (e. g. cd C:/Windows/win32) |
| npm install | Use this in vue.js project folder to install all the dependencies and libraries that are used |
| npm run dev | Use this in vue.js project folder to run demo of application for testing as end-user |

Before cloning repository you need to download [Node.js](https://nodejs.org/en) to be able to use `npm` commands 

After cloning repository with "git clone [https url](#how-to-get-https-git-repo-url)" that you execute in _Windows terminal_ you need to forward yourself to ***Vue.js*** project folder, which is -> [Vue.js project link in repo](/hanza-web-app), with `cd` command as shown above in the table and use `npm install` command to download dependencies to be able to run the project. When in need of testing _web application_ you need to use `npm run dev`, it will launch development server and provide a link in the _Windows terminal_ to access website. 

#### How to get HTTPS git repo URL

In this section you will be provided instructions on how to get `HTTPS` link to clone repository on your local device.

![img](/readme-images/gitrepo.jpg)

![img](https://placehold.co/15x15/red/red) - click with _LMB_ on `Code`, then choose `Local` tab and choose `HTTPS` clone method.<br>
![img](https://placehold.co/15x15/green/green) - copy the link which can be used to clone repository into your local machine.

### Guide on how to navigate through _web application_ and use it

In this section you will be guided on how to use _web application_ as end user. All the interactable buttons and features are going to be explained below.

#### Front page guide

![img](/readme-images/hanza%20web%20app%20demo1.jpg)

![img](https://placehold.co/15x15/red/red) - button to show main screen where you're able to freely choose which department's report to show on screen (no slideshow functionality)<br>
![img](https://placehold.co/15x15/blue/blue) - button to enter slideshow mode in _web application_, proceed to [Slideshow mode guide](#slideshow-mode-guide)<br>
![img](https://placehold.co/15x15/yellow/yellow) - buttons with tied report links that can be setup as shown in [button setup guide](#buttons-under-headerscategories-setup)

#### Slideshow mode guide

![img](/readme-images/hanza%20web%20app%20demo2.jpg)

![img](https://placehold.co/15x15/red/red) - buttons for departments, in _slideshow mode_ you click on them to choose the order in which they appear during slideshow `runtime`. At the bottom number shows how many departments are selected to be shown during slideshow `runtime`<br>
![img](https://placehold.co/15x15/blue/blue) - _sliding bar_ is used to select how often does the slide change on the screen, possible values are `0-60` seconds. Above _sliding bar_ you can see the number of seconds that pass.<br>
![img](https://placehold.co/15x15/green/green) - button to reset the ongoing slideshow `runtime`.<br>
![img](https://placehold.co/15x15/yellow/yellow) - button to start slideshow `runtime` after configuration.<br>
![img](https://placehold.co/15x15/cyan/cyan) - button to go fullscreen mode, refer to [fullscreen mode guide](#fullscreen-mode-guide).

#### Slideshow mode during runtime

![img](/readme-images/hanza%20web%20app%20demo3.jpg)

![img](https://placehold.co/15x15/red/red) - buttons to change the slides manually during slideshow mode `runtime`.

#### Fullscreen mode guide

![img](/readme-images/hanza%20web%20app%20demo4.jpg)

![img](https://placehold.co/15x15/red/red) - buttons to change the slides manually during slideshow mode `runtime`.<br>
![img](https://placehold.co/15x15/blue/blue) - button panel to switch to exact report slide from given order configuration manually.<br>
![img](https://placehold.co/15x15/yellow/yellow) - button to exit fullscreen mode. The button shows up when the **cursor** is close to the top of the screen. Additionally you can exit fullscreen mode with **Esc** button on the keyboard.