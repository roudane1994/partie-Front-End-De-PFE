import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';  

@Injectable({
  providedIn: 'root'
})
export class StatistiqueServiceService {

  constructor() { }

  getCase1(x,y){

    return new Chart('canvas', {  
      type: 'line',  
      data: {  
        labels: x,  

        datasets: [  
          {  
            data: y,  
            borderColor: '#3cb371',  
            backgroundColor: "#0000FF",  
          }  
        ]  
      },  
      options: {
        title: {
          display: true,
          text: 'Nombre de Incidents à group OCP ,2010 à 2018 '

        },
        legend: {  
          display: false  
        },  
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      }  
    });  

  }

  getCase2(x,y,z){

   return new Chart('canvas2', {
      type: 'bar',
      data: {
        labels: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],
        datasets: [
          {
            label: "Reseaux",
            backgroundColor: "#3e95cd",
            data: x
          },
          {
            label: "Logiciel",
            backgroundColor: "#8e5ea2",
            data: y
          },
          {
            label: "Systeme",
            backgroundColor: "#7e6aa2",
            data: z
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Nombre de Incidents par Type'
        }
      }
  });
  }

  getCase3(x,y,z){

    return new Chart("canvas3", {
      type: 'line',
      data: {
        labels: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
        datasets: [
        { 
            data: x,
            label: "Reseaux",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data:y,
            label: "Systeme",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: z,
            label: "Logiciel",
            borderColor: "#3cba9f",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Nombre de Incidents par Type,2010 à 2018'
        }
      }
    });
  }

  getCase4(x,y,z,anne){

    return new Chart("canvas4", {
      type: 'pie',
      data: {
        labels: ["Reseaux", "Logiciel", "Systeme"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [x,y,z]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Nombre de Incidents par Type en '+anne
        }
      }
  });

  
  }

  getCase5(x,y,z,w,anne){

    return new Chart("canvas5", {
      type: 'pie',
      data: {
        labels: ["Pc Fixe", "Pc Portable", "Imprimante", "Mobile"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
          data: [x,y,z,w]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Nombre de Incidents par Matériel en '+anne
        }
      }
  });

  }



}
